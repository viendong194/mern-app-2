import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import apiRoutes from './routes/api';
import passport from 'passport';
import config from './config';

// passport strategy
import localSignupStrategy from './passport/local-signup';
import localLoginStrategy from './passport/local-login';
// authentication middleware
import authCheck from './middleware/authCheck';
const app = express();

const API_PORT = process.env.API_PORT || 3001;

// connect database and load models
import connectDB from './models/index';
connectDB(config.dbUri);
import User from './models/user';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// pass the passport middleware
app.use(passport.initialize());

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


app.use('/api', authCheck);


app.use('/api',apiRoutes)
app.use('/auth', authRoutes);

// app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));