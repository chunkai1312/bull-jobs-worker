# bull-jobs-worker

[![JavaScript Style Guide][standardjs-image]][standardjs-url]

> A boilerpalte for building Bull job-queue worker based on Redis

## Features

- ES6/ES2015 support using [Babel](https://babeljs.io)
- Use [Bull Job Manager](https://github.com/OptimalBits/bull) for persistent job and message queue based on [Redis](http://redis.io)
- Use [Toureiro](https://github.com/Epharmix/Toureiro) to provide web interface for administration of the queues
- Use [nodemon](https://github.com/remy/nodemon) for watching and restarting in development environment
- Use [Jest](https://facebook.github.io/jest) as test framework

## Structure

```
.
├── bin
│   └── worker.js        # entry of worker
├── src
│   ├── config           # app configurations
│   │   ├── env          # environment variable definitions
│   │   ├── config.js    # configuration variables
│   │   └── index.js     # entry of configuration
│   │── jobs             # job queue and process implementations
│   └── app.js           # application entry
├── test                 # testing scripts
└── package.json
```

## Usage

### Setup

```sh
$ npm install
```

### Run for development

Create a job file in folder `src/jobs`.

```sh
$ npm run dev -- -j [JOB_FILE_NAME]
```

### Run for production

Run a job.

```
$ npm start -- -- -j [JOB]
```

Run multiple jobs.

```
$ npm start -- -- -j [JOB1,JOB2,...]
```

Run Toureiro for monitoring jobs.

```
$ npm start -- -- -u -p [prot]
```

### Testing

```
$ npm test
```

## License

MIT © [Chun-Kai Wang](https://github.com/chunkai1312)

[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/
