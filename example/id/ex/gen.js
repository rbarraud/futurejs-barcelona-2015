var sodium = require('sodium').api
var kp = sodium.crypto_sign_keypair()
console.log(JSON.stringify({
  publicKey: kp.publicKey.toString('hex'),
  secretKey: kp.secretKey.toString('hex')
}))
