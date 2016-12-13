# worker-seed [![JavaScript Style Guide][standardjs-image]][standardjs-url]

> A seed project for building job-queue worker based on Redis

## Features

- Use [Bull Job Manager](https://github.com/OptimalBits/bull) for persistent job and message queue based on [Redis](http://redis.io)
- Use [Toureiro](https://github.com/Epharmix/Toureiro) to provide web interface for administration of the queues
- Use [winston](https://github.com/winstonjs/winston) for logging errors and events
- Use [nodemon](https://github.com/remy/nodemon) for watching and restarting
- Use [Mocha](https://github.com/mochajs/mocha) as test framework

## Structure

```sh
.
├── config           # app configurations
│   ├── env          # environment variable definitions
│   ├── index.js     # configuration variable loader
│   ├── local.js     # local variable definitions
│   ├── logger.js    # winston logger transport settings
│   └── mongoose.js  # mongoose connection handler
├── jobs             # job queue and process implementations
├── lib              # common libraries to be used across the app
├── logs             # logging files
├── test             # testing scripts
|── server.js        # entry for running Toureiro
├── worker.js        # entry for running workers
└── package.json
```

## Usage

### Setup

```sh
$ npm install
```

### Developing

```sh
$ npm run dev
```

### Running

Run a worker

```sh
$ npm start [worker]

# run worker 'foo'
$ npm start foo
```

Run multiple workers

```sh
$ npm start [worker1] [worker2] ...

# run worker 'foo' and worker 'bar'
$ npm start foo bar
```

Run Toureiro

```sh
$ npm run server
```

### Testing

```sh
$ npm test
```

## License

MIT © [Chun-Kai Wang](https://github.com/chunkai1312)

[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/
