const mongoose = require('mongoose');
const Joi = require('joi');
const zxcvbn = require('zxcvbn');

// Define a schema for user input validation
const employeejoiSchema = Joi.object({
    employeeId: Joi.string().required(),
    name: Joi.string().min(2).max(50).required(),
    password: Joi.string()
      .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/)
      .min(8)
      .max(128)
      .required(),
  });

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    validate: [
      {
        validator: function (value) {
          const passwordStrength = zxcvbn(value).score;
          return passwordStrength >= 3; // Require a minimum strength of 3 out of 4
        },
        message: 'Password is too weak',
      },
      {
        validator: function (value) {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(value);
        },
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      },
    ],
  },
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minlength: [2, 'Your name must be at least 2 characters'],
    maxlength: [50, 'Your name cannot exceed 50 characters'],
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add the Joi validation to the Mongoose schema
employeeSchema.validateUser = async function (employee) {
    return employeejoiSchema.validateAsync(employee);
  };


const employees = mongoose.model("employees", employeeSchema);
module.exports = employees