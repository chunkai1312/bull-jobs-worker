import Queue from 'bull'
import config from '../config'
import logger from '../config/logger'
const fooQueue = Queue('foo', config.redis.port, config.redis.host)

fooQueue.process((job, done) => {
  logger.verbose('data:', job.data)
  logger.verbose('jobId:', job.jobId)

  done()
})

export default fooQueue
