// importing mongoose library to manage database
const mongoose = require('mongoose');

// created employer Schema with proper data type and requirement as per the employee schema template was given in the project file
const employeeSchema = new mongoose.Schema({
    
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    date_of_joining: { type: Date, required: true },
    department: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
// exporting this model which will further allows CRUD Operations with the employees Data
module.exports = mongoose.model('Employee', employeeSchema);