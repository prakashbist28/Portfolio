const express = require('express');

require('dotenv').config(); 
const cors = require('cors');
const app =express();


app.use(cors({
  origin: 'https://prakashbist.onrender.com', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
// Define a sample API route
app.get('/api/api-key', (req, res) => {
    const serviceid =  process.env.SERVICE_ID;
    const templateid =  process.env.TEMPLATE_ID;
    const userid =  process.env.USER_ID;

    res.json({ serviceid, templateid, userid });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});