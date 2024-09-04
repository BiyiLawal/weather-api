require('dotenv').config();

module.exports = {
  apiKey: process.env.WEATHER_API_KEY,
  apiBaseUrl: process.env.WEATHER_API_BASE_URL,
  redisUrl: process.env.REDIS_URL,
  cacheExpiration: process.env.CACHE_EXPIRATION || 3600,
};