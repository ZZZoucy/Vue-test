<template>
    <div class="student"> 
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑zafu事件</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'Tom',
                sex:'男'
            }
        },
        methods: {
            sendStudentName(){
                // 触发Student组件实例对象身上的zafu事件
                this.$emit('zafu',this.name)
                // this.$emit('demo')
            },
            unbind(){
                this.$off('zafu')    // 解绑一个自定义事件
                // this.$off(['zafu','demo'])   // 解绑多个自定义事件
                // this.$off()   // 解绑所有的自定义事件
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