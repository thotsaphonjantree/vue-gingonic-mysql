<template>
  <div>
    <h1 align="center">Add Student</h1>

    <form @submit.prevent="submit">
      <input v-model="student_code" placeholder="student_code" />
      <input v-model="first_name" placeholder="first_name" />
      <input v-model="last_name" placeholder="last_name" />
      <input v-model="major_id" placeholder="major_id" />
      <button type="submit">Add</button>
    </form>

  </div>
</template>

<script>
import api from "../api";

export default {
    data(){
        return{
                student_code:'',
                first_name:'',
                last_name:'',
                major_id:'',
        }

    },
    methods: {
        submit(){
            console.log(this.student_code)
            api.postStudent(this.student_code,this.first_name,this.last_name,parseInt(this.major_id))
        },

    },
};
</script>