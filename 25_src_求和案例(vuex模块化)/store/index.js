// 该文件用于创建vuex中最为核心的store

//引入Vue
import Vue from "vue";
// 引入vuex
import Vuex from "vuex";
// 引入 personOptions
import personOptions from "./person";
// 引入 countOptions
import countOptions from "./count";

// 使用vuex
Vue.use(Vuex);

// 创建 store 并 导出store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions,
    },
});
