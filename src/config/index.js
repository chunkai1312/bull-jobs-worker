import merge from 'lodash/merge'
import config from './config'
import envConfig from './env'

export default merge({}, config, envConfig[process.env.NODE_ENV || 'development'])
