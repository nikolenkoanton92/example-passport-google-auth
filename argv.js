#!/usr/bin/env node

var argv = require('cmdenv')('google-auth')
  .option('--google-client-id <value>', 'Your google client id')
  .option('--google-client-secret <value>', 'Your google client secret')
  .parse(process.argv)

module.exports = {
  googleClientId: argv.googleClientId,
  googleClientSecret: argv.googleClientSecret
}
