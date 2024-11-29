const express = require('express'); // importing the express library
const router = express.Router(); // create an instance of Express Router
// importing the employeeController.js from the controllers which contains our project logic
const employeeController = require('../controllers/employeeController'); 
const authenticate = require('../middleware /auth');
authenticate

// giving the appropriate routes for all endpoints which will call the method which is employeeController JS file
router.get('/employees',authenticate,employeeController.getEmployees);
router.get('/employees/:eid', authenticate,employeeController.getEmployeeById);
router.post('/employees', authenticate, employeeController.createEmployee);
router.put('/employees/:eid',authenticate, employeeController.updateEmployee);
router.delete('/employees/:eid', authenticate,employeeController.deleteEmployee);

module.exports = router;
