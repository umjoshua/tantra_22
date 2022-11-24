import express from 'express';
import { Register } from '../controllers/register.js';

const router = express.Router();


router.post('/', Register);

export default router;