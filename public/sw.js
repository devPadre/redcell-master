importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.2/workbox-sw.js");

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
  );

  workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
      // Use a custom cache name
      cacheName: 'css-cache',
    })
  );

  workbox.googleAnalytics.initialize();
  
  workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images
          maxEntries: 20,
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1ee28174188906d9c244b606dc6c5cd4"
  },
  {
    "url": "404/index.html",
    "revision": "7b3fd875722989f4e89c79d2a5d50474"
  },
  {
    "url": "activated/index.html",
    "revision": "a22369de6044668b618518d2a963da51"
  },
  {
    "url": "app/account/index.html",
    "revision": "a88e14191b2aa59b79139bb556bd09cb"
  },
  {
    "url": "app/change-email/index.html",
    "revision": "7504317ee819f6f9e522fe485fdeebda"
  },
  {
    "url": "app/change-password/index.html",
    "revision": "ae10233eabb325bbe077ecafa7355a59"
  },
  {
    "url": "app/index.html",
    "revision": "25bc632ff06e2a27bd0a39d529c46da2"
  },
  {
    "url": "app/index.xml",
    "revision": "6640e3c6803e876af605c1672af91847"
  },
  {
    "url": "app/invoices/index.html",
    "revision": "f3bf92f67b9b97222123fef440a9a92e"
  },
  {
    "url": "app/login/index.html",
    "revision": "a97d544ca492569c83863157a73c0aff"
  },
  {
    "url": "app/logout/index.html",
    "revision": "2d7a4f289e0c7ab753d33f766c4467ed"
  },
  {
    "url": "app/signup/index.html",
    "revision": "5d1728dec8ef377701fba7e1493635e4"
  },
  {
    "url": "app/subscribe/index.html",
    "revision": "74b1541c048f1e3e04bb5803e2b166de"
  },
  {
    "url": "app/teams/index.html",
    "revision": "6d83f15feaa3a75121cd1580ec712164"
  },
  {
    "url": "blog/article-artificial-intelligence/index.html",
    "revision": "3993e15ed61d570c8cd7b93733b7af6f"
  },
  {
    "url": "blog/first-ai-job-search/index.html",
    "revision": "7f0f2da8f5160db4f17907ee6469464a"
  },
  {
    "url": "blog/five-questions-about-artificial-intelligence-hr/index.html",
    "revision": "33e2fa46c7afd8a164eb5c5f90458416"
  },
  {
    "url": "blog/google-job-api-bias/index.html",
    "revision": "e4f0d6bb0d889355ebd8f0f8be26110e"
  },
  {
    "url": "blog/guide-artificial-intelligence-human-resources/index.html",
    "revision": "40e6fa97f5712664e471727d0d27b080"
  },
  {
    "url": "blog/hire-process/index.html",
    "revision": "6707030aec2aa74a11e8009c99e40049"
  },
  {
    "url": "blog/index.html",
    "revision": "14e705b219ae309e8d3bd2505af4dcb8"
  },
  {
    "url": "blog/index.xml",
    "revision": "8382559bc8d2f9a7abc4410154117d97"
  },
  {
    "url": "blog/page/1/index.html",
    "revision": "b4c91401aed5c747cf5df94b090cc149"
  },
  {
    "url": "blog/proud-hungry-driven/index.html",
    "revision": "b4839bdc17a1404e9179bdcf89b55a89"
  },
  {
    "url": "blog/slack-channel/index.html",
    "revision": "f345174a0516430025be0d7d7e3f84a0"
  },
  {
    "url": "blog/talent-ai-organizational-development/index.html",
    "revision": "0a3e060f986059afe6011be481e06535"
  },
  {
    "url": "blog/texting-artificial-intelligence-human-resources/index.html",
    "revision": "da40e8d4f03dec91a88c131b38004928"
  },
  {
    "url": "browserconfig.xml",
    "revision": "8c633c3434f41dd37d19147e931f320f"
  },
  {
    "url": "calculator/index.html",
    "revision": "18b6169c5dcfddca3cf7abcba8ca30de"
  },
  {
    "url": "categories/index.html",
    "revision": "1df323538e3063343febc9b929873be3"
  },
  {
    "url": "categories/index.xml",
    "revision": "5d147555541d21ad09d5274320ccad23"
  },
  {
    "url": "code-of-conduct/index.html",
    "revision": "9d37a80260817d33def671cb093a9983"
  },
  {
    "url": "css/base.css",
    "revision": "8de8568a58e87e0b3017194fd2fe0f11"
  },
  {
    "url": "css/main.css",
    "revision": "3cc6282a9f89818d325e3b841fd7a6d7"
  },
  {
    "url": "css/simple-grid.min.css",
    "revision": "8367cffd5a4aa9499f40dcb0db08e26b"
  },
  {
    "url": "download/index.html",
    "revision": "dd50682ffa51279bf6af676bf8639d2e"
  },
  {
    "url": "favicon.ico",
    "revision": "1270e59ce1fc92c258736772ef851220"
  },
  {
    "url": "icons/icon-1024x1024.png",
    "revision": "828da026e9c5fce49a4b3305a86b7478"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "f1bbf077c6831cde62930a8fe9e5d1f7"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "f826c40f05fc9359741ed31ed2b14249"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "b20c3b11dadff5e02cbedd0efe1ea1cb"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "eced0d12017ecdf9beaf41e23f0aaf12"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "e58ba5f6496dbf2f630d639a7943c9b5"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "ba165b93a5c45d57c96a9b353a36b942"
  },
  {
    "url": "images/blog-cover.jpg",
    "revision": "f55e924eff608d71da37e57b398c587d"
  },
  {
    "url": "images/blog/active-users-four-months.png",
    "revision": "dc458118ee5c8fc7a3d46f4ea18a16be"
  },
  {
    "url": "images/blog/advanced-send.png",
    "revision": "e409c297311f193fa54f64222c016a46"
  },
  {
    "url": "images/blog/binaryfile.png",
    "revision": "9d342eba30765cec162e9ff4b75404fb"
  },
  {
    "url": "images/blog/certificates.png",
    "revision": "596f3bd56f5829f757571a48d4f2cc08"
  },
  {
    "url": "images/blog/code.png",
    "revision": "0e6479a9776791bf57764b405d201de3"
  },
  {
    "url": "images/blog/cookies.png",
    "revision": "f57b4aa1121298da0762baac0f87b094"
  },
  {
    "url": "images/blog/dau-10.png",
    "revision": "c45a75a2f9a3f353a23ae9c0f0cdc7b8"
  },
  {
    "url": "images/blog/dau-11.png",
    "revision": "6f3871983ca0cbc293add53a56ac241d"
  },
  {
    "url": "images/blog/dau-12.png",
    "revision": "96b8c4d008302e859214515db24b9248"
  },
  {
    "url": "images/blog/dau-13.png",
    "revision": "362c241ab10fbfec8f9e8e671d326e24"
  },
  {
    "url": "images/blog/dau-14.png",
    "revision": "b837f1a478c84d56e08b266a8990e624"
  },
  {
    "url": "images/blog/dau-15.png",
    "revision": "9166edddf056be17ce0d0401ad9a3eae"
  },
  {
    "url": "images/blog/dau-16.png",
    "revision": "166d3ead3e8658ca05414ca78aad22ac"
  },
  {
    "url": "images/blog/dau-17.png",
    "revision": "21d555359837b7e90555a0852ee10288"
  },
  {
    "url": "images/blog/dau-18.png",
    "revision": "c6a0099abfe5d2e9626528a7914c3b23"
  },
  {
    "url": "images/blog/dau-5.png",
    "revision": "ec30b3b31c32946342ed124710ff471b"
  },
  {
    "url": "images/blog/dau-6.png",
    "revision": "8fd1944bc4e28e2646c26073e1b30ae4"
  },
  {
    "url": "images/blog/dau-7.png",
    "revision": "0d2b9a48709531625d5d79a358ae864c"
  },
  {
    "url": "images/blog/dau-8.png",
    "revision": "0524578c76d20340483ed005fc32b1f9"
  },
  {
    "url": "images/blog/dau-9.png",
    "revision": "bd8a2f0780c66830b68341c8f99b07e5"
  },
  {
    "url": "images/blog/devtron.png",
    "revision": "51593ee13d3fcf95b1d2d72b11174080"
  },
  {
    "url": "images/blog/docs-analytics.png",
    "revision": "d07d6aaade99411c4efbabaadc828f4e"
  },
  {
    "url": "images/blog/docs-search.png",
    "revision": "c8f7f168523ee77b85562a6fbe416d65"
  },
  {
    "url": "images/blog/electron-apps.png",
    "revision": "13437261c3caeaac6d0354a3e8aa16b5"
  },
  {
    "url": "images/blog/electron-hosting-cost.png",
    "revision": "9518fb09ccbbd7e981377fdbf41da5d6"
  },
  {
    "url": "images/blog/environments.png",
    "revision": "64ddda3a7f372189d43f5c037c97edf6"
  },
  {
    "url": "images/blog/github-oauth/authentication-settings.png",
    "revision": "3683e77c7574a6f75815f36b534ab266"
  },
  {
    "url": "images/blog/github-oauth/authorize.png",
    "revision": "06e635fc957624db83c1cffb31886cad"
  },
  {
    "url": "images/blog/github-oauth/request.png",
    "revision": "feb0c70094fcba44adf3286aea212fbb"
  },
  {
    "url": "images/blog/github-oauth/response.png",
    "revision": "aa50d88ca55f2de06272d32e64bd6c1a"
  },
  {
    "url": "images/blog/github-oauth/timeline.png",
    "revision": "2a6bd9d0b52ece02007dbb22fc593d50"
  },
  {
    "url": "images/blog/graphql.png",
    "revision": "e23e284f0d91f296a92d9ed6803f4a14"
  },
  {
    "url": "images/blog/har.png",
    "revision": "ceaa67470e6a6780f5c614db1cefc687"
  },
  {
    "url": "images/blog/history.png",
    "revision": "587d61b289e004f61143b473bff9d4f9"
  },
  {
    "url": "images/blog/insomnia-grid.png",
    "revision": "62badc7660c80b1e40afac18503af234"
  },
  {
    "url": "images/blog/material-theme.png",
    "revision": "9597e560f0c7f748883e3094b9747a04"
  },
  {
    "url": "images/blog/mrr-10.png",
    "revision": "b3c5d17e279a551bdc6121da356ef465"
  },
  {
    "url": "images/blog/mrr-11.png",
    "revision": "95cd3ec0baa39fc7e7877e6203ef7379"
  },
  {
    "url": "images/blog/mrr-12.png",
    "revision": "26a4f9931febff3c6bd1de0c8309fc30"
  },
  {
    "url": "images/blog/mrr-13.png",
    "revision": "43998f0d3546c1df7cdbdaa4aae8cbd4"
  },
  {
    "url": "images/blog/mrr-14.png",
    "revision": "d8ee6ad0055e5bb6382d8eb296f2322a"
  },
  {
    "url": "images/blog/mrr-15.png",
    "revision": "23c19833252caee694e6a5a6ad8a6864"
  },
  {
    "url": "images/blog/mrr-16.png",
    "revision": "c8e99f1bf70ed4dfbdea5685200ce13b"
  },
  {
    "url": "images/blog/mrr-17.png",
    "revision": "66e9886705f54c9e543240ec526315bd"
  },
  {
    "url": "images/blog/mrr-18.png",
    "revision": "4b1ab26b93d11d9e69581f5b35ef5f3f"
  },
  {
    "url": "images/blog/mrr-6.png",
    "revision": "28587416ce2529e4f1f65a228265f42d"
  },
  {
    "url": "images/blog/mrr-7.png",
    "revision": "b5be0aed6853ca8bf4a53351e1aaca19"
  },
  {
    "url": "images/blog/mrr-8.png",
    "revision": "02551d227791967193be014d46fcc387"
  },
  {
    "url": "images/blog/mrr-9.png",
    "revision": "912d961f28ab566b1d7440b9d758cbbb"
  },
  {
    "url": "images/blog/multipart.png",
    "revision": "d5cde332981417ccf8c2c0f24b837220"
  },
  {
    "url": "images/blog/pdf-preview.png",
    "revision": "c2ebab81f626c14cb6cb62afc7e977bd"
  },
  {
    "url": "images/blog/premium-themes.png",
    "revision": "e55f6c39246ef905c5f893d0e90392cb"
  },
  {
    "url": "images/blog/steps-8.png",
    "revision": "371c67ad0a54296e6b92aa88ec491b4b"
  },
  {
    "url": "images/blog/switch-workspace.png",
    "revision": "5167784dad23fabaa5ac64808388a79c"
  },
  {
    "url": "images/blog/sync-menu.png",
    "revision": "1b39a6ec4b977b3f23a8e6a4c48c9dd8"
  },
  {
    "url": "images/blog/themes.png",
    "revision": "39f99a59853ab8790515cbf7646be69d"
  },
  {
    "url": "images/blog/time-8.png",
    "revision": "2822ea1cf19ee19a25d6c8f378e00c34"
  },
  {
    "url": "images/blog/twitter-oauth.png",
    "revision": "f9121dee03f0c255be0fead40af98f36"
  },
  {
    "url": "images/blog/unix-sockets.png",
    "revision": "6c3c0e423027ad4169e978bdbc7a1fbc"
  },
  {
    "url": "images/blog/version-5/autocomplete.gif",
    "revision": "51a12634e829fa155cc98f71e556dc9a"
  },
  {
    "url": "images/blog/version-5/curl.png",
    "revision": "9040d2f3ee3379236e022efb592613e8"
  },
  {
    "url": "images/blog/version-5/dropbox.gif",
    "revision": "3a1cda461b6c64ab1c78994cdabfeee9"
  },
  {
    "url": "images/blog/version-5/render-errors.png",
    "revision": "2496c27ed71b714f355bfe7f521ccc98"
  },
  {
    "url": "images/blog/version-5/sort.gif",
    "revision": "750280062c4840d16d3b0ece6ddc57b9"
  },
  {
    "url": "images/blog/version-5/variable-error.gif",
    "revision": "793be52e31fb7cbd5f7ac25c032caf00"
  },
  {
    "url": "images/blog/web-traffic-four-months.png",
    "revision": "d2391c8080822c5a571594ea6622cc9d"
  },
  {
    "url": "images/blog/xpath.png",
    "revision": "649656426d9a50857ace0af2524536d2"
  },
  {
    "url": "images/favicon/android-chrome-192x192.png",
    "revision": "d2fd3851c85b2c2f3b985de7339207dc"
  },
  {
    "url": "images/favicon/android-chrome-512x512.png",
    "revision": "56fdc873c0dc805febb041fd933911a5"
  },
  {
    "url": "images/favicon/apple-touch-icon.png",
    "revision": "49df84398685f19a3a1e30a273570daf"
  },
  {
    "url": "images/favicon/browserconfig.xml",
    "revision": "8fcc22394a263af689fd18f7d17716af"
  },
  {
    "url": "images/favicon/favicon-16x16.png",
    "revision": "09a47a50ae7ed4809c30b7fa6de29280"
  },
  {
    "url": "images/favicon/favicon-32x32.png",
    "revision": "802eef70c1f617773e521a19d44c3586"
  },
  {
    "url": "images/favicon/favicon.ico",
    "revision": "1270e59ce1fc92c258736772ef851220"
  },
  {
    "url": "images/favicon/manifest.json",
    "revision": "23533bf35cdb2841e8fac1c3b688cbb3"
  },
  {
    "url": "images/favicon/mstile-150x150.png",
    "revision": "92224c2ccf3295e95a933af6a7ac0877"
  },
  {
    "url": "images/favicon/mstile.png",
    "revision": "0f9f4d3713d0057bcfe114951f6fe263"
  },
  {
    "url": "images/favicon/safari-pinned-tab.svg",
    "revision": "29e7323f3058d2bc25e0addf073cb016"
  },
  {
    "url": "images/icon-small.png",
    "revision": "3d2a420bfb04060077d8df38257c2505"
  },
  {
    "url": "images/icon-small2.png",
    "revision": "65fb43650f8aeabd4e1f5143ac1bbe9c"
  },
  {
    "url": "images/icon-small3.png",
    "revision": "314549b67fd27746b15be8bbfe7cb595"
  },
  {
    "url": "images/icon.png",
    "revision": "fe5e60b28dfed38f710e26faff7c1210"
  },
  {
    "url": "images/r-c-logo.png",
    "revision": "b7bceed15d3da98e953f801285344709"
  },
  {
    "url": "images/r-c-logoldpi.png",
    "revision": "4519bc6b208f985d02c8c36ce7fed80c"
  },
  {
    "url": "images/screens/big/code.png",
    "revision": "2b74a0692ef8719a3e17030b93c28116"
  },
  {
    "url": "images/screens/big/cookies.png",
    "revision": "b96d030bbca3ae8e324a0db2c332b2d5"
  },
  {
    "url": "images/screens/big/environments.png",
    "revision": "28c0be4da01caf7f791c0384d09c1e62"
  },
  {
    "url": "images/screens/big/themes.png",
    "revision": "a3a90c3df56979687aa90e34051ba214"
  },
  {
    "url": "images/screens/drag.png",
    "revision": "1aa60c2a7aa94d5d278df1cb7ef77beb"
  },
  {
    "url": "images/screens/main.png",
    "revision": "d205e423fb5b75b589be0fcfc618174a"
  },
  {
    "url": "images/screens/responses copy.png",
    "revision": "1a41a55518cf9a4b8be740391440eb1e"
  },
  {
    "url": "images/screens/responses.png",
    "revision": "be8d72c3ee07efa1afe649b9c3b7629c"
  },
  {
    "url": "images/screens/sharing.jpg",
    "revision": "efc29a43ce8c205bdb2471e04ff78bfd"
  },
  {
    "url": "images/screens/sharing.png",
    "revision": "08252e5c41eaa47c1758e7d12fb3678f"
  },
  {
    "url": "images/screens/template.png",
    "revision": "dd7c76cc92a18727cdf62600c8ce6de2"
  },
  {
    "url": "images/twitter-card-icon.png",
    "revision": "fa9c2cd8f3c2e27dc8da664dde68a025"
  },
  {
    "url": "images/twitter-promo-3.png",
    "revision": "1ee7cbdb38e203d55cf3d40f2723bb57"
  },
  {
    "url": "index.html",
    "revision": "854d5ef6d2106caf9df2265d0ef4657c"
  },
  {
    "url": "index.xml",
    "revision": "40db2c419806f3862497e4be0a2eeb61"
  },
  {
    "url": "javascript/build/app.min.js",
    "revision": "9ec28043e1c73515f41a0e0907dde53e"
  },
  {
    "url": "javascript/build/main.min.js",
    "revision": "d5bdde1a26967909add82315d6a5b55a"
  },
  {
    "url": "keys/debian-public.key.asc",
    "revision": "010bd345ec73ccfbed22315e3f83b466"
  },
  {
    "url": "manifest.json",
    "revision": "45fd838578c476775d966f4cca8d25ca"
  },
  {
    "url": "offline/index.html",
    "revision": "a14f747abf2a09752e88356f98cbf155"
  },
  {
    "url": "partners/index.html",
    "revision": "a0de01b28c526307d046dc4f351aba3f"
  },
  {
    "url": "pricing/index.html",
    "revision": "a956f8b8a625a89e9eee18922bea3162"
  },
  {
    "url": "privacy/index.html",
    "revision": "826c0ce11dc4271c6e57b6756a1c1f93"
  },
  {
    "url": "robots.txt",
    "revision": "e9d3a0cb9c192af27dff4e6bc10d3de5"
  },
  {
    "url": "series/index.html",
    "revision": "d34b60b1f80bac0f493948df575f18f1"
  },
  {
    "url": "series/index.xml",
    "revision": "8eef134a2fc98fb261701e5b08253665"
  },
  {
    "url": "sitemap.xml",
    "revision": "99ed3d2cddf6a6cb58771c0685ac645a"
  },
  {
    "url": "support/index.html",
    "revision": "ee7973fdfc025634c07f257db5ed64c7"
  },
  {
    "url": "tags/announcement/index.html",
    "revision": "209e77ed8780f0b5ac2be7b53086d719"
  },
  {
    "url": "tags/announcement/index.xml",
    "revision": "9084ce03e6a0dccd8a19a6d6e4c25cce"
  },
  {
    "url": "tags/announcement/page/1/index.html",
    "revision": "39367951fb5b838448d15596364c9083"
  },
  {
    "url": "tags/artificial-intelligence/index.html",
    "revision": "13c72eaa36135107df42d13da5018554"
  },
  {
    "url": "tags/artificial-intelligence/index.xml",
    "revision": "9b34b5c175758e4df74e4802a01664d8"
  },
  {
    "url": "tags/artificial-intelligence/page/1/index.html",
    "revision": "d1e4e2ced0d2babfa825a294a3816fb0"
  },
  {
    "url": "tags/hiring-selection/index.html",
    "revision": "4abaddc0cf5e92c9ec4bed5bbc44f1fe"
  },
  {
    "url": "tags/hiring-selection/index.xml",
    "revision": "bee5e4e49b9649853202270937678464"
  },
  {
    "url": "tags/hiring-selection/page/1/index.html",
    "revision": "a0728bd2aea49347c114a7bae1f8cf24"
  },
  {
    "url": "tags/human-intelligence/index.html",
    "revision": "06511bbed82c63dd6ba3ae0ed186e87c"
  },
  {
    "url": "tags/human-intelligence/index.xml",
    "revision": "15948ab0d8ba119cffb935988c7db209"
  },
  {
    "url": "tags/human-intelligence/page/1/index.html",
    "revision": "aebc4fb13a03e438ed8bd303de673a66"
  },
  {
    "url": "tags/index.html",
    "revision": "5436add6aa1b810a8260c756bfa9b97f"
  },
  {
    "url": "tags/index.xml",
    "revision": "fbd777c0dbc3310c144ddfcdc6e0ab17"
  },
  {
    "url": "terms/index.html",
    "revision": "56082b4606f8385a0a10429956e86bcb"
  },
  {
    "url": "transparency/index.html",
    "revision": "cbf01bcfe8ca9bd759d399e927a7e3e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
