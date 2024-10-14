const express = require('express'); // importing the express 
const router = express.Router();
const { check } = require('express-validator'); // importing the express-validator to validate the user information
// importing the userController and spefically signup, login method which in usercontroller.js 
const { signup, login } = require('../controllers/userController'); 

//giving the routes for signup endpoint which will call the signup method which is in controller file
router.post(
    '/signup',
    [
        // validating the inputs while creating the users 
        // if the username is empty it will throw an error message saying "Username cannot be an empty"
        // if the length of username is less than 3 characters it will say "Username must be at least 3 characters long"
      check('username', 'Username cannot be empty')
        .notEmpty()
        .withMessage('Username cannot be empty')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long'),
  
      // If the email is not in correct format it will throw a message saying "Please enter a valid email"
      // And, if the email field is an empty it will say "Email is required"
      check('email', 'Enter your email in the correct format')
        .isEmail()
        .withMessage('Please enter a valid email')
        .notEmpty()
        .withMessage('Email is required'),
     // If the password is empty application gonna say "Password cannot be empty"
      check('password', 'Password is required')
        .notEmpty()
        .withMessage('Password cannot be empty')
    ],signup
  );

  //giving the appropriate routes for login endpoint which will call the login method which is in controller file
router.post('/login',[
    // Same as like username if the email is empty it error message will generate "Email cannot be empty"
    // And, if its not in correct format it will gonna say "Enter your email in the correct format"
    check('email', 'Email is required')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Enter your email in the correct format'),
 // If the password is empty then it will say "Password cannot be empty."
    check('password', 'Password is required')
    .notEmpty()
    .withMessage('Password cannot be empty'),
], login);

module.exports = router;
