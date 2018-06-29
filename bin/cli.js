#!/usr/bin/env node

var path = require('path')
var args = require('minimist')(process.argv)
var create = require('../src/commands/create')
var seed = require('../src/commands/seed')
var web = require('../src/commands/web')
var id = require('../src/commands/id')
var fork = require('../src/commands/fork')
var service = require('../src/commands/service')

if (args._.length === 2) {
  printUsage()
  return
}

switch (args._[2]) {
  case 'where':
    console.log(envpaths.config)
    break
  case 'create':
    create()
    break
  case 'service':
    service(args._[3])
    break
  case 'seed':
    seed()
    break
  case 'web':
    web()
    break
  case 'id':
    id()
    break
  case 'fork':
    fork()
    break
  default:
    printUsage()
    break
}

function printUsage () {
  require('fs')
    .createReadStream(path.join(__dirname, '/usage.txt'))
    .pipe(process.stdout)
}
