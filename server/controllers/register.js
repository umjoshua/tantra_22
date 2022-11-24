import {
    AdsRegData,
    AshRegData,
    ceRegData,
    aeiRegData,
    cseRegData,
    meRegData,
    eeeRegData,
    eceRegData,
    commonRegData
} from '../Models/regData.js';

export const Register = async (req, res) => {
    const regData = req.body;
    const newData = new AdsRegData(regData);
    await newData.save();
    res.json(regData);
}