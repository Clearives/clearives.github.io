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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "86366bd11a62688b0d18f5501eb718a3"
  },
  {
    "url": "about/index.html",
    "revision": "4e7ce361135003a428722cab354b9061"
  },
  {
    "url": "assets/css/0.styles.ccf9e52d.css",
    "revision": "f98f6cd57d56b9d41461b5f4c25f5ef0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0eb2d8a2.js",
    "revision": "65bbc61bcf388bf994a1619323ced55c"
  },
  {
    "url": "assets/js/10.63e25234.js",
    "revision": "47d23993b5e60bc2afcc66969678b9f3"
  },
  {
    "url": "assets/js/11.f9337695.js",
    "revision": "ba947572a44470e362cebb20c803c51a"
  },
  {
    "url": "assets/js/12.f76ea8f7.js",
    "revision": "5df98ac7495f5ef073c44e4f9eb24fb6"
  },
  {
    "url": "assets/js/13.70147e98.js",
    "revision": "d8c22d856ffb8d2ed0290a4c87bf30ea"
  },
  {
    "url": "assets/js/14.985749a8.js",
    "revision": "8e1f3f996607626907c9f0243fa67f5a"
  },
  {
    "url": "assets/js/15.3a162e02.js",
    "revision": "7f4ec491537ccd147833f229a7e5bad0"
  },
  {
    "url": "assets/js/16.50c541be.js",
    "revision": "ac3a65684e8fa7241ddb76eee23f5c1f"
  },
  {
    "url": "assets/js/17.fff01f94.js",
    "revision": "bf8ce84da4c2ccf7bd54f2a2a3eac163"
  },
  {
    "url": "assets/js/18.aa896f4f.js",
    "revision": "e655cb28f6fae54bc7c8bb6ac1d5cee7"
  },
  {
    "url": "assets/js/19.d8fa848e.js",
    "revision": "a750fe0adb71b68bdcf9e620a3e48311"
  },
  {
    "url": "assets/js/2.2ec38cce.js",
    "revision": "1b31c063c7adca44117a6a49b05563ac"
  },
  {
    "url": "assets/js/20.2a87130e.js",
    "revision": "1631f99386cd65e1c0e7d4428ac7c7ba"
  },
  {
    "url": "assets/js/21.cc57d586.js",
    "revision": "4a869c199dc8e6f8d9df6c8e349e3ea3"
  },
  {
    "url": "assets/js/22.a015931b.js",
    "revision": "f5b9fd5c68c52690d6e2b242963f73bf"
  },
  {
    "url": "assets/js/23.aebdeb23.js",
    "revision": "6e7dd6079394551850109c1d688e0863"
  },
  {
    "url": "assets/js/24.d6fac3e0.js",
    "revision": "f8dc169715ded1b70703c9327a672cc6"
  },
  {
    "url": "assets/js/25.1d84d454.js",
    "revision": "ecbfe305f802485f4b95befec75a4579"
  },
  {
    "url": "assets/js/26.2c0a959d.js",
    "revision": "b8e8bd89bac10364c56d5bac6dbe7f48"
  },
  {
    "url": "assets/js/27.c4abfccf.js",
    "revision": "d7e0f3db769665efb01c61ed0102cac1"
  },
  {
    "url": "assets/js/28.391b531f.js",
    "revision": "0017e49cc6d24790935fa618decfb089"
  },
  {
    "url": "assets/js/29.f833303b.js",
    "revision": "94e8e7e2d93beea9940a2a73886b29d2"
  },
  {
    "url": "assets/js/3.16d5a572.js",
    "revision": "f05c8237ad4d14ad7091d635d5f12ca6"
  },
  {
    "url": "assets/js/30.474b40f7.js",
    "revision": "8edc8da73871edcb9cec385d4e2fffdf"
  },
  {
    "url": "assets/js/31.c070441b.js",
    "revision": "ee903167f1278097f1ae8a31d01b8f2c"
  },
  {
    "url": "assets/js/32.5d456f3a.js",
    "revision": "57464a889bf4c58cceb9b474ab29e2df"
  },
  {
    "url": "assets/js/33.3d59c3a5.js",
    "revision": "8e43b5db3c19a39b3ab301d69b9541f8"
  },
  {
    "url": "assets/js/34.4ef8aa2b.js",
    "revision": "206d438c12cc1aa100c212a0c9fd6976"
  },
  {
    "url": "assets/js/35.69640a18.js",
    "revision": "7ab9c20d3cab592a0b67cdde8f49296d"
  },
  {
    "url": "assets/js/36.0e4c7e69.js",
    "revision": "737fa27a6e8555e829667630b1de1f67"
  },
  {
    "url": "assets/js/37.0eaf8656.js",
    "revision": "32f6828d01ef629ab1530d9c9e1e0265"
  },
  {
    "url": "assets/js/38.b08624a0.js",
    "revision": "43806b1d636c0873e6714c087caa4578"
  },
  {
    "url": "assets/js/39.d1c096b0.js",
    "revision": "76b2cdecb235d5a560648972e199a2e9"
  },
  {
    "url": "assets/js/4.91114f18.js",
    "revision": "3a209b63c48b0e23b528ff85b301c379"
  },
  {
    "url": "assets/js/40.c2ad95a9.js",
    "revision": "6f9a91bbc55af130adf23d0f1b77b539"
  },
  {
    "url": "assets/js/41.7bd65731.js",
    "revision": "5da05bf38156b3a15a2ee226b2fb8203"
  },
  {
    "url": "assets/js/42.e58bbe9e.js",
    "revision": "13494c877676e1013d285c2127c036cf"
  },
  {
    "url": "assets/js/43.87b68bc5.js",
    "revision": "be47a7ba931b06ca0f39d343f930f21d"
  },
  {
    "url": "assets/js/44.1cc195bc.js",
    "revision": "0ba2d5d3dc113e4271e120fc66c55332"
  },
  {
    "url": "assets/js/45.8e911753.js",
    "revision": "9e595cceccf94e20025c492a6b56d39b"
  },
  {
    "url": "assets/js/46.f3da31ab.js",
    "revision": "26f1ec21f50236af48b07f639ccacc49"
  },
  {
    "url": "assets/js/47.929523a9.js",
    "revision": "a4537e8c25ecc3f0b6db8c70b824b0f7"
  },
  {
    "url": "assets/js/48.2b6531d4.js",
    "revision": "9fb8901764332d8a6ebebec93dbaf787"
  },
  {
    "url": "assets/js/49.09ce8ff7.js",
    "revision": "3658700d8f9ff8c1981bf30f981e38a4"
  },
  {
    "url": "assets/js/5.06da80d1.js",
    "revision": "e424c340c61462addd08d6b736294122"
  },
  {
    "url": "assets/js/50.d6c3515b.js",
    "revision": "3df46521f97b5d49b68b4d5ee72c3504"
  },
  {
    "url": "assets/js/6.a76778da.js",
    "revision": "4ad28319c2539e791fdfd84d1dc47fec"
  },
  {
    "url": "assets/js/7.e9104bde.js",
    "revision": "168b04e9462855b26c7d4f4404464aa8"
  },
  {
    "url": "assets/js/app.a82c2ceb.js",
    "revision": "29c89861ae35b1f388861a6bdc650857"
  },
  {
    "url": "assets/js/vendors~docsearch.a86ae6f6.js",
    "revision": "089aa331d39540760665c5a7d69ba4ad"
  },
  {
    "url": "CHANGELOG.html",
    "revision": "640be4cce39735a8d78e5382c3d85659"
  },
  {
    "url": "daily/record/index.html",
    "revision": "d85cf07317e122ed0638d178e3f20265"
  },
  {
    "url": "frontend/index.html",
    "revision": "dd7a52b8181d9737a81e5abea07bc68c"
  },
  {
    "url": "index.html",
    "revision": "e722d1200a3a14507d084884e0db555e"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "b3e60a8794618a0be93d1e45b02efedc"
  },
  {
    "url": "package/index.html",
    "revision": "e3601acf8626ac1c196e292472457a7a"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "2b574e9268d5276dfbbbc28e7ef3d27c"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "d22065d55dd845e3ba65096ffa1b46fb"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "28c48201792e2515ce96c101bca4f3e4"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "e41e3a110eb6896e4a0f6c7633136872"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "541c7b79aab286b9178963cacba98ec5"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "42cd067d7f71ef3dc7bf8e1b8b20a376"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "0755d91f2bc305864ead8fda3285bac9"
  },
  {
    "url": "page/browser-window-open-intercept/index.html",
    "revision": "aaed31b1299219e4fad4c6ed3519d247"
  },
  {
    "url": "page/docker-note/index.html",
    "revision": "2914d07420202874580e9833e26a1fdf"
  },
  {
    "url": "page/es6-learn-summary/index.html",
    "revision": "88dda344e62e4799d474bbe92c22dfe0"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "130d31855579fc455c8306112c1e4692"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "edc2048ee8c2685dacc53cb2829cd574"
  },
  {
    "url": "page/loops_and_iteration/index.html",
    "revision": "4248b54031f7553733d2524d25b9c9b0"
  },
  {
    "url": "page/mobx-use-record/index.html",
    "revision": "6768655b27e5ee15226a6409e028538b"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "900826337aa1edab45b017a545f1a8f8"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "7f34f892a7486753be81789e2f1f2597"
  },
  {
    "url": "page/react-func-pass/index.html",
    "revision": "876ffb4628a29043cc2088cfc2ed7d2f"
  },
  {
    "url": "page/taro-practice-summary/index.html",
    "revision": "3de6655f105cdec2bb7a52e5e164d1fb"
  },
  {
    "url": "page/weapp-save-base64/index.html",
    "revision": "80a27bb0e2d598edde7ec697af63eeb1"
  },
  {
    "url": "timeline/index.html",
    "revision": "97dc6dfafc164859d471407c9fde0e4a"
  }
].concat(self.__precacheManifest || []);
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
