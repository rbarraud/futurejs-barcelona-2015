var KP = require('bittorrent-dht-store-keypair')
var kp = KP()
console.log(kp.id)

var dht = new(require('bittorrent-dht'))({
  bootstrap: false,
  verify: KP.verify,
})
dht.listen(5001)
