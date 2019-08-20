<template>
  <div>
    <center>
    <h1 >Add Student</h1>
    <form @submit.prevent="submit">
      <table width="50%" >
        <tr><td>Student ID</td><td><input v-model="student_code" size="80"/></td></tr>
        <tr><td>First Name</td><td> <input v-model="first_name" size="80"/></td></tr>
        <tr><td>Last Name</td><td> <input v-model="last_name" size="80"/></td></tr>
        <tr><td>Major</td><td>
          <select v-model="major_id">
          <option disabled value>Please select one</option>
          <option
            v-for="(major,index) in majors"
            :key="index"
            v-bind:value="major.major_id"
          >{{major.major_name}}</option>
        </select></td></tr>
        <tr><td colspan="2" align="center"><button type="submit">Add</button></td></tr>
      </table>
    </form>
    </center>

  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      student_code: "",
      first_name: "",
      last_name: "",
      major_id: "",
      majors: []
    };
  },
  methods: {
    submit() {
      console.log(this.major_id);
      api.postStudent(
        this.student_code,
        this.first_name,
        this.last_name,
        this.major_id
      );
    },
    getAllMajor() {
      api.getAllMajor().then(result => {
        console.log(result);
        this.majors = result;
      });
    }
  },
  mounted() {
    this.getAllMajor();
  }
};
</script>