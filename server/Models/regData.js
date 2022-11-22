import mongoose from "mongoose";

const regSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    branch:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
});

const RegData = mongoose.model('RegData', regSchema, 'RegData');

export default RegData;