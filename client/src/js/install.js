const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered events
  window.deferredPrompt = event;
  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // Show prompt
  promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  // TODO: Implement a click event handler on the `butInstall` element
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
  window.deferredPrompt = null;
});
