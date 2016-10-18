'use strict'

const Queue = require('bull')
const config = require('../config')
const logger = require('../config/logger')
const fooQueue = Queue('foo', config.redis.port, config.redis.host)

fooQueue.process((job, done) => {
  logger.verbose('data:', job.data)
  logger.verbose('jobId:', job.jobId)

  done()
})

module.exports = fooQueue
