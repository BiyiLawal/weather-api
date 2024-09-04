const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');
const logger = require('./utils/logger');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();

app.use(logger); // To log API requests
app.use(express.json());

//applying rate limiter to all requests
app.use(rateLimiter);

app.use('/weather', weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});