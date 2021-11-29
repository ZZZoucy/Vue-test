/*  插件
    功能：用于增强 Vue
    本质：包含 install 方法的一个对象，install 的第一个参数是 Vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.install = function (Vue,options){
            // 1. 添加全局过滤器
            Vue.filter(...)

            // 2. 添加全局指令
            Vue.directive(...)

            // 3. 配置全局混入
            Vue.mixin(...)

            // 4. 添加实例方法
            Vue.prototype.$myMethod = function(){...}
            Vue.prototype.$myProperty = xxxx
        }
    使用插件：Vue.use()
*/

import Vue from "vue";

export default {
    install() {
        Vue.filter("mySlice", function (value) {
            return value.slice(0, 4);
        });

        // Vue.directive("fbind", {...});

        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                };
            },
        });

        Vue.prototype.hello = () => {
            console.log("Hello");
        };
    },
};
