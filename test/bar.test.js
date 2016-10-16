'use strict'

const expect = require('chai').expect
const barQueue = require('../jobs/bar')

describe('bar worker:', () => {
  it('should complete job', (done) => {
    barQueue.add({ message: 'bar' })

    barQueue.on('completed', function (job, result) {
      expect(job.data).to.eql({ message: 'bar' })
      done()
    })
  })
})
