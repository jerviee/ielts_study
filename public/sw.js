const CACHE_NAME = ielts-study-v1;
const urlsToCache = [
  /,
  /index.html,
  /manifest.json
];

self.addEventListener(install, (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log(Opened
