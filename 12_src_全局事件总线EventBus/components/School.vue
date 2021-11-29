<template>
    <div class="school"> 
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'浙江农林大学',
                address:'杭州'
            }
        },
        // 在另一个兄弟组件中用 $on 接收数据
        mounted(){
            this.EventBus.$on('hello',(data)=>{
                console.log('我是School组件，我收到的学生姓名是：',data)
            })
        },
        beforeDestroy(){
            this.EventBus.$off('hello')
        }
    }
</script>

<style scoped>
    .school{
        background: skyblue;
        padding: 5px;
    }
</style>