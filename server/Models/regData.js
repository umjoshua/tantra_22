import mongoose from "mongoose";

const AdsRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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

const AshRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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


const aeiRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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

const ceRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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

const commonRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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

const cseRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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


const eceRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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

const eeeRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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

const meRegSchema = mongoose.Schema({
    event_id: {
        type: Number,
    },
    event_name: {
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
});

export const AdsRegData = mongoose.model('AdsRegData', AdsRegSchema, 'AdsRegData');
export const AshRegData = mongoose.model('AshRegData', AshRegSchema, 'AshRegData');
export const aeiRegData = mongoose.model('aeiRegData', aeiRegSchema, 'aeiRegData');
export const ceRegData = mongoose.model('ceRegData', ceRegSchema, 'ceRegData');
export const commonRegData = mongoose.model('commonRegData', commonRegSchema, 'commonRegData');
export const cseRegData = mongoose.model('cseRegData', cseRegSchema, 'cseRegData');
export const eceRegData = mongoose.model('eceRegData', eceRegSchema, 'eceRegData');
export const eeeRegData = mongoose.model('eeeRegData', eeeRegSchema, 'eeeRegData');
export const meRegData = mongoose.model('meRegData', meRegSchema, 'meRegData');