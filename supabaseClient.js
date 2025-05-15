// Konfigurasi Supabase Client
const { createClient } = require('@supabase/supabase-js');

// Ganti sesuai dengan URL dan API Key project Supabase Anda
defaultSupabaseUrl = 'https://rwbjsawngfvcbyitbbel.supabase.co'; // <-- Ganti ini
defaultSupabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3YmpzYXduZ2Z2Y2J5aXRiYmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMDQ5OTgsImV4cCI6MjA2Mjg4MDk5OH0.uvkFBOCps7O-Q_0kb0TVvUCyXuMMVyaTboRweEzYcok'; // <-- Ganti ini

const supabaseUrl = process.env.SUPABASE_URL || defaultSupabaseUrl;
const supabaseKey = process.env.SUPABASE_KEY || defaultSupabaseKey;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
