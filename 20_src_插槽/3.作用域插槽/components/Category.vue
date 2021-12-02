<template>
    <div class="category"> 
        <h3>{{title}}分类</h3>
        <!-- 作用域插槽 -->
        <slot :games="games"></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data(){
			return{
				games:['王者荣耀','穿越火线','森林冰火人','超级玛丽'],
			}
		},
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background: orange;
    }
</style>