import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GA_ID }, 
  },
  router
);

app.use(router);
app.mount("#app");
