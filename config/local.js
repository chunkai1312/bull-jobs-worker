'use strict'

const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',  // environment variable, default = development
  root: path.normalize(`${__dirname}/..`)      // root path
}
