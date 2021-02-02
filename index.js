import App from "./App.svelte";

const app = new App({
  props: {
    name: "you",
    url: "./data.json"
  },
  target: document.body
});

export default app;
