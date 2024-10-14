// importing mongoose library to manage database
const mongoose = require('mongoose');

// created employer Schema with proper data type and requirement as per the user schema template was given in the project file. 
const user_schema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
// exporting this model which will further allows CRUD Operations with the employees Data.
module.exports = mongoose.model('User', user_schema);


