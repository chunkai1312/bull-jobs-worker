import Queue from 'bull'
import config from '../config'

export const JOB_NAME = 'Hello'

const queue = Queue(JOB_NAME, config.redis.port, config.redis.host)

queue.process((job) => {
  return Promise.resolve()
})

queue
  .on('ready', () => {
    // Redis is connected and the queue is ready to accept jobs.
    console.log(`The job "${JOB_NAME}" is ready for processing!`)
  })

  .on('error', (error) => {
    /* eslint handle-callback-err: 0 */
    // An error occured.
  })

  .on('active', (job, jobPromise) => {
    // A job has started. You can use `jobPromise.cancel()`` to abort it.
  })

  .on('stalled', (job) => {
    // A job has been marked as stalled. This is useful for debugging job
    // workers that crash or pause the event loop.
  })

  .on('progress', (job, progress) => {
    // A job's progress was updated!
  })

  .on('completed', (job, result) => {
    // A job successfully completed with a `result`.
  })

  .on('failed', (job, err) => {
    // A job failed with reason `err`!
  })

  .on('paused', () => {
    // The queue has been paused.
  })

  .on('resumed', (job) => {
    // The queue has been resumed.
  })

  .on('cleaned', (jobs, type) => {
    // Old jobs have been cleaned from the queue. `jobs` is an array of cleaned
    // jobs, and `type` is the type of jobs cleaned.
  })

export default queue
