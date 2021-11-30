<template>
	<transition name="todo" appear>
		<li>
			<label>
				<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
				<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
				<!-- <input type="checkbox" v-model="todo.done"/> -->
				<span v-show="!todo.isEdit">{{todo.title}}</span>
				<input
					type="text"
					v-show="todo.isEdit"
					:value="todo.title"
					@blur="handleBlur(todo,$event)"
					ref="inputTitle"
				/>
			</label>
			<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
			<button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
		</li>
	</transition>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'MyItem',
		// 声明接收todo
		props:['todo'],
		methods: {
			// 勾选or取消勾选
			handleCheck(id){
				// 通知App组件将对应的todo对象的done值取反
				// this.checkTodo(id)
				this.EventBus.$emit('checkTodo',id)
			},
			// 删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					// 通知App组件将对应的todo对象删除
					// this.deleteTodo(id)
					// this.EventBus.$emit('deleteTodo',id)
					pubsub.publish('deleteTodo',id)
				}
			},
			handleEdit(todo){
				if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
					todo.isEdit = true
				}else{
					this.$set(todo,'isEdit',true)
				}
				// $nextTick 所指定的回调函数会在 DOM 更新完毕之后再去执行
				this.$nextTick(function(){
					this.$refs.inputTitle.focus()
				})
			},
			// 失去焦点的时候执行回调（真正执行修改逻辑）
			handleBlur(todo,e){
				todo.isEdit = false
				if(!e.target.value.trim()) return alert('输入不能为空！')
				this.EventBus.$emit('updateTodo',todo.id,e.target.value)
			}
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}

	/* 动画进入时激活状态，如果 transition 加了 name，那么 v-...就要写成 name-... */
    .todo-enter-active{
        animation: move 0.5s linear;
    }
    /* 动画离开时激活状态 */
    .todo-leave-active{
        animation: move 0.5s linear reverse;
    }

    @keyframes move{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>