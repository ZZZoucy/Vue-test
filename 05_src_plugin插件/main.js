/*
  该文件是整个项目的入口文件
*/

import Vue from "vue";
import App from "./App.vue";
import plugins from "./plugins";

Vue.config.productionTip = false;

// 应用 plugins 插件
Vue.use(plugins);
new Vue({
    render: (h) => h(App),
}).$mount("#app");
