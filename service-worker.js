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
    "revision": "14a72648a459c57ee68995b6fd9d2eb8"
  },
  {
    "url": "about/index.html",
    "revision": "61f48ced7fd52ef7bcc02ab880191516"
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
    "url": "assets/js/10.555442f8.js",
    "revision": "1151bf8cfeb0dc5bb3cf873fea2cded7"
  },
  {
    "url": "assets/js/11.669b2883.js",
    "revision": "16a35ddd1cb7678bce0b54dddac8e119"
  },
  {
    "url": "assets/js/12.065463e5.js",
    "revision": "8edaf8fff9c4f84c6c5d27b1c4d985c6"
  },
  {
    "url": "assets/js/13.990b1bd4.js",
    "revision": "acd839792f8d3245dd5de1f73a8d1858"
  },
  {
    "url": "assets/js/14.2ec737ef.js",
    "revision": "30e5826e32827461ed124aa99e22ed3d"
  },
  {
    "url": "assets/js/15.2647a3e8.js",
    "revision": "436ac9b6ae4090ec6d020aa497ab8de7"
  },
  {
    "url": "assets/js/16.e6b3257e.js",
    "revision": "9e81daadec7ab8d820f382b64b0e4019"
  },
  {
    "url": "assets/js/17.8f9a813a.js",
    "revision": "287dc92ef8a2c6e10cf494b756411a19"
  },
  {
    "url": "assets/js/18.720129ea.js",
    "revision": "bb466372050e1ef7dbd8f8dd158607ce"
  },
  {
    "url": "assets/js/19.a66629fe.js",
    "revision": "4e03ca276cfe8493772e4f737cd8a70c"
  },
  {
    "url": "assets/js/2.31813612.js",
    "revision": "ca1bd9c4b9f226f5724288cda8a08322"
  },
  {
    "url": "assets/js/20.cb385437.js",
    "revision": "52b79a379b7b0144133034e9e1da66d9"
  },
  {
    "url": "assets/js/21.72541c2e.js",
    "revision": "c0dc8a14864fc5fb98057a64ebec8ee3"
  },
  {
    "url": "assets/js/22.1d1e4eda.js",
    "revision": "fdd9c524c2a5d0a0bdcb0d0cef0b3a8f"
  },
  {
    "url": "assets/js/23.56077713.js",
    "revision": "fea88ab305c3c01121d56d063b597cde"
  },
  {
    "url": "assets/js/24.f66b5126.js",
    "revision": "6a8466ee287f23b6d831e2f948617c13"
  },
  {
    "url": "assets/js/3.11b877da.js",
    "revision": "67e5415131cdc819cde906647a19c7b1"
  },
  {
    "url": "assets/js/4.e6856479.js",
    "revision": "2c6e6c56a27229351933c42f6372db6d"
  },
  {
    "url": "assets/js/5.d4928f24.js",
    "revision": "c53b4f25c64b6a231ef24bf91cd576f6"
  },
  {
    "url": "assets/js/6.f984aad4.js",
    "revision": "a6bbc386650b5a4f68b30afb27288288"
  },
  {
    "url": "assets/js/7.38a467d1.js",
    "revision": "47e1da3313a5d76e59278fffc9b562cd"
  },
  {
    "url": "assets/js/8.f0b862f7.js",
    "revision": "8681b018e372d1a7dce13f68060bfb2e"
  },
  {
    "url": "assets/js/9.6555eb40.js",
    "revision": "7063a552b5b40ee639205b0160dfef63"
  },
  {
    "url": "assets/js/app.ca3c2e05.js",
    "revision": "114663ab91b4bfd7a96352109ac842dd"
  },
  {
    "url": "daily/record/index.html",
    "revision": "530dfd8970e575b740b7e63fd3284e28"
  },
  {
    "url": "frontend/index.html",
    "revision": "347a78398cdc5d367429a04443e0b466"
  },
  {
    "url": "index.html",
    "revision": "2aac7249a10a895b9536ff84095c4672"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "1fd8fa38cd829505a0e67be387475285"
  },
  {
    "url": "node/notes/a/a.html",
    "revision": "4038bdfaa9f7b5ea9de0fa3d08ecc30a"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "a0a7939712756040d8c23aabeda8e4c4"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "2fb841b72144bece017ebb0aaa57ce49"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "a901abf0dfa11747e35e121f31b6b523"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "943a8b537b11bd01bc9979b1627e7d28"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "e0b750299fbed8c43d9f166232e2a7e7"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "9a78be8bf280dad032399e352f213ed4"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "c249cf5f3f8a25384f8d62dcfb4c31d3"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "89c9e113b87b39237253052a26c57f9e"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "43bf4299ba4f8890d76d0e3c0cdc4aab"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "00b0614a96207ec0e322bed98dc6a3ca"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "a06aff5ca981fc2acc26c64493f23cb2"
  },
  {
    "url": "timeline/index.html",
    "revision": "41c3529f5e8d4b94c6ab862e7a80d9fc"
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
