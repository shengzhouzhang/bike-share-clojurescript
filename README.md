# bike-share-clojurescript

## API

https://data.melbourne.vic.gov.au/Transport-Movement/Melbourne-bike-share/tdvh-n9dv

## Isomorphic clojurescript with reagent

Based on http://blog.testdouble.com/posts/2016-01-21-isomorphic-clojurescript.html

## Requirements
- leiningen
- node

## Usage

### install node dependencies
`npm install`

### compile the server
`lein cljsbuild once server`

### compile the client
`lein cljsbuild once client`

### compile the less files to css
`lein less once`

### auto compile both server and client
`lein cljsbuild auto server client`

### run the server
`node resources/compiled/js/server-side/server.js`

### open a browser
`open http://localhost:3000/`
