<template>
	<div class="container">
		<Category title="美食">
			<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
		</Category>

		<Category title="游戏">
			<ul>
            	<li v-for="(g,index) in games" :key="index">{{g}}</li>
        	</ul>
		</Category>

		<Category title="电影">
			<video controls src="https://haokan.baidu.com/v?vid=9836215223085788645&tab=recommend"></video>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category.vue'
	export default {
		name:'App',
		data(){
			return{
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['王者荣耀','穿越火线','森林冰火人','超级玛丽'],
				films:['《教父》','《你好，李焕英》','《我的姐姐》','《送你一朵小红花》'],
			}
		},
		components:{ Category },
	}
</script> 

<style>
	.container{
		display: flex;
		justify-content: space-around;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>