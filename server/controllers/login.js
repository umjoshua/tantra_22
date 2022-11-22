import UserDetails from '../Models/userDetails.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await UserDetails.findOne({ username });
        console.log(user);
        if (!user) {
            return res.status(400).json({ msg: 'incorrect username' });
        }
        const isCorrect = await bcrypt.compare(password, user.password);
        if (!isCorrect) {
            return res.status(400).json({ msg: 'incorrect password' });
        }
        jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '30 days' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}