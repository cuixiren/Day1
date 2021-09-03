const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(),
    filename: 'bundle.js'
  },
}
