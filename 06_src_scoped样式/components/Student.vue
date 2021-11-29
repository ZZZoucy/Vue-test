<template>
    <div class="demo"> 
        <h2 class="name">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
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
    } 
</script>

<style scoped lang="less">
/*  scoped 样式
    备注：所有组件的 css 最后都会汇总到一个文件里，如果有组件的样式名冲突，就会导致样式出问题。
    作用：让样式局部生效，防止冲突
    写法：<style scoped>
*/
    .demo{
        background: pink;
        .name{
            font-size: 40px;
        }
    }
</style>