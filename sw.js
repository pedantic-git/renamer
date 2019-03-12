importScripts('/renamer/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/renamer/_nuxt/14267fb6a0f30a9f6bb6.js",
    "revision": "fc65ccc53b068c827322552309161a96"
  },
  {
    "url": "/renamer/_nuxt/3e37112485b6541f662a.js",
    "revision": "e32fe2d2ea44d5b856d3fd6b607239cf"
  },
  {
    "url": "/renamer/_nuxt/7c75a31502bc4b07c4a0.js",
    "revision": "8496e4e2c68b14fabc18d8a9c126509f"
  },
  {
    "url": "/renamer/_nuxt/baee2eecde6cb1d2c746.js",
    "revision": "44e0266d9be3ca548a72c3e283372d1f"
  },
  {
    "url": "/renamer/_nuxt/c15772999a74963e00ca.js",
    "revision": "d163972cf5beb96f23877e181f89ea86"
  }
], {
  "cacheId": "renamer",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/renamer/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/renamer/.*'), workbox.strategies.networkFirst({}), 'GET')
