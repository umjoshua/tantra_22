import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

import eventRoutes from './routes/events.js';
import adminRoutes from './routes/admin.js'


const app = express();
dotenv.config();

const PORT = process.env.PORT;
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zevvmfz.mongodb.net/test`;
app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors());
app.use('/events', eventRoutes);
app.use('/admin', adminRoutes);


mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(PORT, () => {
        console.log('App is listening')
    })
}).catch((error) => {
    console.log("failed");
});