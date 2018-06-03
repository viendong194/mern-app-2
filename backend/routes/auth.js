import express from 'express';
import validator from 'validator';
import { ValidationError } from 'mongoose';
import passport from 'passport';

const router = new express.Router();


const validateSignupForm = (payload )=>{

  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}


const validateLoginForm = (payload) => {

  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/signup', (req, res) => {
  const validationResult = validateSignupForm(req.body);
  
  if(!validationResult.success){
    return res.json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

    return passport.authenticate('local-signup', (err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                // the 11000 Mongo code is for a duplication email error
                // the 409 HTTP status code is for conflict error
                return res.json({
                    success: false,
                    message: 'Check the form for errors.',
                    errors: {
                        email: 'This email is already taken.'
                    }
                });
            }
    
            return res.json({
                success: false,
                message: 'Could not process the form.'
            });
        }
    
        return res.json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
            });
        })(req,res);

});

router.post('/login', (req, res) => {
    const validationResult = validateLoginForm(req.body);
      if(!validationResult.success){
        return res.json({
          success: false,
          message: validationResult.message,
          errors: validationResult.errors
          });
      }
        return passport.authenticate('local-login', (err, token, userData) => {
            if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.json({
                success: false,
                message: err.message
                });
            }
        
            return res.json({
                success: false,
                message: 'Could not process the form.'
            });
            }
        
        
            return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            user: userData
            });
        })(req,res);

});


export default router;