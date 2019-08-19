<template>
  <div>
    <h1 align="center">Students</h1>
    <table border="1" align="center" width="50%">
      <tr>
        <th>No.</th>
        <th>Student ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Major</th>
      </tr>
      <tr v-for="(student,index) in students" :key="index">
        <td>{{index+1}}</td>
        <td>{{student.student_code}}</td>
        <td>{{student.first_name}}</td>
        <td>{{student.last_name}}</td>
        <td>{{student.Major.major_name}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      students: []
    };
  },
  methods: {
    getAllStudent() {
      api.getAllStudent().then(result => {
        console.log(result);
        this.students = result;
      });
    }
  },
  mounted() {
    this.getAllStudent();
  }
};
</script>