/*
  该文件是整个项目的入口文件
*/

// 引入 Vue
import Vue from "vue";
// 引入 App 组件，它是所有组件的、父组件
import App from "./App.vue";
// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

/*
  关于不同版本的 Vue：
    1. vue.js 与 vue.runtime.xxx.js 的区别：
      (1) vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器
      (2) vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能，不包含模版解析器

    2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要
       使用 render 函数收到的 createElement 函数区指定具体内容
*/

// 创建 Vue 实例对象 —— vm
new Vue({
    // render(createElement){ return createElement('h1','你好啊')}
    render: (h) => h(App),
}).$mount("#app");
