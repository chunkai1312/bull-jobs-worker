import Queue from 'bull'
import config from '../config'

const fooQueue = Queue('foo', config.redis.port, config.redis.host)

fooQueue.process((job, done) => {
  console.log('data:', job.data)
  console.log('jobId:', job.jobId)

  done()
})

export default fooQueue
