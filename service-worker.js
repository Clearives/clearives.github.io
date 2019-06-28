/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dfa4b7f97b086f567320b9f88094575c"
  },
  {
    "url": "about/index.html",
    "revision": "a8b1c50bb56be6304cc7d7feafda742a"
  },
  {
    "url": "assets/css/0.styles.4c85352f.css",
    "revision": "c941144c1062bf5140ed2411e19397f7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2f584c3f.js",
    "revision": "8dd112cb705157a2a2ce5c18d0848353"
  },
  {
    "url": "assets/js/11.669b2883.js",
    "revision": "16a35ddd1cb7678bce0b54dddac8e119"
  },
  {
    "url": "assets/js/12.23d7d0d8.js",
    "revision": "d352dfd0f06fff91c2bf3d90a3471dc7"
  },
  {
    "url": "assets/js/13.990b1bd4.js",
    "revision": "acd839792f8d3245dd5de1f73a8d1858"
  },
  {
    "url": "assets/js/14.892e395e.js",
    "revision": "41602866cd0ac373f0da6e2f5df66dc8"
  },
  {
    "url": "assets/js/15.8e18a2a7.js",
    "revision": "01e4e0e1f766b20eeedee9979b6eff76"
  },
  {
    "url": "assets/js/16.8750bb44.js",
    "revision": "ee5302209c1303879f20cf519eadc478"
  },
  {
    "url": "assets/js/17.bb161f32.js",
    "revision": "f041bd33e609ac448113454dcae6ed22"
  },
  {
    "url": "assets/js/18.b99a685a.js",
    "revision": "c5f366469aa16325bbd404fe63ace872"
  },
  {
    "url": "assets/js/19.599038d3.js",
    "revision": "3afeb7d131416ccf53fb54b4f700e7d1"
  },
  {
    "url": "assets/js/2.31813612.js",
    "revision": "ca1bd9c4b9f226f5724288cda8a08322"
  },
  {
    "url": "assets/js/20.49128418.js",
    "revision": "d0642682c7b2463cee19185b2b82f519"
  },
  {
    "url": "assets/js/21.75176e31.js",
    "revision": "290544cc5ba7e72c80042dce8f3c89bc"
  },
  {
    "url": "assets/js/22.97759ebb.js",
    "revision": "dbb83394e0322f35be7028a301a9a617"
  },
  {
    "url": "assets/js/23.b0e11d07.js",
    "revision": "ae5c4db0f6ef69fb412a2c4d0803795e"
  },
  {
    "url": "assets/js/3.11b877da.js",
    "revision": "67e5415131cdc819cde906647a19c7b1"
  },
  {
    "url": "assets/js/4.e4f7688e.js",
    "revision": "702b45e5ce5fe8ff42ca5bfee364039a"
  },
  {
    "url": "assets/js/5.d4928f24.js",
    "revision": "c53b4f25c64b6a231ef24bf91cd576f6"
  },
  {
    "url": "assets/js/6.2b56b88b.js",
    "revision": "12a3d70895495e29420cc9375f9cfa8c"
  },
  {
    "url": "assets/js/7.a7ebc618.js",
    "revision": "f7e48dce24a9005f05995e540089196c"
  },
  {
    "url": "assets/js/8.d85a4f23.js",
    "revision": "10b86a0a089e2caf93e5970c1c7a270c"
  },
  {
    "url": "assets/js/9.e7067b96.js",
    "revision": "fdb2c7d0a2353dfe1349889b2fce0419"
  },
  {
    "url": "assets/js/app.a2501213.js",
    "revision": "d528c3c5beb12e5b955a28045cd7dd92"
  },
  {
    "url": "daily/record/index.html",
    "revision": "e17e836b40b5a4e6651e620ce4023980"
  },
  {
    "url": "frontend/index.html",
    "revision": "02828c4c2a41eeefb8423b57805dbecc"
  },
  {
    "url": "index.html",
    "revision": "611a458f03390acbf0f6ceedd645a5bb"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "34830a2a7521b9237a006b6526b55761"
  },
  {
    "url": "node/notes/a/a.html",
    "revision": "ff8b8d921a76659c937ce67132c3d3ea"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "3ff8dc05957c965135286999cce771ac"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "a4c986a52a0b4da1606f367c1d539207"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "5b167ecea5fc1913624d67ab95eea998"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "dbdefe8bae8b40a9b66ea41b04d91497"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "68505421ccd1077bc2368f8e2f19144f"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "3f1c8c39e8f17deddff31bd55f3f7f39"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "f29d856c3f06b3dec81512b54a855497"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "bc963620800899891c30b97aee2848fd"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "9b8c9a6d4957b9ddcb94a8eacbab1ef3"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "d7cb9d511ca435491606b6c468bad049"
  },
  {
    "url": "timeline/index.html",
    "revision": "fcc6a06afa098f8f399469fac487f1c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
