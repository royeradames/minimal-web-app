// catch the app

// import workbox from a sdn
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js")

workbox.routing.registerRoute(
  //catch all images
  ({request}) => request.destination === 'image',
  //  decide on catch strategy
  new workbox.strategies.CacheFirst()
)
