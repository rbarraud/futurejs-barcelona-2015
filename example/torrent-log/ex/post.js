var KP = require('bittorrent-dht-store-keypair')
var kp = KP()
console.log(kp.id)

var dht = new(require('bittorrent-dht'))({
  bootstrap: false,
  verify: KP.verify,
})
dht.listen(5001)

var prev = 'null'
updateHead(prev)

function updateHead (hash) {
  var hex = hash.toString('hex')
  dht.put(kp.store(hex), function (errors, hash) {
    errors.forEach(console.error)
  })
}

// ...
var through = require('through2')
var split = require('split2')
process.stdin.pipe(split()).pipe(through.obj(write))

function write (buf, enc, next) {
  var value = Buffer.concat([
    Buffer(prev.toString('hex') + '\n'),
    Buffer(buf)
  ])
  dht.put({ v: value }, function (errors, hash) {
    prev = hash
    console.log(hash.toString('hex'))
    updateHead(hash)
    next()
  })
}
