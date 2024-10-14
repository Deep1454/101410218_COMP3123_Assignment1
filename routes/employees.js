const express = require('express'); // importing the express library
const router = express.Router(); // create an instance of Express Router
// importing the employeeController.js from the controllers which contains our project logic
const employeeController = require('../controllers/employeeController'); 

// giving the appropriate routes for all endpoints which will call the method which is employeeController JS file
router.get('/employees', employeeController.getEmployees);
router.get('/employees/:eid', employeeController.getEmployeeById);
router.post('/employees', employeeController.createEmployee);
router.put('/employees/:eid', employeeController.updateEmployee);
router.delete('/employees/:eid', employeeController.deleteEmployee);

module.exports = router;
