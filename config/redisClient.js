const redis = require('redis');
const config = require('./config');

const client = redis.createClient({
  url: config.redisUrl,
});

client.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await client.connect();
})();

module.exports = client;