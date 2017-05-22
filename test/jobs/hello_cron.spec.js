import queue from '../../src/jobs/hello_cron'

describe('Hello Cron Job', () => {
  it('should process job', (done) => {
    const data = { message: 'Hello World!' }

    queue.on('completed', (job, result) => {
      expect(job.data).toEqual(data)
      done()
    })
  })
})
