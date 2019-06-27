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
    "revision": "b5cfd0af901b1e5a10c3bf98e3fe9c7d"
  },
  {
    "url": "about/index.html",
    "revision": "f55b143de798e3b46328287f54d062cf"
  },
  {
    "url": "assets/css/0.styles.d97b5fd6.css",
    "revision": "41b5347f043559b24ec78e1e19e44bb0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7eedfcbc.js",
    "revision": "3d7051d06259e85f61720546a28eb640"
  },
  {
    "url": "assets/js/11.b8fe9411.js",
    "revision": "a70782165adafde9106434f0804074f5"
  },
  {
    "url": "assets/js/12.77efe817.js",
    "revision": "020acfca43d822c074fe453c73d44301"
  },
  {
    "url": "assets/js/13.507570eb.js",
    "revision": "5ef427adf65b0ffeaa7e3e42d65b2e4c"
  },
  {
    "url": "assets/js/14.51679f07.js",
    "revision": "3e725fb8c3b365b46f68b32a7d368a53"
  },
  {
    "url": "assets/js/15.5232cc8b.js",
    "revision": "b30479a25a7ee8db8974fab7d62e30da"
  },
  {
    "url": "assets/js/16.0b3346b4.js",
    "revision": "8ac01dd58f86d6eae57d8951ec02af1a"
  },
  {
    "url": "assets/js/17.287775b1.js",
    "revision": "54f5bbcb66ef50e1197be591972a12b7"
  },
  {
    "url": "assets/js/18.ba8947f7.js",
    "revision": "4e189aa42f9013fb26a2c92ab5c59bac"
  },
  {
    "url": "assets/js/19.5d73d66a.js",
    "revision": "c287b322b2e714e57c90115f4fab2c33"
  },
  {
    "url": "assets/js/2.31813612.js",
    "revision": "ca1bd9c4b9f226f5724288cda8a08322"
  },
  {
    "url": "assets/js/20.8cf1b464.js",
    "revision": "27cfb4a4fc99d69996e904e8394dab78"
  },
  {
    "url": "assets/js/21.1a3ac2bd.js",
    "revision": "c8d213160d6d420c54f3a57c5de78f7c"
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
    "url": "assets/js/6.49a9bc05.js",
    "revision": "aaf88730cdf905c11455d96ea95087fd"
  },
  {
    "url": "assets/js/7.a1ccb5df.js",
    "revision": "ff5e3ed506392ff2504c05303285b93b"
  },
  {
    "url": "assets/js/8.f8d078f3.js",
    "revision": "22081dd097ae2a43a1cb89b80f664b9f"
  },
  {
    "url": "assets/js/9.46991192.js",
    "revision": "669e6d69a03d56468b26f3fdfd432b1b"
  },
  {
    "url": "assets/js/app.5b00d84b.js",
    "revision": "2cd59af4e55abd23995ecd2997a2fcdb"
  },
  {
    "url": "daily/2019-06-25/index.html",
    "revision": "cdcd6970f6eca145253749965bec0bb6"
  },
  {
    "url": "daily/record/index.html",
    "revision": "f02d61183b118e407c43cfb36202ff04"
  },
  {
    "url": "frontend/index.html",
    "revision": "514598513bbe340cd10d70e84feebea5"
  },
  {
    "url": "index.html",
    "revision": "c7e082040e0f64bbab895f7d0ce614c0"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "f9942f988238c08d1124aa2621855909"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "31b91759ca550f1d36a5a7ee4f6c5235"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "c596397430c598a1250cb116bf934fd4"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "4890c137b5964763cd3e43919ea8589c"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "345fd285fc2a2eb3b0e9d2e6dececef7"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "9f0c479ba1aebf66b512b87670fa7086"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "75e4bba3cbf2007f369466914fb34a98"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "f79a5f34903795a77c1ed3d44d820445"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "104a064249a6bc2faa7cc796cb6253bd"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "6dbf20cf20a5b960f5ce430f24277cd8"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "33a6faf2e0fdfe54ded4231f17693319"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7f0ac4fa47e181d43c5b3fffeb83f8b"
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
