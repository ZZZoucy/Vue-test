<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件 
    import School from '../src/components/Student.vue'
    import Student from '../src/components/Student.vue'

    export default {
        name:'App',
        components:{
            School,Student
        }
    }
</script>
