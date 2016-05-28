# bike-share-clojurescript

## API

https://data.melbourne.vic.gov.au/Transport-Movement/Melbourne-bike-share/tdvh-n9dv

## Isomorphic clojurescript with reagent

Based on http://blog.testdouble.com/posts/2016-01-21-isomorphic-clojurescript.html

## Requirements
- leiningen
- node

## Install node dependencies
`npm install`

## To compile everything
`lein compile`

This will compile server, client.

Currently, less should be manually compiled with
`lein less once`

## To compile individual parts
- compile the server
`lein cljsbuild once server`

- compile the client
`lein cljsbuild once client`

- compile the less files to css
`lein less [once|auto]`

- auto compile both server and client
`lein cljsbuild auto server client`

## To run the server
`node resources/compiled/js/server-side/server.js`

## Open a browser
`open http://localhost:3000/`
