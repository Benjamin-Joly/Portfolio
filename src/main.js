import App from "./App.svelte";
const app = new App({
  target: document.body,
  title: (document.title = "Benjamin Joly | front-end developer"),
  props: {},
});

export default app;
