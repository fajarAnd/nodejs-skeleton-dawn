const result = require('lodash/result');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const basicAuthModule = require('basic-auth');
const config = require('../../config');

const swaggerConf = config.get('swagger');

function basicAuth() {
  return (req, res, next) => {
    const user = basicAuthModule(req);
    if (!user || user.name !== config.get('basic-auth-credential').name || user.pass !== config.get('basic-auth-credential').pass) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      res.sendStatus(401);
    } else {
      next();
    }
  };
}

module.exports = (router) => {
  const docTitle = result(swaggerConf, 'title', 'API DOC');
  const docVersion = result(swaggerConf, 'version', '2.0');

  const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
      info: {
        title: docTitle,
        version: docVersion,
      },
    },
    apis: ['./router/*.js'],
  });

  const showExplorer = false;
  const options = {};
  const customCss = '';
  const customFavicon = '';
  const swaggerUrl = '';

  router.use(
    '/',
    basicAuth(),
    swaggerUi.serve,
    swaggerUi.setup(
      swaggerSpec,
      showExplorer,
      options,
      customCss,
      customFavicon,
      swaggerUrl,
      docTitle,
      (req, res, next) => {
        next();
      },
    ),
  );
};
