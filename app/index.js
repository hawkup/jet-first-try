const redis = require('redis');
const client = redis.createClient({ url: 'redis://redis:6379' });

client.on('error', (err) => {
  console.log(`Error ${err}`);
});

client.on('ready', () => {
  console.log('connected with redis');
});
