const LogLevel = require('loglevel-colored-level-prefix')

const options = { prefix, level: 'error' }

const logger = LogLevel(options)

module.exports = logger