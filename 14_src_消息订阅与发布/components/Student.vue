<template>
    <div class="student"> 
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生姓名发送给学校</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name:'Tom',
                sex:'男'
            }
        },
        // 在一个兄弟组件里用 $emit 发生事件以及数据
        methods: {
            sendStudentName(){
                // this.EventBus.$emit('hello',this.name)

                // 发布消息
                pubsub.publish('hello',666)
            }
        },
    } 
</script>

<style scoped lang="less">
    .student{
        background: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>