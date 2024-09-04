const weatherService = require('../services/weatherService');
const config = require('../config/config');
const redisClient = require('../config/redisClient');

const getWeather = async (req, res) => {
  const { city } = req.params;

  try {
    const cacheKey = `weather:${city}`;
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    const weatherData = await weatherService.fetchWeather(city);

    if (weatherData) {
      await redisClient.setEx(cacheKey, config.cacheExpiration, JSON.stringify(weatherData));
      return res.json(weatherData);
    }

    return res.status(404).json({ message: 'Weather data not found' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};

module.exports = {
  getWeather,
};