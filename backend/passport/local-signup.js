import User from '../models/user';
import passportLocal from 'passport-local';
const PassportLocalStrategy = passportLocal.Strategy;


/**
 * Return the Passport Local Strategy object.
 */
const localSignup = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});

export default localSignup;