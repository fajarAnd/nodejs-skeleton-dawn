/* global CustomStatusCode */
const isNil = require('lodash/isNil');
const isObject = require('lodash/isObject');
const result = require('lodash/result');
const camelCase = require('lodash/camelCase');
const fs = require('fs');
const path = require('path');

exports.error = (res, err, httpCodeStatus, errorCode) => {
  const resultPrint = {};
  resultPrint.status = result(err, 'status') || result(err, 'statusCode') || 400;
  resultPrint.errors = {};

  if (isNil(httpCodeStatus) && isObject(err) && isNil(errorCode)) {
    resultPrint.errors.message = result(err, 'message') || result(err, 'msg') || 'Bad Request';

    const isStatusCodeDuplicate = result(err, 'status') || result(err, 'statusCode');
    const isMessageDuplicate = result(err, 'message') || result(err, 'msg');
    resultPrint.errors.stackTrace = err;
    if (isStatusCodeDuplicate) {
      delete resultPrint.errors.stackTrace.statusCode;
    }
    if (isMessageDuplicate) {
      delete resultPrint.errors.stackTrace.message;
    }
  } else {
    const message = 'The server encountered an unexpected condition which prevented it from fulfilling the request.';
    resultPrint.status = httpCodeStatus || resultPrint.status;
    resultPrint.errors.message = err || message;
    resultPrint.errorCode = errorCode || CustomStatusCode.undefinedError.code;
  }

  return res.status(resultPrint.status).json(resultPrint);
};

exports.customErrCode = (err, status, customCode) => {
  let newErr = new Error();
  if (err instanceof Error) {
    newErr = err;
  } else {
    newErr.message = err;
    newErr.status = status;
  }
  Object.assign(newErr, customCode);
  return newErr;
};

exports.normalizeError = (error) => {
  const err = result(error, 'error.errors.stackTrace');
  if (err) {
    err.message = result(error, 'error.errors.message');
    return err;
  }
  return error;
};

exports.response = (res, obj, status, extra) => {
  const resultPrint = {};
  resultPrint.status = status || 200;

  if (isObject(obj)) {
    resultPrint.data = obj;
  } else {
    resultPrint.message = obj;
  }
  if (isObject(extra)) {
    Object.assign(resultPrint, extra);
  }

  return res.status(resultPrint.status).json(resultPrint);
};

exports.loadFile = (dirname, basename) => {
  const load = {};

  fs.readdirSync(dirname)
    /* eslint-disable-next-line */
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const pathFile = path.join(dirname, file);
      const filename = camelCase(path.basename(file, '.js'));

      /* eslint-disable-next-line */
      load[filename] = require(pathFile);
    });
  return load;
};

module.exports = exports;
