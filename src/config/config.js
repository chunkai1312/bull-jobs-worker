import path from 'path'

export default {
  env: process.env.NODE_ENV || 'development',  // environment variable, default = development
  port: process.env.PORT || 8080,              // server port
  root: path.normalize(`${__dirname}/..`),     // root path

  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST
  }
}
