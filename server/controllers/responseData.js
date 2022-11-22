import RegData from '../Models/regData.js';

export const getResponses = async (req, res) => {
    try {
        const regDetails = await RegData.find();
        res.status(200).json(regDetails);
    }
    catch (error) {
        console.log(error);
    }
}