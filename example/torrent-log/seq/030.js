// ...
var prev = 'null'
updateHead(prev)

function updateHead (hash) {
  var hex = hash.toString('hex')
  dht.put(kp.store(hex), function (errors, hash) {
    errors.forEach(console.error)
  })
}
