#!/usr/bin/env node

require('dotenv').config()

var program = require('commander')
var toureiro = require('toureiro')
var env = process.env.NODE_ENV || 'development'

program
  .option('-j, --jobs [name,...]', 'Run jobs')
  .option('-u, --ui', 'Run toureiro')
  .option('-p, --ui-port [port]', 'Port for toureiro to listen to')
  .parse(process.argv)

if (program.jobs) runJobs()
if (program.ui) runToureiro()

function runJobs () {
  var jobs = program.jobs ? program.jobs.split(',') : []
  var worker = (env === 'development') ? require('babel-register') && require('../src/app') : require('../dist/app')

  worker(jobs, function (err) {
    if (err) {
      console.log(err)
      process.exit(1)
    } else {
      console.log('Worker is running!')
    }
  })
}

function runToureiro () {
  var server = toureiro({ redis: { port: process.env.REDIS_PORT, host: process.env.REDIS_HOST } })
  var port = program.uiPort ? parseInt(program.uiPort) : 3000

  server.listen(port, function () {
    console.log('Toureiro is now listening at port %d...', port)
  })
}
