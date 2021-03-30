import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import MetaInfo from 'vue-meta-info'
import './plugins/element.js';

// 公共样式
import "./assets/styles/reset.scss";
import "./assets/styles/mixin.scss";
import "./assets/styles/common.scss";

// 引入svg组件
import "@/assets/icons";

Vue.use(MetaInfo);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount("#app");
