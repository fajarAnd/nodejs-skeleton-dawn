const request = require('request-promise');
const _ = require('lodash');

class RequestLibs {
  constructor(host) {
    this.host = host;
  }

  async get(option, logData = {}) {
    try {
      const headers = {
        ...option.headers,
        'Content-Type': _.result(option, 'headers.contentType', 'application/json'),
        'request-id': _.result(logData, 'requestId'),
      };

      const options = {
        ...option,
        method: 'GET',
        url: `${this.host}${option.url}`,
        headers,
        json: true,
      };

      const result = await request(options);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async post(option, logData = {}) {
    try {
      const headers = {
        ...option.headers,
        'Content-Type': _.result(option, 'headers.contentType', 'application/json'),
        'request-id': _.result(logData, 'requestId'),
      };

      const options = {
        ...option,
        method: 'POST',
        url: `${this.host}${option.url}`,
        headers,
        json: true,
      };

      const result = await request(options);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async put(option, logData = {}) {
    try {
      const headers = {
        ...option.headers,
        'Content-Type': _.result(option, 'headers.contentType', 'application/json'),
        Authorization: _.result(option, 'headers.authorization'),
        'request-id': _.result(logData, 'requestId'),
      };

      const options = {
        ...option,
        method: 'PUT',
        url: `${this.host}${option.url}`,
        headers,
        json: true,
      };

      const result = await request(options);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async delete(option, logData = {}) {
    try {
      const headers = {
        ...option.headers,
        'Content-Type': _.result(option, 'headers.contentType', 'application/json'),
        'request-id': _.result(logData, 'requestId'),
      };

      const options = {
        ...option,
        method: 'DELETE',
        url: `${this.host}${option.url}`,
        headers,
        json: true,
      };

      const result = await request(options);

      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = RequestLibs;
