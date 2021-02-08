const path = require('path');

module.exports = {
  entry: './components/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};