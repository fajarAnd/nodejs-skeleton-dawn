const nconf = require('nconf');

nconf
  .argv()
  .env(['NODE_ENV', 'PORT'])
  .file({ file: './config.json' })
  .defaults({
    PORT: 3123,
  });

module.exports = nconf;
