import Vue from "vue";
import App from "./App.vue";

import AudioPlayer from "./../packages";

Vue.config.productionTip = false;

Vue.use(AudioPlayer);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
