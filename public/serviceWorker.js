// const button = document.getElementById('h2');
// console.log(button);

function showNotification(event) {
  setTimeout(() => {
    self.registration.showNotification(event.data.text(), {
      body: 'body blablabla',
      badge: '/images/icon-light.png',
      icon: '/images/icon-light.png',
      renotify: true,
      requireInteraction: true,
      silent: false,
      vibrate: [200, 100, 200],
      dir: 'ltr',
      lang: 'en-US',
      tag: 'el',
    });
  }, 10000);
}

self.addEventListener('push', function(event) {
  console.log(event);
  if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }
  showNotification(event);
  event.waitUntil(showNotification);
});
