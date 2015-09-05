// ...
var through = require('through2')
var split = require('split2')
process.stdin.pipe(split()).pipe(through.obj(write))

function write (buf, enc, next) {
  // ...
}
