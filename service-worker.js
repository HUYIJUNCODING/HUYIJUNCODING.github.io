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
    "revision": "c129e0b100d13ce5c5f412d8b8bf5000"
  },
  {
    "url": "about/index.html",
    "revision": "e905d63f68d6c2620de844036fbfadbb"
  },
  {
    "url": "assets/css/0.styles.149a318a.css",
    "revision": "e4a5b58c68b9e351cd116b10f278dc45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8289ad59.js",
    "revision": "5c75e08e441b60005e3e9a163547e1b3"
  },
  {
    "url": "assets/js/11.49cc4223.js",
    "revision": "e3bd626f9a3db7c267d517e79414f31e"
  },
  {
    "url": "assets/js/12.b6072a42.js",
    "revision": "0df3cb0711993055824c767d52fb6bd2"
  },
  {
    "url": "assets/js/13.955ef775.js",
    "revision": "6e27139e481d967135127f54590897c8"
  },
  {
    "url": "assets/js/14.9a2f41d1.js",
    "revision": "ef715e9f4d30556b2eb5d7f6cdfea414"
  },
  {
    "url": "assets/js/15.54d212a3.js",
    "revision": "379e1fcfaab6bd7dc2f7c856ec0128bf"
  },
  {
    "url": "assets/js/16.5bedfff1.js",
    "revision": "25f66961a87ceee3c76bf7249a64849c"
  },
  {
    "url": "assets/js/17.d4ecc3c5.js",
    "revision": "493bf68c50c9b409c9510c9000c2c242"
  },
  {
    "url": "assets/js/18.5fab1924.js",
    "revision": "b516e6a7447adc161b1ca8f41f2fd583"
  },
  {
    "url": "assets/js/19.91cf35e1.js",
    "revision": "68cd8e461c69c22be43901d59e1d9f68"
  },
  {
    "url": "assets/js/2.32f31581.js",
    "revision": "eaf962d39cd17678e06b57e96db237b8"
  },
  {
    "url": "assets/js/20.8c918921.js",
    "revision": "21f35b802719f99b6fdfa71c02a0ecf5"
  },
  {
    "url": "assets/js/3.1930e7d8.js",
    "revision": "09f673cb5bf5d0e82a41389e7a993245"
  },
  {
    "url": "assets/js/4.5384e2e8.js",
    "revision": "6d8a309c9cea16837021fd0c80523043"
  },
  {
    "url": "assets/js/5.01f97a81.js",
    "revision": "b5d147437acf4fb8c6dce918d7387ef3"
  },
  {
    "url": "assets/js/6.a809fad3.js",
    "revision": "ab183a8da404702202d1ebf689a225a7"
  },
  {
    "url": "assets/js/7.56a8429c.js",
    "revision": "0aa0227341dfa1fbcee8c0e3a08d7456"
  },
  {
    "url": "assets/js/8.fd3437fd.js",
    "revision": "1380fe9e6ff798b2e13b1a0427f16296"
  },
  {
    "url": "assets/js/9.7380b7a3.js",
    "revision": "f703e8b7a8058da1c4e4cc9b81dc6986"
  },
  {
    "url": "assets/js/app.ea401947.js",
    "revision": "79a6bfcfbb875ad7bcb3abd61e264b69"
  },
  {
    "url": "blog/css/usualUseCss.html",
    "revision": "a3b027387dcb7f48ba5fdeefdbc25b07"
  },
  {
    "url": "blog/framework/envirPackageProjectVue.html",
    "revision": "d587fa1732cb4a9076e49c53c892e138"
  },
  {
    "url": "blog/framework/globalComponentsInVue.html",
    "revision": "914067d9b708aa016c9b364bce3738f4"
  },
  {
    "url": "blog/framework/vuepressBlog.html",
    "revision": "695a06554398923d016cfa61205d9747"
  },
  {
    "url": "blog/frontBasic/ES6Proxy.html",
    "revision": "62d780062efa849e925b8e689d1d83d4"
  },
  {
    "url": "blog/frontBasic/JsDataType.html",
    "revision": "f8832fa6ecacde61e3333aaba439255b"
  },
  {
    "url": "blog/index.html",
    "revision": "d21da8ac11ccce156291970c9d5df7ea"
  },
  {
    "url": "blog/miniProgram/aboutMiniProgramThink.html",
    "revision": "2132aa141349822b01fcb897cd1e939f"
  },
  {
    "url": "blog/miniProgram/mpvueRecoder.html",
    "revision": "b1b0503232dbaff09541806d39dbc625"
  },
  {
    "url": "blog/miniProgram/taroCalendar.html",
    "revision": "07e42bc9b5340099ef10704a3b0f1f29"
  },
  {
    "url": "blogs/construct.png",
    "revision": "21f047b3ed89f904a33ff14c0da1d9b9"
  },
  {
    "url": "blogs/createStore.png",
    "revision": "8fda3a41a38f4914465fe6ab03cfbdef"
  },
  {
    "url": "blogs/gitHubName.png",
    "revision": "dd0bf63da61b17bd921ba95193a0e488"
  },
  {
    "url": "blogs/mulu.png",
    "revision": "4d297d19a55237cb83df72ea852d7286"
  },
  {
    "url": "blogs/yinru.png",
    "revision": "6a2bb424daa9e0d6e0d0b96ee0db24ad"
  },
  {
    "url": "imgs/1.jpg",
    "revision": "00172389a8102a418db6c5fbbf971207"
  },
  {
    "url": "imgs/2.jpg",
    "revision": "e7a9ca6cb2c46fe4dd9f740267fe3d5e"
  },
  {
    "url": "imgs/3.jpg",
    "revision": "426a436d40d2dd729eeb9315b402c76f"
  },
  {
    "url": "imgs/4.jpeg",
    "revision": "233d09db1fed919e304e68e63d3a3a49"
  },
  {
    "url": "imgs/avator.png",
    "revision": "3645592fe7677a645732931974bd2c79"
  },
  {
    "url": "imgs/bg.gif",
    "revision": "d5afbc14315521153bf9850e5d68e213"
  },
  {
    "url": "imgs/book1.jpg",
    "revision": "4c8dfa2abc2b1b59ed69620ba5e28542"
  },
  {
    "url": "imgs/book2.jpg",
    "revision": "a5879d965b6c9b5714ef42a2b87c8b01"
  },
  {
    "url": "imgs/book3.jpg",
    "revision": "b7a0b5ad974a9c8f5be703d50451abe2"
  },
  {
    "url": "imgs/book4.jpg",
    "revision": "f664d872583f8cff6a8b807accfea3b6"
  },
  {
    "url": "imgs/book5.jpg",
    "revision": "d5f6a4d9912ac923231c572ee772e237"
  },
  {
    "url": "imgs/book6.jpg",
    "revision": "d8fd41656576d367e782cd73cfa7f79d"
  },
  {
    "url": "imgs/book7.jpg",
    "revision": "c5ae84894cf3f8aed8e49ed3ffe53ff5"
  },
  {
    "url": "imgs/book8.jpg",
    "revision": "9dfdf07724cdec714cb858c2e146257b"
  },
  {
    "url": "imgs/m.jpeg",
    "revision": "e33954f40a52176c5c0be947f857b77b"
  },
  {
    "url": "imgs/weixin.jpeg",
    "revision": "053e5475bd6fa801855612782b6d8036"
  },
  {
    "url": "index.html",
    "revision": "91afb954bc34c18b71bc0c1b997f6b92"
  },
  {
    "url": "space/index.html",
    "revision": "407243351cf8ba5ee2cbe573d091e3a9"
  },
  {
    "url": "space/poetryAndDistance/one.html",
    "revision": "ed5f96d8dea90288708a445956b5930a"
  },
  {
    "url": "space/talk/one.html",
    "revision": "0b627e47dd7af4c7b4cc991681529419"
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
