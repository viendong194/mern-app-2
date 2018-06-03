import jwt from 'jsonwebtoken';
import User from '../models/user';

import config from '../config';


/**
 *  The Auth Checker middleware function.
 */
const authCheck = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];

    // decode the token using a secret key-phrase
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        // the 401 code is for unauthorized status
        if (err) { return res.status(401).end(); }

        const userId = decoded.sub;

        // check if a user exists
        return User.findById(userId, (userErr, user) => {
        if (userErr || !user) {
            return res.status(401).end();
        }

        return next();
        });
    });
};

export default authCheck