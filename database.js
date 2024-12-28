// Import the Supabase client
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'https://jjakwzoqpeyoeypostjv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYWt3em9xcGV5b2V5cG9zdGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDA4ODIsImV4cCI6MjA1MDk3Njg4Mn0.iAda63cKCidqGrO0tWAvn-zvsVqBQe3QjiWRQj-bDnU';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
