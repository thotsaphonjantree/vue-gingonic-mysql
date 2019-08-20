<template>
  <div>
    <center>
      <h1>Edit Student</h1>
      <table width="50%">
        <tr>
          <td>Student ID</td>
          <td>
            <input v-model="student.student_code" size="80" />
          </td>
        </tr>
        <tr>
          <td>First Name</td>
          <td>
            <input v-model="student.first_name" size="80" />
          </td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>
            <input v-model="student.last_name" size="80" />
          </td>
        </tr>
        <tr>
          <td>Major</td>
          <td>
            <select v-model="student.major_id">
              <option
                v-for="(major,index) in majors"
                :key="index"
                v-bind:value="major.major_id"
              >{{major.major_name}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <button v-on:click="submit">Edit</button>
            <button v-on:click="remove">Delete</button>
          </td>
        </tr>
      </table>
    </center>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      student: {},
      majors: []
    };
  },
  methods: {
    submit() {
      api.putStudent(
        this.$route.params.student_id,
        this.student.student_code,
        this.student.first_name,
        this.student.last_name,
        this.student.major_id
      );
    },
    remove() {
      api.deleteStudent(this.$route.params.student_id);
    },
    getStudent() {
      api.getStudent(this.$route.params.student_id).then(result => {
        this.student = result;
        console.log(this.student);
      });
    },
    getAllMajor() {
      api.getAllMajor().then(result => {
        console.log(result);
        this.majors = result;
      });
    }
  },
  mounted() {
    this.getStudent(), this.getAllMajor();
  }
};
</script>