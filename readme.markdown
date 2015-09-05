# a permanent web

James Halliday

http://substack.net

---
# impermanence

web services are constantly disappearing:

* acquired
* pivot into some other business
* shut down
* turn evil

---
# offline

* cache invalidation
* network is always unreliable

---
# power asymmetry

* bundled client and service
* identity as a commodity

---
# single point of failure

If somebody owns a service,
they can take it away without warning.

---
# the question

How can we build services that nobody can own?

---
# webapps of the future!

We'll need distributed versions of these that can't be taken away:

* identity
* trust
* feeds
* data

---
# identity

You are the hash of your public key.

---
# p2p identity

Your friends decide what to call you
instead of a centralized global registry.

---
# identity

demo!

---
# data structures

* merkle DAGs for metadata
* content-addressable blob storage

---
# replication

merkle DAGs:

* trivial replication (concat!)
* robust against replay attacks, out of order delivery
* all of history is kept around

---
# merkle DAG example:

    +++ hash: bd470e47e999a6cd94f7fc67bd0359eb91ddec59
    prev: null
    hello

    +++ hash: a6da22f22705aab17fd4063fef40305d04a8d14d
    prev: bd470e47e999a6cd94f7fc67bd0359eb91ddec59
    second msg!

    +++ hash: 589e87f23b2beea2338c830478d968b5f459f7c8
    prev: a6da22f22705aab17fd4063fef40305d04a8d14d
    third msg...

---
# hyperlog

demo!

---
# hyperlog in the browser

demo!

---
# trust

How can we securely deliver updates?

---
# not trust-worthy / future-friendly:

* domain names (expiry, $$$)
* SSL certs (expiry, $$$)

---
# trust-log

* using a signed hyperlog
* trust(id)
* revoke(id)
* isTrusted()
* trusted()

---
# appfeed

demo!

---
# p2p data

get data payloads from our peers,
remove single point of failure

---
# content-addressable-blob-store

demo!

---
# torrent-blob-store

demo!

---
# p2p logs

We can also use p2p techniques for append-only logs!

---
# bittorrent bep44

https://github.com/feross/bittorrent-dht/pull/61

mutable 1k payloads on the DHT!

---
# torrent-log

save a pointer to the HEAD (a hash) of a merkle DAG

---
# torrent-log

demo

---
# other research topics

* ipfs
* distributed naming systems
* append-only torrent files
* gittorrent

---
# homework

* distributed twitter/facebook/flickr/soundcloud
* self-archiving p2p youtube + webrtc livestreaming
* p2p git issue tracker

geocities RIP never again

---
EOF
