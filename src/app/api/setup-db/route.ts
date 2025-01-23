import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/utils/supabase';

export async function GET(request: Request) {
  try {
    console.log('Starting database setup...');

    // Create discovery flight bookings table
    console.log('Creating discovery flight bookings table...');
    const { data: flightData, error: flightError } = await supabaseAdmin
      .from('discovery_flight_bookings')
      .select('*')
      .limit(1);

    if (flightError?.code === '42P01') {
      // Table doesn't exist, create it
      const { error: createError } = await supabaseAdmin
        .from('discovery_flight_bookings')
        .insert([
          {
            name: 'Test User',
            email: 'test@example.com',
            phone: '123-456-7890',
            date: new Date().toISOString().split('T')[0],
            time: new Date().toTimeString().split(' ')[0],
            notes: 'Test booking',
            status: 'pending'
          }
        ]);

      if (createError) {
        console.error('Error creating discovery flight bookings table:', createError);
        return NextResponse.json({ error: createError.message }, { status: 500 });
      }
    }

    // Create contact messages table
    console.log('Creating contact messages table...');
    const { data: contactData, error: contactError } = await supabaseAdmin
      .from('contact_messages')
      .select('*')
      .limit(1);

    if (contactError?.code === '42P01') {
      // Table doesn't exist, create it
      const { error: createError } = await supabaseAdmin
        .from('contact_messages')
        .insert([
          {
            name: 'Test User',
            email: 'test@example.com',
            phone: '123-456-7890',
            interest: 'General Inquiry',
            message: 'Test message',
            status: 'unread'
          }
        ]);

      if (createError) {
        console.error('Error creating contact messages table:', createError);
        return NextResponse.json({ error: createError.message }, { status: 500 });
      }
    }

    console.log('Database setup completed successfully');
    return NextResponse.json({ message: 'Database tables created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create tables' },
      { status: 500 }
    );
  }
} 