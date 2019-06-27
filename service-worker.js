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
    "revision": "bcb5611e21c4fa245c320f150cf49360"
  },
  {
    "url": "about/index.html",
    "revision": "40d791c49154068e485bb7efeed36e62"
  },
  {
    "url": "assets/css/0.styles.ad0d5761.css",
    "revision": "6655e37bd4bcb9daa2dcbb20948ad0c8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.555442f8.js",
    "revision": "1151bf8cfeb0dc5bb3cf873fea2cded7"
  },
  {
    "url": "assets/js/11.bfe9b588.js",
    "revision": "269d9df3dae21e232ba022614f121b24"
  },
  {
    "url": "assets/js/12.4952ad4e.js",
    "revision": "dab897433da6f877dd366e2ecc33b79b"
  },
  {
    "url": "assets/js/13.adffb608.js",
    "revision": "3b6b847326b81d99524132ce2fff7b88"
  },
  {
    "url": "assets/js/14.dd951633.js",
    "revision": "adcc399580dd28b2bad9737c0428d7a6"
  },
  {
    "url": "assets/js/15.02fc9762.js",
    "revision": "9896d9e679b75b9c0e0d63fb4c4fcdc8"
  },
  {
    "url": "assets/js/16.3f001192.js",
    "revision": "94fe5b0186f61d398e4add5447ee484e"
  },
  {
    "url": "assets/js/17.e9827358.js",
    "revision": "5a66bf2ad9a49059c895303dc371a616"
  },
  {
    "url": "assets/js/18.2559be8e.js",
    "revision": "63686171c9c106275a6f887264e20438"
  },
  {
    "url": "assets/js/19.86b15083.js",
    "revision": "9ed5dd7ca13182a1b01fa4d12b1ba87d"
  },
  {
    "url": "assets/js/2.31813612.js",
    "revision": "ca1bd9c4b9f226f5724288cda8a08322"
  },
  {
    "url": "assets/js/20.236de6b8.js",
    "revision": "dbaf2ebf236a5f48174faa48a64e43c7"
  },
  {
    "url": "assets/js/21.34e6c4e2.js",
    "revision": "7e40c421d8598b1b3dc0e77fb01557de"
  },
  {
    "url": "assets/js/22.53af3b3d.js",
    "revision": "fea33c8b1320b4522c841a907f92794b"
  },
  {
    "url": "assets/js/3.11b877da.js",
    "revision": "67e5415131cdc819cde906647a19c7b1"
  },
  {
    "url": "assets/js/4.b28fd7e1.js",
    "revision": "697906883770da81c45904a2292e7cbf"
  },
  {
    "url": "assets/js/5.d4928f24.js",
    "revision": "c53b4f25c64b6a231ef24bf91cd576f6"
  },
  {
    "url": "assets/js/6.d7b6857b.js",
    "revision": "9a2549449984b0a2a1ec7485925f7964"
  },
  {
    "url": "assets/js/7.fc1a6921.js",
    "revision": "71ed3eda5ecd453a9803cbf8f85fc710"
  },
  {
    "url": "assets/js/8.9b945a6e.js",
    "revision": "63faa0c3f87ca18d61e9bd3e71bf3fdf"
  },
  {
    "url": "assets/js/9.fb40ae46.js",
    "revision": "3071b1d4ce23e8ca98eabd15114056fd"
  },
  {
    "url": "assets/js/app.f8b927ef.js",
    "revision": "731093dbf767c82fe80b855eb786bb88"
  },
  {
    "url": "daily/record/index.html",
    "revision": "76b0872f0934d6dd5e73ba3a239e8f24"
  },
  {
    "url": "frontend/index.html",
    "revision": "ea188144fdc87c528888611d0ffc48f7"
  },
  {
    "url": "index.html",
    "revision": "4ec906c08e15824d7c0e4ff0e9489c9f"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "9aa34a56dbb62c1cbad6b104487e61f1"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "1c4420e3cb6a35c696b10aeb58fc7498"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "a7209eaa362bc4a495f7a21343cdf5e9"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "9a2138b666c04d799241970ec4e3ca78"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "4bc634c0dd0d1b71564bf9723d88aec6"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "8dd4530a9d973a820c69dfe7b10d38a2"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "fb9693a99d7f674ffdb1dffe29dafb84"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "1e8298d7dff36aa0cb01957a3469157f"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "c506b514034b695f954d035de4f665e3"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "78af5c36b70a82b071e3beeabb08409e"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "7b7eddc83523c41dad7bf73a87b59b6e"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b0ad70e5334ebc38e85eb12534cf6a0"
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
