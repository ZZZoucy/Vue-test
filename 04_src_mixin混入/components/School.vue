<template>
  <div> 
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
/*
    mixin(混合、混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步：定义混合，如：
            {
                data(){...},
                methods:{...},
                ...
            }
        第二步：使用混合，如：
            (1) 全局混入：Vue.mixin(xxx)   —— 在main.js中
            (2) 局部混入：mixins:['xxx']   —— 在需要使用的组件中
*/

    // 局部引入
    import {mixin} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name:'zafu',
                address:'杭州'
            }
        },
        mixins:[mixin]
    }
</script>
