var store = require('torrent-blob-store')({
  trackers: [ 'udp://localhost:9000' ]
})

var key = process.argv[2]
store.createReadStream(key).pipe(process.stdout)
