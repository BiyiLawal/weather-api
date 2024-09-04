
# Weather API with Redis Caching and Rate Limiting

## Project Overview

This Weather API is designed to fetch and return weather data from a third-party service (Visual Crossing API). It is built using Node.js and Express and implements several key features to enhance performance and reliability, such as Redis caching and rate limiting.
I got the idea for this project on roadmap, more details [here](https://roadmap.sh/projects/weather-api-wrapper-service)

## Features

- **Fetch Weather Data**: Retrieve weather information for any city using a third-party API.
- **Redis Caching**: Implements in-memory caching with Redis to store and quickly retrieve previously requested weather data, reducing redundant API calls and improving response times.
- **Rate Limiting**: Limits the number of requests a client can make in a specific time period to prevent abuse and ensure fair usage of the API.
- **Error Handling**: Gracefully handles errors, including those from the third-party API, and provides meaningful error messages to clients.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **Redis**: In-memory data structure store used for caching.
- **Axios**: Promise-based HTTP client for making API requests.

## API Endpoints

### 1. **Get Weather Data**
   - **Endpoint**: `/api/weather/:city`
   - **Method**: GET
   - **Description**: Fetches weather data for a specific city. If the data is cached, it returns the cached data; otherwise, it fetches from the third-party API and caches the result.
   - **Request Parameters**: 
     - `:city` (string) - The name of the city for which to fetch weather data.
   - **Response**:
     ```json
     {
       "location": "Lagos",
       "temperature": "28°C",
       "description": "Partly Cloudy",
       "humidity": "78%",
       "windSpeed": "15 km/h"
     }
     ```

### 2. **Rate Limiting**
   - **Global Rate Limiting**: Limits each IP to 100 requests per 15 minutes across all endpoints.
   - **Strict Rate Limiting** (optional): Limits to 50 requests per 15 minutes on specific routes, like `/api/weather`.

## Installation

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **Redis**: You must have a Redis server running locally or remotely.
- **Visual Crossing API Key**: Sign up for Visual Crossing and obtain an API key.

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/weather-api.git
   cd weather-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   PORT=3000
   REDIS_URL=redis://localhost:6379
   WEATHER_API_KEY=your_visual_crossing_api_key
   WEATHER_API_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
   ```

4. **Run the Application**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`.

## Usage

### Testing with Thunder Client or Postman

1. **GET Weather Data**: 
   - Request: `GET http://localhost:3000/api/weather/lagos`
   - Response: JSON object with weather details for Lagos.

2. **Rate Limiting**:
   - Exceeding 100 requests within 15 minutes will return a `429 Too Many Requests` status with an appropriate error message.

## Project Structure

```plaintext
├── middleware/
│   ├── cache.js         # Redis cache middleware
│   ├── rateLimiter.js   # Rate limiting middleware
├── routes/
│   ├── weather.js       # Weather route handling
├── index.js             # Main entry point of the application
├── .env                 # Environment variables
├── .gitignore           # Git ignore file
├── package.json         # Node.js dependencies and scripts
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
