<template>
  <div>
      <h1 v-text="msg"></h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age+1}}</h2>
  </div>
</template>

<script>
/*  配置项 props
    功能：让组件接收外部传过来的数据
        1. 传递数据： <Demo name="xxx">
        2. 接收数据：
            (1) 第一种方式(只接收)  
                props:['name']
            (2) 第二种方式(限制类型)   
                props:{ 
                    name:String 
                }
            (3) 第三种方式(类型限制+默认值的指定+必要性的限制)
                props:{
                    name:{
                        type:String,    // 类型限制
                        required:true,  // 必要性的限制
                        default:'Tom'   // 默认值的指定
                    }
                }
    备注：props是只读的，Vue底层辉监测你对props的修改，如果进行了修改，就会发出警告，
         若业务需求确实需要修改，那么请复用 props 的内容到 data 中一份，然后去修改 data 中的数据。

*/







export default {
    name:'Student',
    data() {
        return {
            msg:'我是一名浙农林的学生',
        }
    },
    // 简单声明接收
    props:['name','sex','age']    

    // 接收的同时对数据进行类型限制
    /*
    props:{
        name:String,
        sex:String,
        age:Number
    }
    */

    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    /*
    props:{
        name:{
            type:String,     // 类型限制
            required:true    // 必要性的限制
        },
        age:{
            type:Number,
            default:18       // 默认值的指定
        },
        sex:{
            type:String,
            required:false   // 必要性的限制
        }
    }
    */
}
</script>
