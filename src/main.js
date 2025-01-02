import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(
  VueGtag,
  {
    config: { id: "G-XXXXXXXXXX" }, // Replace with your GA4 
  },
  router
);

app.use(router);
app.mount("#app");
