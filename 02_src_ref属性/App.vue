<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDOM" ref="btn">点我输出DOM元素</button>
      <School ref="sch"/>
  </div>
</template>

<script>
/* ref 总结
    1. 被用来给元素(h1\button)或子组件(School) 注册引用信息（id的替代者）
    2. 应用在 html 元素上的是真实 DOM，应用在 组件 上的是组件实例对象（vc）
    3. 使用方式：
        标识： <标签 ref="xxx"> </标签>
        获取： this.$refs.xxx
*/


    import School from './components/School.vue'

    export default {
        name:'App',
        data() {
            return {
                msg:'欢迎学习 Vue'
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title)   // 真实 DOM 元素
                console.log(this.$refs.btn)     // 真实 DOM 元素
                console.log(this.$refs.sch)     // School 组件的实例对象（vc）
            }
        },
        components: { School },
    }
</script>

<style>

</style>