// Import required modules
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const multer = require('multer'); // Middleware for handling file uploads

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client
const supabaseUrl = 'https://jjakwzoqpeyoeypostjv.supabase.co'; // Your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYWt3em9xcGV5b2V5cG9zdGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDA4ODIsImV4cCI6MjA1MDk3Njg4Mn0.iAda63cKCidqGrO0tWAvn-zvsVqBQe3QjiWRQj-bDnU'; // Your Supabase Anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to fetch storage data
app.get('/api/storage', async (req, res) => {
    const { data, error } = await supabase
        .from('ServerTable') // Replace with your actual table name
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// Endpoint to handle file uploads
app.post('/api/upload', upload.single('file'), async (req, res) => {
    const { buffer, originalname } = req.file;

    // Upload the file to Supabase storage
    const { data, error } = await supabase.storage
        .from('RemoteCloud Storage') // Replace with your bucket name
        .upload(originalname, buffer);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'File uploaded successfully!', data });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
