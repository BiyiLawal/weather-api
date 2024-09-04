const rateLimit = require('express-rate-limit');

// Defining the rate limiting rule
const limiter = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 75, // Limiting each IP to 75 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    headers: true, 
});

module.exports = limiter;