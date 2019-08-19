<template>
  <div id="app">
    <h1>Vue + Gin + MySQL</h1>
    <table>
      <tbody>
        <tr>
          <td>
            <router-link to="/">Home</router-link>
          </td>
          <td>
            <router-link to="/Major">Major</router-link>
          </td>
          <td>
            <router-link to="/Student">Student</router-link>
          </td>
          <td>
            <router-link to="/PostStudent">Add Student</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <router-view />
  </div>
</template>
<script>
export default {};
</script>