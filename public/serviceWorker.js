self.addEventListener('push', function(event) {
  if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }

  setTimeout(() => {
    self.registration.showNotification('Title', {
      body: 'body blablabla',
      badge: '/images/icon-light.png',
      icon: '/images/icon-light.png',
      renotify: true,
      requireInteraction: true,
      silent: false,
      vibrate: [200, 100, 200],
      dir: 'ltr',
      lang: 'en-US',
    });
  }, 3000);
});
