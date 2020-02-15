const path = require('path');
const Helpers = require('../helpers/common');

const basename = path.basename(__filename);

module.exports = Helpers.loadFile(__dirname, basename);
