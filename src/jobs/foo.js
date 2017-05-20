import Queue from 'bull'
import config from '../config'

export const JOB_NAME = 'foo'

const queue = Queue(JOB_NAME, config.redis.port, config.redis.host)

queue.process((job, done) => {
  console.log('data:', job.data)
  console.log('jobId:', job.jobId)

  done()
})

queue.on('ready', () => {
  console.log(`The job "${JOB_NAME}" is ready for processing!`)
})

export default queue
