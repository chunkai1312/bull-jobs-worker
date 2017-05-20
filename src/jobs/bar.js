import Queue from 'bull'
import config from '../config'

const barQueue = Queue('bar', config.redis.port, config.redis.host)

barQueue.process((job, done) => {
  console.log('data:', job.data)
  console.log('jobId:', job.jobId)

  done()
})

export default barQueue
