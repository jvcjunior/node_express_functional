import rateLimit from 'express-rate-limit';

export const rateLimiterUsingThirdParty = rateLimit({
  // windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  windowMs: 10*60*1000, // 15 minutes
  max: 3,
  message: 'You have exceeded the 100 requests in 10m limit!', 
  headers: true,
});