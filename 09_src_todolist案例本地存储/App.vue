<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue'
    import MyList from './components/MyList.vue'
    import MyFooter from './components/MyFooter.vue'

    export default {
        name:'App',
        data(){
            return{
                // 为什么要 ||[] 因为第一次加载的时候什么数据都没有，是 null，所以后面统计数据条数的时候会出错
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods:{
            // 添加一个 todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            // 勾选 or 取消勾选一个 todo
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if(todo.id === id) todo.done = !todo.done;
                })
            },
            // 删除一个 todo
            deleteTodo(id){
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            },
            // 全选 or 全不选
            checkAllTodo(done){
                this.todos.forEach((todo)=>{
                    todo.done = done
                })
            },
            // 清除所有已经完成的 todo
            clearAllTodo(){
                this.todos = this.todos.filter((todo)=>{
                    return !todo.done
                })
            }
        },
        watch:{
            todos:{ 
                deep:true,
                handler(newValue){
                    localStorage.setItem('todos',JSON.stringify(newValue))
                }
            }
        },
        components: { MyHeader,MyList,MyFooter },
    }
</script>

<style>
    /*base*/
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>