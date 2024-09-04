const axios = require('axios');
const config = require('../config/config');

const fetchWeather = async (city) => {
    try {
        const url = `${config.apiBaseUrl}${city}`;
        const response = await axios.get(url, {
          params: {
            unitGroup: 'us', // Specify units (us for Fahrenheit)
            key: config.apiKey, // Use the API key from environment variables
            contentType: 'json', // Get JSON response
          },
        });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

module.exports = {
  fetchWeather,
};