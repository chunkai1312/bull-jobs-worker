'use strict'

const logger = require('./config/logger')

// require('./config/mongoose')()

process.argv.forEach((worker, index) => {
  if (index < 2) return

  try {
    const queue = require(`./jobs/${worker}`)
    queue.on('ready', function () {
      logger.verbose(`The worker '${worker}' ready for job`)
    })
  } catch (err) {
    (err.message === `Cannot find module './jobs/${worker}'`)
      ? logger.verbose(`Cannot find worker '${worker}'`)
      : logger.error(err)
  }
})
