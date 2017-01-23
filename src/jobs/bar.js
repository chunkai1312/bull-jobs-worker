import Queue from 'bull'
import config from '../config'
import logger from '../config/logger'
const barQueue = Queue('bar', config.redis.port, config.redis.host)

barQueue.process((job, done) => {
  logger.verbose('data:', job.data)
  logger.verbose('jobId:', job.jobId)

  done()
})

export default barQueue
