'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7cd217d97e173eed20095d1a77bd8b48",
".git/config": "4087cf698873cea3e2f32fa832359b70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "564fec15fec3663bbe77b324991ad489",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "746a1ce9a96bac06e4c595c9348503b0",
".git/logs/refs/heads/main": "5bcf1194636e0f7b53d460b3671b819e",
".git/logs/refs/remotes/origin/main": "90e3ac29f2c72bbf52d8414cc777ad75",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/6276c5a8dd9156ecb367a735a41482569c939e": "26552724f963997301ec9bd4175fecaa",
".git/objects/05/824b24776b7ec9ea1656013fad9f35ecc268b6": "3b49f9e161e47ab5cc37ec4b8e97a7e5",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/d3e5235fa59cb515fb08cd142c66de49460afa": "1cc8572a5fd6dd2d1da6e95ca83a81fd",
".git/objects/3a/138cfadcb00b80c0207e61bf9e76ca4bb38c30": "6754a18a9c39021aebafd7ae56b09635",
".git/objects/3a/1662146c9dc8ceb944481d6bb65ef8d99ac6e9": "5f6caf91b34a4d66931424aa264d5480",
".git/objects/43/a045eecbf3ab8d099e2dc2210f566d5ee193a1": "605baf4925b36e8cb2a2e9f314175b78",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c210fe6bd7d5ce8ba10f5ed4497d1ef0177d6e": "9bd9298810bb51417406aa6a517167f2",
".git/objects/47/639b5c36abbc8b2ea939bbc8b94068c1fdb8b0": "58da26e0d857d6f2953b32d739d4c46e",
".git/objects/4a/bb4362bd0e2a7e6059bf05606286d83ecc852c": "51c2f8c09f03b1736b1511c8319ca9dd",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/839b7d4ec2f10ddd1c8d232d6a5c0d34cd6abe": "5de105ebdaa46f54e1514db0e8b0651c",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5d/0012a4f01ba267f25859d444bc18eafade91d0": "0f27c79eee4f5b90591667847e690fe1",
".git/objects/65/87f9b79c49c89ba87972b51baa8a200f474dc1": "8ef78e6ae213302deecaf1351693ac89",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/2ecb9e8cc5e5d9a696d3dbeb117159c333e97a": "0a636b4f1df8ae8e87fa73bee48af335",
".git/objects/70/9326a3db54b4fdd2eea1d6aeffac229c24c5bb": "4993c746a4619b99c050e84bd746bf99",
".git/objects/7a/5d56953b4a858616ef7c9a0c0fd9ee4044f96a": "8c5c4084aa07ad4aa3f63d8628adb6c3",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/cda6011ffbd6396579df7f542ee739dc9fae4e": "1b5dccd493e41484a68db6f532c798e9",
".git/objects/7f/3a9e8c8316da129bcde4a14141d59732cc7906": "e9cf3dfe429dd1bae2369e9d12a85fed",
".git/objects/82/cd1be5d5c7d2374a56fb93684cf86b7e36ed82": "485bf93571e4b7a6c9edbc7a5e602ee0",
".git/objects/87/40c57fdf49e70b4b86d13d720666561f668424": "35001af898780acc2c558a88f3e4cdc5",
".git/objects/8c/59d007a069f5c2d8e6107e26c915b890662b67": "94f4752c8424487fdbeb3a20dcc06b44",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/eb66e3595c511b924b9c6cc50dc1de57374fbd": "2f379da690e76ed785a345406481d167",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/cebbde4470d3fd9c7622dc9cb4bfca594a7937": "42d9fd8de78fae81d909ade76d1a8754",
".git/objects/df/db4e56e908ae92c310bb784bb39aa677ed2765": "69f6af6160ec9aefc1f0cd85bb7cd5fe",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/a049c4c477231a94b8b005975685386de119d4": "8664e0f3143b8d471ceb5321af988379",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/5d53601201e6b48d95e57b7eefb82480362df9": "176d254cb51f1fdec084f79d27a78e89",
".git/objects/f2/ce26c92bdd3eef6eb19b4b0a11b3f4d9b1ce11": "8269696496da8a816eef378b1e648828",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/f52ecc5f1b64b78a54fb5ae0d39a5cd2140671": "e7dbfd1456cd235a069af7f4b6fd3810",
".git/objects/f9/856e66e96120b08818790211c97bf708f79644": "57b426e734a894a87f0e933cb3c63cd1",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "ba1f481106ca871ca7b25fc1a2640378",
".git/refs/remotes/origin/main": "ba1f481106ca871ca7b25fc1a2640378",
"assets/AssetManifest.bin": "1cec29c6a0a66289aadbe7c0caf3f38e",
"assets/AssetManifest.bin.json": "7316e8b8262f0d3839a51a7f915f0c9a",
"assets/AssetManifest.json": "cbc53aae578e2a642eeb1fb80e583f99",
"assets/assets/images/logo.png": "126af766a872010d4f01734c5562f37e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "22c7ffd10668512af1e3630d331da09b",
"assets/NOTICES": "0d835ed2adc6499c02b49679aa1c71ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "39494477a3861e524a2b7efeaccf067f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "69cbc4934565420a62880a06f924bda0",
"icons/Icon-192.png": "0fc81f054a2ff825f055cbadfffa3cd3",
"icons/Icon-512.png": "9984b5a2de24dac35d26f6ba219c15b5",
"icons/Icon-maskable-192.png": "0fc81f054a2ff825f055cbadfffa3cd3",
"icons/Icon-maskable-512.png": "9984b5a2de24dac35d26f6ba219c15b5",
"index.html": "750384ad607f9e526281b31baee067a0",
"/": "750384ad607f9e526281b31baee067a0",
"main.dart.js": "8adcc98787395e159782ea42a30f7b5e",
"manifest.json": "0c5eb6d4a89286c99505e1b90d5fb0d9",
"version.json": "c4eb1b459286b70c012be404d0bc1798"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
