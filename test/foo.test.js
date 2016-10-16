'use strict'

const expect = require('chai').expect
const fooQueue = require('../jobs/foo')

describe('foo worker:', () => {
  it('should complete job', (done) => {
    fooQueue.add({ message: 'foo' })

    fooQueue.on('completed', function (job, result) {
      expect(job.data).to.eql({ message: 'foo' })
      done()
    })
  })
})
