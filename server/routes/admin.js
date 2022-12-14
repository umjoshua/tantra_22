import express from 'express';
import { loginUser } from '../controllers/login.js';
import { getResponses } from '../controllers/responseData.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/api/:id', auth, getResponses);

export default router;