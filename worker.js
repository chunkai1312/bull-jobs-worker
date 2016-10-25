'use strict'

const path = require('path')
const config = require('./config')
const logger = require('./config/logger')
const jobsPath = path.join(config.root, 'jobs')

// require('./config/mongoose')()

process.argv.forEach((worker, index) => {
  if (index < 2) return
  const jobPath = path.join(jobsPath, worker)

  try {
    const queue = require(jobPath)
    queue.on('ready', function () {
      logger.verbose(`The worker '${worker}' ready for job`)
    })
  } catch (err) {
    (err.message === `Cannot find module '${jobPath}'`)
      ? logger.verbose(`Cannot find worker '${worker}'`)
      : logger.error(err)
  }
})
