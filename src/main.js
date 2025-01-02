import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(VueGtag, {
  config: { id: import.meta.env.VITE_GA_ID }, // Replace with your GA4
});

app.mount("#app");
