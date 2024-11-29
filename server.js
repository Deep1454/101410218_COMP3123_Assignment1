// Importing necessary modules like express, mongoose, dotenv
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Importing CORS module for cross-origin requests

// Configuring the .env file
dotenv.config();

// Importing the appropriate routes for employees and users
const employeeRoutes = require('./routes/employees');
const userRoutes = require('./routes/users');

// Creating an Express app instance
const app = express();

// Using CORS middleware to enable cross-origin requests
app.use(cors());

// Using JSON middleware to parse JSON bodies
app.use(express.json());

// Setting up the MongoDB connection using URI from .env
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Using the employee and user routes
app.use('/api/v1/emp', employeeRoutes); // Employee routes
app.use('/api/v1/user', userRoutes); // User routes

// Setting up the port for the server
const PORT = process.env.PORT || 1455;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
