import { RegData } from '../Models/regData.js';

export const Register = async (req, res) => {
    const regData = req.body;
    const newData = new RegData(regData);
    await newData.save();
    res.json(regData);
}