// backend/server.cjs
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// MongoDB Connection URL and Database Name
const uri = process.env.MONGODB_URI; // MongoDB URI from environment variable
const dbName = 'shaina_webportfolio'; // Database name
const collectionName = 'contacts'; // Collection name (ensure consistent case)

// Nodemailer Transporter Configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fshaina75@gmail.com', // Your Gmail email address
    pass: 'nemd xrtu kwva pbyy', // Your Gmail password (better to use environment variable)
  },
});

// Connect to MongoDB
let client;
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((connectedClient) => {
    client = connectedClient;
    console.log('Connected to MongoDB');

    // Specify database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Route to handle form submission
    app.post('/submit-form', async (req, res) => {
      const formData = req.body;

      try {
        // Insert form data into MongoDB
        const result = await collection.insertOne(formData);
        console.log('Form data inserted:', result);

        const userMailOptions = {
          from: 'shainabiancaf.delacruz@gmail.com',
          to: formData.email,
          subject: 'Form Submission Successful',
          html: `
            <html>
              <head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
              </head>
              <body>
                <div style="font-family: 'Space Mono', monospace; margin: auto; background-color: black; color: white; padding: 20px; border-radius: 10px; width:500px; text-align:center">
                  <h2 style="font-size: 30px; font-weight: bold; margin-bottom: 10px; color: white;">Form Submission Successful</h2>
                  <p style="font-size: 25px; margin-bottom: 20px;">Thank you for submitting the form. We will get back to you soon!</p>
                </div>
              </body>
            </html>
          `,
        };

        transporter.sendMail(userMailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email to user:', error);
          } else {
            console.log('Email sent to user:', info.response);
          }
        });

        // Send HTML email notification to fshaina75@gmail.com with form details
        const adminMailOptions = {
          from: 'shainabiancaf.delacruz@gmail.com',
          to: 'fshaina75@gmail.com',
          subject: 'New Form Submission',
          html: `
            <html>
              <head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
              </head>
              <body>
                <div style="font-family: 'Space Mono', monospace; margin: auto; background-color: black; color: white; padding: 20px; border-radius: 10px; width:500px;">
                  <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px; text-align:center">New Form Submission Details</h2>
                  <p style="font-size: 16px; margin-bottom: 5px;"><strong>First Name:</strong> ${formData.firstName}</p>
                  <p style="font-size: 16px; margin-bottom: 5px;"><strong>Last Name:</strong> ${formData.lastName}</p>
                  <p style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: white; text-decoration: none;">${formData.email}</a></p>
                  <p style="font-size: 16px; margin-bottom: 5px;"><strong>Message:</strong> ${formData.message}</p>
                  <p style="font-size: 16px; margin-bottom: 5px;"><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
                </div>
              </body>
            </html>
          `
        };

        transporter.sendMail(adminMailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email to admin:', error);
          } else {
            console.log('Email sent to admin:', info.response);
          }
        });

        res.status(200).json({ message: 'Form submitted successfully' });
      } catch (error) {
        console.error('Error inserting form data:', error);
        res.status(500).json({ message: 'Failed to submit form' });
      }
    });

    // Route handler for root path
    app.get('/', (req, res) => {
      res.send('Hello from Express server');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
