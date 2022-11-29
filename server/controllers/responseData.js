import { RegData } from '../Models/regData.js';

export const getResponses = async (req, res) => {
    try {
        const regDetails = await RegData.find();
        res.status(200).json(regDetails);
    }
    catch (error) {
        console.log(error);
    }
}

export const getCsResponses = async (req, res) => {
    try {
        const regDetails = await RegData.find({dept: "cse"});
        res.status(200).json(regDetails);
    }
    catch (error) {
        console.log(error);
    }
}

export const getAdsResponses = async (req, res) => {
    try {
        const regDetails = await RegData.find({dept: "ads"});
        res.status(200).json(regDetails);
    }
    catch (error) {
        console.log(error);
    }
}