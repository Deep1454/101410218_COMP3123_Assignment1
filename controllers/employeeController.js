const Employee = require('../models/employees'); // giving route to the employees file which is in models 

// This function will fetch all employees from the employees.js (Database) and will return them in response
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// same as like .getemployess but this function will help to find the employee with specific ID.
exports.getEmployeeById = async (req, res) => {
    const { eid } = req.params;
    try {
        const employee = await Employee.findById(eid);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//  Basically, this function will create a new Empolyee using the proper Schema for employees
exports.createEmployee = async (req, res) => {
    const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;

    const newEmployee = new Employee({
        first_name,
        last_name,
        email,
        position,
        salary,
        date_of_joining,
        department
    });

    try {
        const employee = await newEmployee.save();
        res.status(201).json({ message: 'Employee created successfully', employee_id: employee._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// This function will update an employee for that first it will fecth data from database and then later update the changes in employee's information
exports.updateEmployee = async (req, res) => {
    const { eid } = req.params;
    const updates = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(eid, updates, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee updated successfully', updatedEmployee });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// this function will delete the employee with id which is provided in endpoint from the databse.
exports.deleteEmployee = async (req, res) => {
    const { eid } = req.params;

    try {
        const deletedEmployee = await Employee.findByIdAndDelete(eid);
        if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.status(204).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
