-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create discovery flight bookings table
create table if not exists discovery_flight_bookings (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text not null,
  date date not null,
  time time not null,
  notes text,
  status text default 'pending'::text
);

-- Enable row level security for discovery flight bookings
alter table discovery_flight_bookings enable row level security;

-- Create policy to allow inserts from authenticated service role
create policy "Enable insert for service role only" 
  on discovery_flight_bookings for insert 
  with check (auth.role() = 'service_role');

-- Create policy to allow reads from authenticated service role
create policy "Enable read for service role only" 
  on discovery_flight_bookings for select 
  using (auth.role() = 'service_role');

-- Create contact messages table
create table if not exists contact_messages (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  interest text not null,
  message text not null,
  status text default 'unread'::text
);

-- Enable row level security for contact messages
alter table contact_messages enable row level security;

-- Create policy to allow inserts from authenticated service role
create policy "Enable insert for service role only" 
  on contact_messages for insert 
  with check (auth.role() = 'service_role');

-- Create policy to allow reads from authenticated service role
create policy "Enable read for service role only" 
  on contact_messages for select 
  using (auth.role() = 'service_role'); 