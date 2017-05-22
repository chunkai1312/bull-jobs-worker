import queue from '../../src/jobs/hello'

describe('Hello Job', () => {
  it('should process job', (done) => {
    const data = { message: 'Hello World!' }

    queue.add(data)

    queue.on('completed', (job, result) => {
      expect(job.data).toEqual(data)
      done()
    })
  })
})
