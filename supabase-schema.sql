-- Consultations Table for BR Associates Law Firm
-- This table stores all consultation requests submitted through the website

CREATE TABLE consultations (
  -- Primary key
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Client Information
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT,

  -- Consultation Details
  legal_matter TEXT NOT NULL,
  consultation_mode TEXT NOT NULL,
  preferred_date_time TEXT,
  description TEXT,

  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled')),

  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on created_at for faster sorting
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);

-- Create index on status for filtering
CREATE INDEX idx_consultations_status ON consultations(status);

-- Enable Row Level Security (RLS)
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow INSERT for anyone (form submissions)
CREATE POLICY "Allow public insert" ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow SELECT for authenticated users only
CREATE POLICY "Allow authenticated read" ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow UPDATE for authenticated users only
CREATE POLICY "Allow authenticated update" ON consultations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_consultations_updated_at
  BEFORE UPDATE ON consultations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for documentation
COMMENT ON TABLE consultations IS 'Stores all consultation requests from the website form';
COMMENT ON COLUMN consultations.status IS 'Current status: pending, contacted, scheduled, completed, cancelled';
