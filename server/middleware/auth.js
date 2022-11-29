import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import UserDetails from '../Models/userDetails.js';

export const auth = async (req, res, next) => {

    function parseJwt(token) {
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }

    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'Authorization denied' });
    }

    try {
        const userRole = parseJwt(token);
        const user = await UserDetails.find({ role: userRole});

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error || user.role != userRole) {
                return res.status(401).json({ msg: 'Invalid token' });
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        console.log(err);
        // console.error('something wrong with auth middleware');
        res.status(500).json({ msg: 'Server Error' });
    }
}