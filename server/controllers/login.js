import UserDetails from '../Models/userDetails.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await UserDetails.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'incorrect username' });
        }
        const isCorrect = await bcrypt.compare(password, user.password);

        if (!isCorrect) {
            return res.status(400).json({ msg: 'incorrect password' });
        }

        const payload = {
            id: user._id,
            role: user.role,
        };

        const signOptions = {
            expiresIn: "23h",
        }

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            signOptions
        );

        res.json({token});
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }   
}