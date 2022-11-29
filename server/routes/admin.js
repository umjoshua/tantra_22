import express from 'express';
import { loginUser } from '../controllers/login.js';
import { getResponses, getCsResponses, getAdsResponses } from '../controllers/responseData.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', loginUser);
router.get('/api/responses', auth, getResponses);
router.get('/api/csresponses', auth, getCsResponses);
router.get('/api/adsresponses', auth, getAdsResponses);

export default router;