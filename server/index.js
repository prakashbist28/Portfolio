const express = require('express');

require('dotenv').config(); 

const app =express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://prakashbist.onrender.com'); // Replace with the origin of your React app
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
// Define a sample API route
app.get('/api/portfolio', (req, res) => {
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