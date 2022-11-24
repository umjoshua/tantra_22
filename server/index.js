import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

// import adminRoutes from './routes/admin.js';
import registerRoutes from './routes/register.js';


const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zevvmfz.mongodb.net/test?retryWrites=true&w=majority`;
app.use(express.json())

// app.use('/admin',adminRoutes);
app.use('/register',registerRoutes)


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(PORT, () => {
        console.log('App is listening')
    })
}).catch((error) => {
    console.log("failed");
});