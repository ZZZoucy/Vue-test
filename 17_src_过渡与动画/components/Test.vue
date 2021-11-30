<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <span style="margin-left:5px">动画效果</span>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
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
    /* 动画进入时激活状态，如果 transition 加了 name，那么 v-...就要写成 name-... */
    .hello-enter-active{
        animation: move 0.5s linear;
    }
    /* 动画离开时激活状态 */
    .hello-leave-active{
        animation: move 0.5s linear reverse;
    }

    @keyframes move{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>