import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

const UserDetails = mongoose.model('UserDetails', userSchema, 'UserDetails');

export default UserDetails;