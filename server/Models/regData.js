import mongoose from "mongoose";

const RegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
        type: String,
    },
    department:{
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    phno: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    tid: {
        type: String,
    },
    stateName: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    }
});


export const RegData = mongoose.model('RegSchema', RegSchema, 'RegSchema');