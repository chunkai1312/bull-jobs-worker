'use strict'

const toureiro = require('toureiro')
const config = require('./config')
const logger = require('./config/logger')

const app = toureiro({ redis: config.redis })

app.listen(config.port, function () {
  logger.verbose(`Toureiro is now listening at port ${config.port}...`)
})
