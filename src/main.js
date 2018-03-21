import * as session from './session';

(function () {
  // Handle download links
  const els = document.querySelectorAll('.__download-link');

  let location = null;
  let platform = null;

  if (navigator.platform.toLowerCase().indexOf('mac') !== -1) {
    platform = 'Mac';
    location = '/download/#mac';
  } else if (navigator.platform.toLowerCase().indexOf('win') !== -1) {
    platform = 'Windows';
    location = '/download/#windows';
  } else if (navigator.platform.toLowerCase().indexOf('linux') !== -1) {
    platform = 'Linux';
    location = '/download/#ubuntu';
  }

  for (let i = 0; i < els.length; i++) {
    const el = els[i];

    if (platform) {
      el.innerHTML = 'Download The App';
    }

    if (location) {
      el.onclick = function (e) {
        e.preventDefault();
        window.location = location;
      };
    }
  }
})();

(function () {
  // Style changelog list items
  const changelogListItems = document.querySelectorAll('.changelog__list-item');
  for (let i = 0; i < changelogListItems.length; i++) {
    const item = changelogListItems[i];
    const match = item.innerHTML.match(/\(PR:(\d+)(:([^)]+))?\)/);
    if (match) {
      const prNumber = match[1];
      const user = match[3] || '';
      const userString = (user ? ' by ' + user : '');
      const anchor = document.createElement('a');
      anchor.target = '_blank';
      anchor.href = 'https://github.com/getinsomnia/insomnia/pull/' + prNumber;
      anchor.innerHTML = '(#' + prNumber + userString + ')';
      item.innerHTML = item.innerHTML.replace(match[0], '');
      item.appendChild(anchor);
    }
  }
})();

(function () {
  // Add linkable anchors
  const headers = document.querySelectorAll([
    'article h1[id]',
    'article h2[id]',
    'article h3[id]'
  ].join(', '));
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i];
    h.style.cursor = 'pointer';

    h.addEventListener('click', function (e) {
      window.location.hash = '#' + e.target.getAttribute('id');
    });
  }
})();

(function () {
  // Replace images with links to images
  for (const img of document.querySelectorAll('article img')) {
    const a = document.createElement('a');
    a.href = img.getAttribute('src');
    a.target = '_blank';
    if (!img.hasAttribute('title') && img.hasAttribute('alt')) {
      img.setAttribute('title', img.getAttribute('alt'));
    }
    img.parentNode.replaceChild(a, img);
    a.appendChild(img);
  }
})();

function showRefreshUI(registration) {
  // TODO: Display a toast or refresh UI.

  // This demo creates and injects a button.

  var button = document.createElement('button');
  button.style.position = 'absolute';
  button.style.bottom = '24px';
  button.style.left = '24px';
  button.textContent = 'This site has updated. Please click here to see changes.';

  button.addEventListener('click', function() {
    if (!registration.waiting) {
      // Just to ensure registration.waiting is available before
      // calling postMessage()
      return;
    }

    button.disabled = true;

    registration.waiting.postMessage('skipWaiting');
  });

  document.body.appendChild(button);
};

function onNewServiceWorker(registration, callback) {
  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    return callback();
  }

  function listenInstalledStateChange() {
    registration.installing.addEventListener('statechange', function(event) {
      if (event.target.state === 'installed') {
        // A new service worker is available, inform the user
        callback();
      }
    });
  };

  if (registration.installing) {
    return listenInstalledStateChange();
  }

  // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,
  registration.addEventListener('updatefound', listenInstalledStateChange);
}

window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js')
  .then(function (registration) {
      // Track updates to the Service Worker.
    if (!navigator.serviceWorker.controller) {
      // The window client isn't currently controlled so it's a new service
      // worker that will activate immediately
      return;
    }

    // When the user asks to refresh the UI, we'll need to reload the window
    var preventDevToolsReloadLoop;
    navigator.serviceWorker.addEventListener('controllerchange', function(event) {
      // Ensure refresh is only called once.
      // This works around a bug in "force update on reload".
      if (preventDevToolsReloadLoop) return;
      preventDevToolsReloadLoop = true;
      console.log('Controller loaded');
      window.location.reload();
    });

    onNewServiceWorker(registration, function() {
      showRefreshUI(registration);
    });
  });
});