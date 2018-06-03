import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// define the User model schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        index: { unique: true }
    },
    password: String,
    name: String
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
    const user = this;

    if (!user.isModified('password')) return next();


    return bcrypt.genSalt((saltError, salt) => {
        if (saltError) { return next(saltError); }

        return bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) { return next(hashError); }

        // replace a password string with hash value
        user.password = hash;

        return next();
        });
    });
});

export default mongoose.model('User',UserSchema);