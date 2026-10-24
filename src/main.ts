import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./app.css";
import { mount } from "svelte";
import App from "./App.svelte";

// localStorage keys from the Tablory days (tablory.*) move to klikdb.* before
// anything reads them, so history, query tabs and panel state carry over.
try {
  for (const from of Object.keys(localStorage).filter((k) => k.startsWith("tablory."))) {
    const to = "klikdb." + from.slice("tablory.".length);
    const value = localStorage.getItem(from);
    if (value !== null && localStorage.getItem(to) === null) localStorage.setItem(to, value);
    localStorage.removeItem(from);
  }
} catch {
  // Storage unavailable: the app starts with empty history.
}

mount(App, { target: document.body });
