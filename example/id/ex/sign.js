var keys = require('./keys.json')
var sodium = require('sodium')

var sig = sodium.crypto_sign(
  Buffer('hello'),
  Buffer(keys.secretKey, 'hex')
)
console.log(sig.toString('hex'))
