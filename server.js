// Importing necessary modules like express, mongoose, dotenv
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// configuring the .env file
dotenv.config();

// Importing appropriate routes employees and users from routes
const employeeRoutes = require('./routes/employees'); 
const userRoutes = require('./routes/users');        

const app = express();

app.use(express.json());

// setting up the mongodb connection using URI which is in .env and we are using path here to access here
mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('MongoDB connection error:', error));

// Using the employee and user routes 
app.use('/api/v1/emp', employeeRoutes);  
app.use('/api/v1/user', userRoutes);     

// Setting up the port
const PORT = process.env.PORT || 1454;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
