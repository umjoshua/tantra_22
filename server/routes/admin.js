import express from 'express';
import { loginUser } from '../controllers/login.js';
// import { getResponses } from '../controllers/responseData.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', loginUser);
// router.get('/responses', auth, getResponses);

export default router;