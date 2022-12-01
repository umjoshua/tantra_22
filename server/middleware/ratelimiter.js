import rateLimit from 'express-rate-limit';

export const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 30,
  message: "Mission failed successfully. Have a coffee now!!",
  standardHeaders: true,
  legacyHeaders: false,
});