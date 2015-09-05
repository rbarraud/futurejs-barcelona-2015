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
    console.log(hash.toString('hex'))
  })
}
