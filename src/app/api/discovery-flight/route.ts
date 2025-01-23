import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/utils/supabase';
import { sendDiscoveryFlightEmail } from '@/utils/resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Verify Supabase connection
    const { data: healthCheck, error: healthError } = await supabaseAdmin
      .from('discovery_flight_bookings')
      .select('count')
      .limit(1);

    if (healthError) {
      console.error('Database connection error:', JSON.stringify(healthError));
      return NextResponse.json(
        { error: 'Database connection failed. Please try again later.' },
        { status: 500 }
      );
    }
    
    // Store the booking in Supabase
    const { error: dbError } = await supabaseAdmin
      .from('discovery_flight_bookings')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          date: data.date,
          time: data.time,
          notes: data.notes || '',
          status: 'pending'
        }
      ]);

    if (dbError) {
      console.error('Database error:', JSON.stringify(dbError));
      return NextResponse.json(
        { error: dbError.message || 'Failed to store booking' },
        { status: 500 }
      );
    }

    // Send confirmation emails
    try {
      await sendDiscoveryFlightEmail(data);
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Still return success since the booking was saved
      return NextResponse.json(
        { 
          message: 'Booking saved but email notification failed. Our team will contact you shortly.',
          warning: 'Email notification failed'
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'Booking submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
} 