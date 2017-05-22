import merge from 'lodash/merge'
import config from './config'
import development from './env/development'
import test from './env/test'
import production from './env/production'

export default {
  development: merge({}, config, development),
  test: merge({}, config, test),
  production: merge({}, config, production)
}[process.env.NODE_ENV || 'development']
