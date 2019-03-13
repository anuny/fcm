const Fcm = require('./fcm')
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
const cmd = args._.shift()
const lib = __dirname
const cwd = process.cwd();

const fcm = new Fcm(lib, cwd)
fcm.call(cmd)
module.exports = fcm