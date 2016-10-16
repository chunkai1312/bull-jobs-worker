'use stric'

const Queue = require('bull')
const config = require('../config')
const logger = require('../config/logger')
const barQueue = Queue('bar', config.redis.port, config.redis.host)

barQueue.process((job, done) => {
  logger.verbose('data:', job.data)
  logger.verbose('jobId:', job.jobId)

  done()
})

module.exports = barQueue
