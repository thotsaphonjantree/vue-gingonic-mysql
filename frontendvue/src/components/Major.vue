<template>
  <div>
    <h1 align="center">Majors</h1>
    <table border="1" align="center" width='50%'>
      <tr>
        <th>No.</th>
        <th>Major</th>
      </tr>
      <tr v-for="(major,index) in majors" :key="index">
        <td>{{index+1}}</td>
        <td>{{major.major_name}}</td>
      </tr>
    </table>
  </div>
</template> 

<script>
import api from "../api";
export default {
  data() {
    return {
      majors: []
    };
  },
  methods: {
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