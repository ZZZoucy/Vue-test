<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <span style="margin-left:5px">第三方集成动画库</span>
        <transition 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow" key="1">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    // Vue 的一个第三方动画集成库
    import 'animate.css'
    export default {
        name:'Test',
        data(){
            return{
                isShow:true,
            }
        }
    }
</script>

<style scoped>
    h1{
        background: orange;
    }
</style>