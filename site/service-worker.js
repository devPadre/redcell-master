/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["_hugo/404.html","9ad76afb14e649fe2ed65ade25c30923"],["config.yaml","3ee9bd9c1291cd05bb4be808583b3092"],["content/activated.html","a4a572caa01b7af31d03514324316beb"],["content/app/account.html","08624730048691f504e5a8e4040e5516"],["content/app/change-email.html","480d6d50eb07e188a3e7363fcff6b279"],["content/app/change-password.html","d9f7a24da037919c6c3d417105b5b7be"],["content/app/invoices.html","ddf2a6c6e7c3c2b6a36c5044f54fb079"],["content/app/login.html","2c0e5d29a91c9891e0aedba4a287a9e0"],["content/app/logout.html","13cacc780fcef903994c93e4ca1c1b76"],["content/app/signup.html","4e0fb7feff5f871e6b8b1bb1ed26ce09"],["content/app/subscribe.html","69af60e2e0cd5d097a02791a4f5375ad"],["content/app/teams.html","98a368b9b95b6ae2239fcef40a3d3405"],["content/blog/article-artificial-intelligence.md","07ae26bd36db2fa42b8bfd08bd25b960"],["content/blog/first-ai-job-search.md","f888c2e5996fdd9c74231510dd2f6b11"],["content/blog/google-job-api-bias.md","b6b7fd469f82c0c11e1bfa420e63412c"],["content/blog/guide-artificial-intelligence-in-human-resources.md","feaadcbddb9893e6b2c6b44b6c163080"],["content/blog/hire-process.md","3b3aca01c7f3fc9c67cc86183212b2e3"],["content/blog/proud-hungry-driven.md","185348101e23c45b36c71fd4f8572c45"],["content/blog/slack-channel.md","53eca11c53c3a844f280046036c13df7"],["content/blog/texting-artificial-intelligence-human-resources.md","8ff05b063972f05fb2f12b32de307df7"],["content/code-of-conduct.md","f17b129498004e38febec1f91d4c9b31"],["content/download.html","e8d8c6ee749cf7918502b03c55e470ac"],["content/offline.md","1d8d004ff84c323909db583212d6e2be"],["content/partners.md","ba5abc463230540448c9346a24af6e04"],["content/pricing.html","9503dc8fe4f5a987b54ba9aa81d6350b"],["content/privacy.md","69a42615fe68f0f203e7d16690dad3d5"],["content/support.md","0d97a10b022e86370de0c7860357f56e"],["content/terms.md","6cae835c6d70703ba881450a5e453582"],["content/transparency.md","069a626049e1059af401ea36d01ff684"],["layouts/index.html","1814658e08a6fcfc7545631d50dca95e"],["layouts/partials/extra-footer.html","17bd2324fa5f9c0409a6138d282fe297"],["layouts/partials/extra-head.html","00d71ccf29ae322db29b5ea8e14c3634"],["layouts/section/changelog.rss.xml","3d0f7c376d9b567fa05a74ce2fd6c644"],["public/404.html","19f8167fead4408e82ea464857bd4514"],["public/activated/index.html","e51f607f62f93b9160cdcfc800a094d2"],["public/app/account/index.html","0c12839dcee5eb23decf3fb4226df9d9"],["public/app/change-email/index.html","df01c474aeb6945e3ab61a1d943f4c7b"],["public/app/change-password/index.html","f1f602606753a347ca91bf825143fbf3"],["public/app/index.html","25bc632ff06e2a27bd0a39d529c46da2"],["public/app/index.xml","7cf5e1bd67c8c9578b33e512cf34117d"],["public/app/invoices/index.html","aa2ab8af88f9a8103f4749bf39bf5d31"],["public/app/login/index.html","c4590c14bed4094e44ea3660fe80e74d"],["public/app/logout/index.html","0f287f8f3d63639e528a6d3839f8c816"],["public/app/signup/index.html","d9b830a301f98aa7a085d8644fce25a7"],["public/app/subscribe/index.html","80692b7f0ecf20bc426b97d9b99ca232"],["public/app/teams/index.html","3a1af5cff2ec2a5d06296363f1da80d9"],["public/blog/3.4.0-changelog/index.html","9b848416355d2e8e0a7737c385cc9625"],["public/blog/chrome-rest-client-alternatives/index.html","0dc935206896511c097a37704fdce9ff"],["public/blog/electron-is-a-web-developers-dream/index.html","c5584e1ccf1f38579eb9e189cfecbcdb"],["public/blog/google-discontinuing-chrome-apps/index.html","4ab8ea38425e074a5633e2c8e5fff5b0"],["public/blog/index.html","0966e7ee13329d2e4db24eba3c0bb271"],["public/blog/index.xml","5f31b9dd029cbca635e8d5b797ffe0c9"],["public/blog/insomnia-3.2.0-beta-update/index.html","eb30834f372eec0003b3b23884dba9e6"],["public/blog/insomnia-4-announcement/index.html","7335c1885fe8c5cfaa2b741bc22784ec"],["public/blog/insomnia-5-announcement/index.html","9c30e66a5cb898c705c1deb02aa4cf7a"],["public/blog/insomnia-plus-beta/index.html","e88562b91e216e6996f55788d705d288"],["public/blog/introducing-color-themes/index.html","7e5cfce361c809e547d5e1f74d7b2c00"],["public/blog/introducing-graphql/index.html","af87e39b6c8d02679d3cd356df9f89c1"],["public/blog/introducing-insomnia-plus/index.html","ada5046bd33ea06e9af6a681c3437a58"],["public/blog/introducing-oauth-1.0-support/index.html","9f9a90f87b637831e2d4e6d8fe319f8f"],["public/blog/linux-update-notifications/index.html","be3e6e6634b989151f90fd82f25a6f84"],["public/blog/new-documentation-website/index.html","54436319b0343c8b627604f34d9e8eb7"],["public/blog/oauth2-github-api/index.html","80315e95d68a0b8dd9d21829953cdc7a"],["public/blog/open-source-announcement/index.html","d5365f8b306a43684e5d35b7a736e214"],["public/blog/page/1/index.html","8ef22b93ac8152dfd5051aa69d071560"],["public/blog/page/2/index.html","cb6bfd4a51dafbcf3841d265d26012db"],["public/blog/page/3/index.html","d0c979d84e8ec302eb98a80d1dc87260"],["public/blog/pdf-previews/index.html","519f09c84e85a77587ec93dee47e0b7f"],["public/blog/secure-remote-passwords-for-go/index.html","c7ba1859c72900f6ef443da9876b2783"],["public/blog/slack-channel/index.html","a21b60f810c44508601e5985c29e8b70"],["public/blog/ubuntu-ppa/index.html","2cab191c966bcf4c8bb6c8176bc84318"],["public/blog/unix-domain-sockets/index.html","fdcc8c79ec56ea45b0c60ebaf414502d"],["public/browserconfig.xml","8c633c3434f41dd37d19147e931f320f"],["public/categories/index.html","234e0b76ed3630856da81c1264604150"],["public/categories/index.xml","ab9ee88641c17a09bbce2f6eb8a34ad6"],["public/code-of-conduct/index.html","8a4873bde8da23833c625b0f134dad64"],["public/css/base.css","12d84409ed9cf9d218b4b378c4463414"],["public/css/main.css","5952d5803249a84c01c7736684f0328c"],["public/css/simple-grid.min.css","8367cffd5a4aa9499f40dcb0db08e26b"],["public/download/index.html","7ab1f0febd163d87004d4bfcb19d387d"],["public/favicon.ico","1270e59ce1fc92c258736772ef851220"],["public/images/blog-cover.jpg","f55e924eff608d71da37e57b398c587d"],["public/images/blog/active-users-four-months.png","dc458118ee5c8fc7a3d46f4ea18a16be"],["public/images/blog/advanced-send.png","e409c297311f193fa54f64222c016a46"],["public/images/blog/binaryfile.png","9d342eba30765cec162e9ff4b75404fb"],["public/images/blog/certificates.png","596f3bd56f5829f757571a48d4f2cc08"],["public/images/blog/code.png","0e6479a9776791bf57764b405d201de3"],["public/images/blog/cookies.png","f57b4aa1121298da0762baac0f87b094"],["public/images/blog/dau-10.png","c45a75a2f9a3f353a23ae9c0f0cdc7b8"],["public/images/blog/dau-11.png","6f3871983ca0cbc293add53a56ac241d"],["public/images/blog/dau-12.png","96b8c4d008302e859214515db24b9248"],["public/images/blog/dau-13.png","362c241ab10fbfec8f9e8e671d326e24"],["public/images/blog/dau-14.png","b837f1a478c84d56e08b266a8990e624"],["public/images/blog/dau-15.png","9166edddf056be17ce0d0401ad9a3eae"],["public/images/blog/dau-16.png","166d3ead3e8658ca05414ca78aad22ac"],["public/images/blog/dau-17.png","21d555359837b7e90555a0852ee10288"],["public/images/blog/dau-18.png","c6a0099abfe5d2e9626528a7914c3b23"],["public/images/blog/dau-5.png","ec30b3b31c32946342ed124710ff471b"],["public/images/blog/dau-6.png","8fd1944bc4e28e2646c26073e1b30ae4"],["public/images/blog/dau-7.png","0d2b9a48709531625d5d79a358ae864c"],["public/images/blog/dau-8.png","0524578c76d20340483ed005fc32b1f9"],["public/images/blog/dau-9.png","bd8a2f0780c66830b68341c8f99b07e5"],["public/images/blog/devtron.png","51593ee13d3fcf95b1d2d72b11174080"],["public/images/blog/docs-analytics.png","d07d6aaade99411c4efbabaadc828f4e"],["public/images/blog/docs-search.png","c8f7f168523ee77b85562a6fbe416d65"],["public/images/blog/electron-apps.png","13437261c3caeaac6d0354a3e8aa16b5"],["public/images/blog/electron-hosting-cost.png","9518fb09ccbbd7e981377fdbf41da5d6"],["public/images/blog/environments.png","64ddda3a7f372189d43f5c037c97edf6"],["public/images/blog/github-oauth/authentication-settings.png","3683e77c7574a6f75815f36b534ab266"],["public/images/blog/github-oauth/authorize.png","06e635fc957624db83c1cffb31886cad"],["public/images/blog/github-oauth/request.png","feb0c70094fcba44adf3286aea212fbb"],["public/images/blog/github-oauth/response.png","aa50d88ca55f2de06272d32e64bd6c1a"],["public/images/blog/github-oauth/timeline.png","2a6bd9d0b52ece02007dbb22fc593d50"],["public/images/blog/graphql.png","e23e284f0d91f296a92d9ed6803f4a14"],["public/images/blog/har.png","ceaa67470e6a6780f5c614db1cefc687"],["public/images/blog/history.png","587d61b289e004f61143b473bff9d4f9"],["public/images/blog/insomnia-grid.png","62badc7660c80b1e40afac18503af234"],["public/images/blog/material-theme.png","9597e560f0c7f748883e3094b9747a04"],["public/images/blog/mrr-10.png","b3c5d17e279a551bdc6121da356ef465"],["public/images/blog/mrr-11.png","95cd3ec0baa39fc7e7877e6203ef7379"],["public/images/blog/mrr-12.png","26a4f9931febff3c6bd1de0c8309fc30"],["public/images/blog/mrr-13.png","43998f0d3546c1df7cdbdaa4aae8cbd4"],["public/images/blog/mrr-14.png","d8ee6ad0055e5bb6382d8eb296f2322a"],["public/images/blog/mrr-15.png","23c19833252caee694e6a5a6ad8a6864"],["public/images/blog/mrr-16.png","c8e99f1bf70ed4dfbdea5685200ce13b"],["public/images/blog/mrr-17.png","66e9886705f54c9e543240ec526315bd"],["public/images/blog/mrr-18.png","4b1ab26b93d11d9e69581f5b35ef5f3f"],["public/images/blog/mrr-6.png","28587416ce2529e4f1f65a228265f42d"],["public/images/blog/mrr-7.png","b5be0aed6853ca8bf4a53351e1aaca19"],["public/images/blog/mrr-8.png","02551d227791967193be014d46fcc387"],["public/images/blog/mrr-9.png","912d961f28ab566b1d7440b9d758cbbb"],["public/images/blog/multipart.png","d5cde332981417ccf8c2c0f24b837220"],["public/images/blog/pdf-preview.png","c2ebab81f626c14cb6cb62afc7e977bd"],["public/images/blog/premium-themes.png","e55f6c39246ef905c5f893d0e90392cb"],["public/images/blog/steps-8.png","371c67ad0a54296e6b92aa88ec491b4b"],["public/images/blog/switch-workspace.png","5167784dad23fabaa5ac64808388a79c"],["public/images/blog/sync-menu.png","1b39a6ec4b977b3f23a8e6a4c48c9dd8"],["public/images/blog/themes.png","39f99a59853ab8790515cbf7646be69d"],["public/images/blog/time-8.png","2822ea1cf19ee19a25d6c8f378e00c34"],["public/images/blog/twitter-oauth.png","f9121dee03f0c255be0fead40af98f36"],["public/images/blog/unix-sockets.png","6c3c0e423027ad4169e978bdbc7a1fbc"],["public/images/blog/version-5/autocomplete.gif","51a12634e829fa155cc98f71e556dc9a"],["public/images/blog/version-5/curl.png","9040d2f3ee3379236e022efb592613e8"],["public/images/blog/version-5/dropbox.gif","3a1cda461b6c64ab1c78994cdabfeee9"],["public/images/blog/version-5/render-errors.png","2496c27ed71b714f355bfe7f521ccc98"],["public/images/blog/version-5/sort.gif","750280062c4840d16d3b0ece6ddc57b9"],["public/images/blog/version-5/variable-error.gif","793be52e31fb7cbd5f7ac25c032caf00"],["public/images/blog/web-traffic-four-months.png","d2391c8080822c5a571594ea6622cc9d"],["public/images/blog/xpath.png","649656426d9a50857ace0af2524536d2"],["public/images/favicon/android-chrome-192x192.png","d2fd3851c85b2c2f3b985de7339207dc"],["public/images/favicon/android-chrome-512x512.png","56fdc873c0dc805febb041fd933911a5"],["public/images/favicon/apple-touch-icon.png","49df84398685f19a3a1e30a273570daf"],["public/images/favicon/browserconfig.xml","8fcc22394a263af689fd18f7d17716af"],["public/images/favicon/favicon-16x16.png","09a47a50ae7ed4809c30b7fa6de29280"],["public/images/favicon/favicon-32x32.png","802eef70c1f617773e521a19d44c3586"],["public/images/favicon/favicon.ico","1270e59ce1fc92c258736772ef851220"],["public/images/favicon/manifest.json","a99a23ab89b049a47707624bf29dfcc4"],["public/images/favicon/mstile-150x150.png","92224c2ccf3295e95a933af6a7ac0877"],["public/images/favicon/mstile.png","0f9f4d3713d0057bcfe114951f6fe263"],["public/images/favicon/safari-pinned-tab.svg","29e7323f3058d2bc25e0addf073cb016"],["public/images/icon-small.png","3d2a420bfb04060077d8df38257c2505"],["public/images/icon-small2.png","65fb43650f8aeabd4e1f5143ac1bbe9c"],["public/images/icon-small3.png","314549b67fd27746b15be8bbfe7cb595"],["public/images/icon.png","fe5e60b28dfed38f710e26faff7c1210"],["public/images/r-c-logo.png","b7bceed15d3da98e953f801285344709"],["public/images/r-c-logoldpi.png","4519bc6b208f985d02c8c36ce7fed80c"],["public/images/screens/big/code.png","2b74a0692ef8719a3e17030b93c28116"],["public/images/screens/big/cookies.png","b96d030bbca3ae8e324a0db2c332b2d5"],["public/images/screens/big/environments.png","28c0be4da01caf7f791c0384d09c1e62"],["public/images/screens/big/themes.png","a3a90c3df56979687aa90e34051ba214"],["public/images/screens/drag.png","1aa60c2a7aa94d5d278df1cb7ef77beb"],["public/images/screens/main.png","d205e423fb5b75b589be0fcfc618174a"],["public/images/screens/responses copy.png","1a41a55518cf9a4b8be740391440eb1e"],["public/images/screens/responses.png","be8d72c3ee07efa1afe649b9c3b7629c"],["public/images/screens/sharing.png","08252e5c41eaa47c1758e7d12fb3678f"],["public/images/screens/template.png","dd7c76cc92a18727cdf62600c8ce6de2"],["public/images/twitter-card-icon.png","fa9c2cd8f3c2e27dc8da664dde68a025"],["public/images/twitter-promo-3.png","1ee7cbdb38e203d55cf3d40f2723bb57"],["public/index.html","ca421fc82b8b033f24ff11c12c09e41e"],["public/index.xml","fb873b673e7d281ae681c282d398677a"],["public/javascript/build/main.min.js","e99fd1eb21d86e3789d014260d59e93b"],["public/keys/debian-public.key.asc","010bd345ec73ccfbed22315e3f83b466"],["public/paypal/index.html","82278c63eb8cd30c3245121e4f23ef5c"],["public/plus/index.html","3101e69a7449ab3510b715765ed856b4"],["public/pricing/index.html","bbe1f010a9f7f221d77730bd8ae1da27"],["public/robots.txt","e9d3a0cb9c192af27dff4e6bc10d3de5"],["public/samples/recipe.pdf","7779e912542d51d7bb0e1afce62e34a6"],["public/series/index.html","f7277cb20d49efc23057afa29986cedd"],["public/series/index.xml","b616d9d13bc218248918bed0b763263a"],["public/series/tutorial/index.html","2444348d9031440c390d1342a09c091f"],["public/series/tutorial/index.xml","0ef857992e0d2bec6cdac3c4525e4849"],["public/series/tutorial/page/1/index.html","2891c61263d6f34838068aa05116a7cc"],["public/sitemap.xml","9e639e67d2eea55080c74c7fe105d562"],["public/support/index.html","8f88bbced071273ff39163f549b7f677"],["public/tags/announcement/index.html","1933c8d1d73b575fb3c9c81c29e7fb2d"],["public/tags/announcement/index.xml","0346e365f150d6f0b5d22fc4c9e14b96"],["public/tags/announcement/page/1/index.html","752d63048e32dfcfbfb8a4cca65c0f40"],["public/tags/beta/index.html","66a88f72d8fe20a83ea6c986a35efd2d"],["public/tags/beta/index.xml","0afadc67c404d8157a75c39ed1725184"],["public/tags/beta/page/1/index.html","d6c596fee4cf6c8e33469f1281a57d60"],["public/tags/electron/index.html","2962f22501027501bc6b9a486e381308"],["public/tags/electron/index.xml","0764f9a53d0aaa209f65d3d15dd07b43"],["public/tags/electron/page/1/index.html","b6bf46fd0eec0b4094fbea03d7ccfb87"],["public/tags/feature/index.html","e5c7a5f9dadbca8607c626a05dfc3994"],["public/tags/feature/index.xml","23c6de085f1b58b5a2a7339066d50383"],["public/tags/feature/page/1/index.html","c1d1f79e6cf11cff65960cf3d1e55139"],["public/tags/golang/index.html","6c56d41b08563226660f2f864d9e0718"],["public/tags/golang/index.xml","31d7542d1a91acb86875ce947674b436"],["public/tags/golang/page/1/index.html","7d045c32fe74667e3d1f490d82f347bd"],["public/tags/index.html","10ff7371775c14e0d0b6585373ece527"],["public/tags/index.xml","770caa076a2c2a8f8d0438111a96a814"],["public/tags/info/index.html","e2c9dea0bf9bb17587212a0ce33ec4ef"],["public/tags/info/index.xml","12f4b9373020c9626d96d7850b3e4c37"],["public/tags/info/page/1/index.html","33e4828c5a37cbdcefbfa80c5e9082df"],["public/tags/linux/index.html","e86de4aa8048fbdc8fc84a334c3c36a6"],["public/tags/linux/index.xml","07a1ed3b0b78eb471c236ff6211e0584"],["public/tags/linux/page/1/index.html","a6d32b8d72da1adeefa7bf0c7f88d6ba"],["public/tags/open-source/index.html","105be220890b76d231ed35634f111f6a"],["public/tags/open-source/index.xml","e0c4a5301f5960278797af13b6e2e690"],["public/tags/open-source/page/1/index.html","89b3d54da18d9b0b0f9459820e9904b9"],["public/tags/resource/index.html","ab135aa59d737004a29376e41a491787"],["public/tags/resource/index.xml","314bff0e8a62422cb70c0601de2bc46f"],["public/tags/resource/page/1/index.html","b28d6327a300bfc9c9408cf824b61a60"],["public/tags/software/index.html","c2fb9a2d64e0c312d8749cfc86833cc4"],["public/tags/software/index.xml","8945fcbf8cd4e7f6a6b2ee0fe423ba6f"],["public/tags/software/page/1/index.html","cb14c15e3e9cb265b5b5189403fc117e"],["public/tags/update/index.html","c1469f0431d7cc6b1a75af54e2e6a2ac"],["public/tags/update/index.xml","7f9f82957c783d2889644998acc07a2b"],["public/tags/update/page/1/index.html","282e392197f2002560958a17c4a7bcd8"],["public/teams/index.html","4e190f045c35827e5029422ed471145b"],["public/terms/index.html","b05ae5076c12f4e97fd6d0378a8b9c95"],["public/transparency/index.html","c05a7f21e9e08effd25ef1f3de2dd375"],["static/404.html","ff2a9e35469400f5b229877bed9c095a"],["static/browserconfig.xml","8c633c3434f41dd37d19147e931f320f"],["static/css/main.css","3cc6282a9f89818d325e3b841fd7a6d7"],["static/favicon.ico","1270e59ce1fc92c258736772ef851220"],["static/icons/icon-1024x1024.png","828da026e9c5fce49a4b3305a86b7478"],["static/icons/icon-128x128.png","f1bbf077c6831cde62930a8fe9e5d1f7"],["static/icons/icon-144x144.png","f826c40f05fc9359741ed31ed2b14249"],["static/icons/icon-152x152.png","b20c3b11dadff5e02cbedd0efe1ea1cb"],["static/icons/icon-192x192.png","eced0d12017ecdf9beaf41e23f0aaf12"],["static/icons/icon-256x256.png","e58ba5f6496dbf2f630d639a7943c9b5"],["static/icons/icon-512x512.png","ba165b93a5c45d57c96a9b353a36b942"],["static/images/blog-cover.jpg","f55e924eff608d71da37e57b398c587d"],["static/images/blog/active-users-four-months.png","dc458118ee5c8fc7a3d46f4ea18a16be"],["static/images/blog/advanced-send.png","e409c297311f193fa54f64222c016a46"],["static/images/blog/binaryfile.png","9d342eba30765cec162e9ff4b75404fb"],["static/images/blog/certificates.png","596f3bd56f5829f757571a48d4f2cc08"],["static/images/blog/code.png","0e6479a9776791bf57764b405d201de3"],["static/images/blog/cookies.png","f57b4aa1121298da0762baac0f87b094"],["static/images/blog/dau-10.png","c45a75a2f9a3f353a23ae9c0f0cdc7b8"],["static/images/blog/dau-11.png","6f3871983ca0cbc293add53a56ac241d"],["static/images/blog/dau-12.png","96b8c4d008302e859214515db24b9248"],["static/images/blog/dau-13.png","362c241ab10fbfec8f9e8e671d326e24"],["static/images/blog/dau-14.png","b837f1a478c84d56e08b266a8990e624"],["static/images/blog/dau-15.png","9166edddf056be17ce0d0401ad9a3eae"],["static/images/blog/dau-16.png","166d3ead3e8658ca05414ca78aad22ac"],["static/images/blog/dau-17.png","21d555359837b7e90555a0852ee10288"],["static/images/blog/dau-18.png","c6a0099abfe5d2e9626528a7914c3b23"],["static/images/blog/dau-5.png","ec30b3b31c32946342ed124710ff471b"],["static/images/blog/dau-6.png","8fd1944bc4e28e2646c26073e1b30ae4"],["static/images/blog/dau-7.png","0d2b9a48709531625d5d79a358ae864c"],["static/images/blog/dau-8.png","0524578c76d20340483ed005fc32b1f9"],["static/images/blog/dau-9.png","bd8a2f0780c66830b68341c8f99b07e5"],["static/images/blog/devtron.png","51593ee13d3fcf95b1d2d72b11174080"],["static/images/blog/docs-analytics.png","d07d6aaade99411c4efbabaadc828f4e"],["static/images/blog/docs-search.png","c8f7f168523ee77b85562a6fbe416d65"],["static/images/blog/electron-apps.png","13437261c3caeaac6d0354a3e8aa16b5"],["static/images/blog/electron-hosting-cost.png","9518fb09ccbbd7e981377fdbf41da5d6"],["static/images/blog/environments.png","64ddda3a7f372189d43f5c037c97edf6"],["static/images/blog/github-oauth/authentication-settings.png","3683e77c7574a6f75815f36b534ab266"],["static/images/blog/github-oauth/authorize.png","06e635fc957624db83c1cffb31886cad"],["static/images/blog/github-oauth/request.png","feb0c70094fcba44adf3286aea212fbb"],["static/images/blog/github-oauth/response.png","aa50d88ca55f2de06272d32e64bd6c1a"],["static/images/blog/github-oauth/timeline.png","2a6bd9d0b52ece02007dbb22fc593d50"],["static/images/blog/graphql.png","e23e284f0d91f296a92d9ed6803f4a14"],["static/images/blog/har.png","ceaa67470e6a6780f5c614db1cefc687"],["static/images/blog/history.png","587d61b289e004f61143b473bff9d4f9"],["static/images/blog/insomnia-grid.png","62badc7660c80b1e40afac18503af234"],["static/images/blog/material-theme.png","9597e560f0c7f748883e3094b9747a04"],["static/images/blog/mrr-10.png","b3c5d17e279a551bdc6121da356ef465"],["static/images/blog/mrr-11.png","95cd3ec0baa39fc7e7877e6203ef7379"],["static/images/blog/mrr-12.png","26a4f9931febff3c6bd1de0c8309fc30"],["static/images/blog/mrr-13.png","43998f0d3546c1df7cdbdaa4aae8cbd4"],["static/images/blog/mrr-14.png","d8ee6ad0055e5bb6382d8eb296f2322a"],["static/images/blog/mrr-15.png","23c19833252caee694e6a5a6ad8a6864"],["static/images/blog/mrr-16.png","c8e99f1bf70ed4dfbdea5685200ce13b"],["static/images/blog/mrr-17.png","66e9886705f54c9e543240ec526315bd"],["static/images/blog/mrr-18.png","4b1ab26b93d11d9e69581f5b35ef5f3f"],["static/images/blog/mrr-6.png","28587416ce2529e4f1f65a228265f42d"],["static/images/blog/mrr-7.png","b5be0aed6853ca8bf4a53351e1aaca19"],["static/images/blog/mrr-8.png","02551d227791967193be014d46fcc387"],["static/images/blog/mrr-9.png","912d961f28ab566b1d7440b9d758cbbb"],["static/images/blog/multipart.png","d5cde332981417ccf8c2c0f24b837220"],["static/images/blog/pdf-preview.png","c2ebab81f626c14cb6cb62afc7e977bd"],["static/images/blog/premium-themes.png","e55f6c39246ef905c5f893d0e90392cb"],["static/images/blog/steps-8.png","371c67ad0a54296e6b92aa88ec491b4b"],["static/images/blog/switch-workspace.png","5167784dad23fabaa5ac64808388a79c"],["static/images/blog/sync-menu.png","1b39a6ec4b977b3f23a8e6a4c48c9dd8"],["static/images/blog/themes.png","39f99a59853ab8790515cbf7646be69d"],["static/images/blog/time-8.png","2822ea1cf19ee19a25d6c8f378e00c34"],["static/images/blog/twitter-oauth.png","f9121dee03f0c255be0fead40af98f36"],["static/images/blog/unix-sockets.png","6c3c0e423027ad4169e978bdbc7a1fbc"],["static/images/blog/version-5/autocomplete.gif","51a12634e829fa155cc98f71e556dc9a"],["static/images/blog/version-5/curl.png","9040d2f3ee3379236e022efb592613e8"],["static/images/blog/version-5/dropbox.gif","3a1cda461b6c64ab1c78994cdabfeee9"],["static/images/blog/version-5/render-errors.png","2496c27ed71b714f355bfe7f521ccc98"],["static/images/blog/version-5/sort.gif","750280062c4840d16d3b0ece6ddc57b9"],["static/images/blog/version-5/variable-error.gif","793be52e31fb7cbd5f7ac25c032caf00"],["static/images/blog/web-traffic-four-months.png","d2391c8080822c5a571594ea6622cc9d"],["static/images/blog/xpath.png","649656426d9a50857ace0af2524536d2"],["static/images/favicon/android-chrome-192x192.png","d2fd3851c85b2c2f3b985de7339207dc"],["static/images/favicon/android-chrome-512x512.png","56fdc873c0dc805febb041fd933911a5"],["static/images/favicon/apple-touch-icon.png","49df84398685f19a3a1e30a273570daf"],["static/images/favicon/browserconfig.xml","8fcc22394a263af689fd18f7d17716af"],["static/images/favicon/favicon-16x16.png","09a47a50ae7ed4809c30b7fa6de29280"],["static/images/favicon/favicon-32x32.png","802eef70c1f617773e521a19d44c3586"],["static/images/favicon/favicon.ico","1270e59ce1fc92c258736772ef851220"],["static/images/favicon/manifest.json","a99a23ab89b049a47707624bf29dfcc4"],["static/images/favicon/mstile-150x150.png","92224c2ccf3295e95a933af6a7ac0877"],["static/images/favicon/mstile.png","0f9f4d3713d0057bcfe114951f6fe263"],["static/images/favicon/safari-pinned-tab.svg","29e7323f3058d2bc25e0addf073cb016"],["static/images/icon-small.png","3d2a420bfb04060077d8df38257c2505"],["static/images/icon-small2.png","65fb43650f8aeabd4e1f5143ac1bbe9c"],["static/images/icon-small3.png","314549b67fd27746b15be8bbfe7cb595"],["static/images/icon.png","fe5e60b28dfed38f710e26faff7c1210"],["static/images/r-c-logo.png","b7bceed15d3da98e953f801285344709"],["static/images/r-c-logoldpi.png","4519bc6b208f985d02c8c36ce7fed80c"],["static/images/screens/big/code.png","2b74a0692ef8719a3e17030b93c28116"],["static/images/screens/big/cookies.png","b96d030bbca3ae8e324a0db2c332b2d5"],["static/images/screens/big/environments.png","28c0be4da01caf7f791c0384d09c1e62"],["static/images/screens/big/themes.png","a3a90c3df56979687aa90e34051ba214"],["static/images/screens/drag.png","1aa60c2a7aa94d5d278df1cb7ef77beb"],["static/images/screens/main.png","d205e423fb5b75b589be0fcfc618174a"],["static/images/screens/responses copy.png","1a41a55518cf9a4b8be740391440eb1e"],["static/images/screens/responses.png","be8d72c3ee07efa1afe649b9c3b7629c"],["static/images/screens/sharing.jpg","efc29a43ce8c205bdb2471e04ff78bfd"],["static/images/screens/sharing.png","08252e5c41eaa47c1758e7d12fb3678f"],["static/images/screens/template.png","dd7c76cc92a18727cdf62600c8ce6de2"],["static/images/twitter-card-icon.png","fa9c2cd8f3c2e27dc8da664dde68a025"],["static/images/twitter-promo-3.png","1ee7cbdb38e203d55cf3d40f2723bb57"],["static/javascript/build/main.min.js","609e03a92ebf46e72bf4d1f71ca23470"],["static/keys/debian-public.key.asc","010bd345ec73ccfbed22315e3f83b466"],["static/manifest.json","7b7e90727e288d39ff9e6870aa41b332"],["static/robots.txt","e9d3a0cb9c192af27dff4e6bc10d3de5"],["themes/hugo-insomnia-theme/layouts/404.html","ff2a9e35469400f5b229877bed9c095a"],["themes/hugo-insomnia-theme/layouts/_default/list.html","d3c401aa88aee67ca18b18775a3a3d91"],["themes/hugo-insomnia-theme/layouts/_default/rss.xml","b0dde45e84afac5a388a88d405c601c3"],["themes/hugo-insomnia-theme/layouts/_default/single.html","78ffc50c998f08d5a316bb9c5b31f4db"],["themes/hugo-insomnia-theme/layouts/_default/terms.html","083aa44a1216ec87b0a3bc6f462d6940"],["themes/hugo-insomnia-theme/layouts/app/list.html","5e4b1e8d0615e5d7b585f18274444c26"],["themes/hugo-insomnia-theme/layouts/app/single.html","1c2a3b7c0d79f5d07b16b6bdb95852eb"],["themes/hugo-insomnia-theme/layouts/blog/single.html","c2d14deed7617f33cdff42dadc57f068"],["themes/hugo-insomnia-theme/layouts/changelog/single.html","92288f37ad0058175162c668a944917c"],["themes/hugo-insomnia-theme/layouts/offline/single.html","c2d14deed7617f33cdff42dadc57f068"],["themes/hugo-insomnia-theme/layouts/partials/author.html","d294d9077d0a6a332089ffcefcd6b778"],["themes/hugo-insomnia-theme/layouts/partials/beta-download-button.html","a6c0687b690e12fe34172da8447b51d2"],["themes/hugo-insomnia-theme/layouts/partials/changelog-details.html","db8b03c1ad2744e0ece8133f1b1a1cfa"],["themes/hugo-insomnia-theme/layouts/partials/changelog-list.html","a9f98adf242bad1b15d6df5e111c06d2"],["themes/hugo-insomnia-theme/layouts/partials/changelog-summary.html","5016d8ada04a5da69ca0f632eb6d559d"],["themes/hugo-insomnia-theme/layouts/partials/contact-button.html","c3eea33d9cdae04dea263fa33e599e81"],["themes/hugo-insomnia-theme/layouts/partials/contribution-notice.html","d92d30c1f1e3074f8f41fe3e57c4247d"],["themes/hugo-insomnia-theme/layouts/partials/download-button.html","9ccb8c4007d328b1a10c4cfedcc785ea"],["themes/hugo-insomnia-theme/layouts/partials/extra-head.html","fcd703b60df0d3f8c1352354163d7d3f"],["themes/hugo-insomnia-theme/layouts/partials/fontawesome.html","657e208fd4ab1faf50474c8dcd260cd4"],["themes/hugo-insomnia-theme/layouts/partials/footer.html","000bf3704eea5d6114c59b80b1234ad5"],["themes/hugo-insomnia-theme/layouts/partials/head.html","ab73a5e4cbf537a2f93d68c8ae2f8db4"],["themes/hugo-insomnia-theme/layouts/partials/js.html","ac5ab459480f246630f2a325f94f7a84"],["themes/hugo-insomnia-theme/layouts/partials/logo.html","d41d8cd98f00b204e9800998ecf8427e"],["themes/hugo-insomnia-theme/layouts/partials/navbar.html","7bba70eb7d7e42dc8d1176fa9f758a3b"],["themes/hugo-insomnia-theme/layouts/partials/pagination.html","c5855a790d1e684dfe77c54388db6e9f"],["themes/hugo-insomnia-theme/layouts/partials/post-list.html","9fe283287dadb3f6b74a71598422f9eb"],["themes/hugo-insomnia-theme/layouts/partials/post-series-notice.html","22712521d79aab1aff7e1487d67449bd"],["themes/hugo-insomnia-theme/layouts/partials/post-tags.html","b6848b948754646c154df1ac09cf0af2"],["themes/hugo-insomnia-theme/layouts/partials/share-links.html","a132e198156944141514450490d80f94"],["themes/hugo-insomnia-theme/layouts/partials/tags.html","58bf958283a0ec01ff12133a5780b31f"],["themes/hugo-insomnia-theme/layouts/section/blog.html","bebeee91a021a3c9851465b48869cf17"],["themes/hugo-insomnia-theme/layouts/section/changelog-json.html","3e7f8070f109c06cbb45ed9bd38045a2"],["themes/hugo-insomnia-theme/layouts/section/changelog.html","540098520f5f30ced62dcf715284bae9"],["themes/hugo-insomnia-theme/layouts/sitemap.xml","a32e0db5d3183a9b4c25a29bb0b35eff"],["themes/hugo-insomnia-theme/layouts/skinny/single.html","884210e0934899d1b5edec5f866df167"],["themes/hugo-insomnia-theme/layouts/splash/single.html","452554e83db685eeb84b81ff2f7ffef4"],["themes/hugo-insomnia-theme/layouts/taxonomy/series.html","18b13b996382cf6c35619bf27eef5918"],["themes/hugo-insomnia-theme/layouts/taxonomy/series.terms.html","b4c174290d8cb938d7509adb219d4956"],["themes/hugo-insomnia-theme/layouts/taxonomy/tag.html","ca0e83d9de83b337b8be8d0d99fc7fc2"],["themes/hugo-insomnia-theme/layouts/wide/single.html","c6eb0b48f985ce79fbbaeb77f4bda6cd"],["themes/hugo-insomnia-theme/static/css/base.css","8de8568a58e87e0b3017194fd2fe0f11"],["themes/hugo-insomnia-theme/static/css/simple-grid.min.css","8367cffd5a4aa9499f40dcb0db08e26b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







