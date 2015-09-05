var store = require('torrent-blob-store')({
  trackers: [ 'udp://localhost:9000' ]
})

process.stdin.pipe(store.createWriteStream(function (err, w) {
  console.log(w.key)
}))
