const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

// Route to get weather data for a city
router.get('/:city', async (req, res) => {
  const city = req.params.city;
  const weatherData = await weatherService.fetchWeather(city);

  if (weatherData) {
    res.json(weatherData);
  } else {
    res.status(500).json({ error: 'Could not fetch weather data' });
  }
});

module.exports = router;