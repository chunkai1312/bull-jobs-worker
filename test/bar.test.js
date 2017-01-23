import { expect } from 'chai'
import barQueue from '../src/jobs/bar'

describe('bar worker:', () => {
  it('should complete job', (done) => {
    barQueue.add({ message: 'bar' })

    barQueue.on('completed', (job, result) => {
      expect(job.data).to.eql({ message: 'bar' })
      done()
    })
  })
})
