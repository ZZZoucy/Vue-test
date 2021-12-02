<template>
	<div class="container">
		<Category title="美食">
			<img slot="center" src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
			<a slot="footer" href="https://www.baidu.com">更多美食</a>
		</Category>

		<Category title="游戏">
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
			<!-- 具名插槽的第一种写法，slot="xxx" -->
			<div class="foot" slot="footer">
				<a href="https://www.baidu.com">单击游戏</a>
				<a href="https://www.baidu.com">网络游戏</a>
			</div>
		</Category>

		<Category title="电影">
			<video slot="center" controls src="https://haokan.baidu.com/v?vid=9836215223085788645&tab=recommend"></video>
			<!-- 具名插槽的第二种写法，需要写在template上，v-slot:xxx -->
			<template v-slot:footer>
				<div class="foot">
					<a href="https://www.baidu.com">经典</a>
					<a href="https://www.baidu.com">热门</a>
					<a href="https://www.baidu.com">推荐</a>
				</div>
				<h4>欢迎前来观影！</h4>
			</template>
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
	.container,.foot,.come{
		display: flex;
		justify-content: space-around;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
	h4{
		text-align: center;
	}
</style>