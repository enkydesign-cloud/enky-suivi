/* Enky Suivi — service worker minimal.
   Rend l'appli installable (Chrome exige un service worker) sans mettre en cache :
   les mises à jour publiées sur GitHub sont donc toujours reçues tout de suite. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r));
});
