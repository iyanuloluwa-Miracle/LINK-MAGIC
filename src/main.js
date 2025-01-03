import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);

app.use(VueGtag, {
  config: { id: import.meta.env.VITE_GA_ID },
});
app.use(pinia);

app.mount("#app");
