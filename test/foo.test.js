import { expect } from 'chai'
import fooQueue from '../src/jobs/foo'

describe('foo worker:', () => {
  it('should complete job', (done) => {
    fooQueue.add({ message: 'foo' })

    fooQueue.on('completed', (job, result) => {
      expect(job.data).to.eql({ message: 'foo' })
      done()
    })
  })
})
