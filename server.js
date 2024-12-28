// Import required modules
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client
const supabaseUrl = 'https://jjakwzoqpeyoeypostjv.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYWt3em9xcGV5b2V5cG9zdGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDA4ODIsImV4cCI6MjA1MDk3Njg4Mn0.iAda63cKCidqGrO0tWAvn-zvsVqBQe3QjiWRQj-bDnU'; // Replace with your Supabase Anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Middleware to parse JSON requests
app.use(express.json());

// Example route to fetch data from Supabase
app.get('/data', async (req, res) => {
    const { data, error } = await supabase
        .from('ServerTable') // Replace with your table name
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
