<template>
  <nav class="navbar">
    <h3>Online Bank</h3>
    
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Request</router-link>
      </li>
      <li>
        <router-link to="/">Help</router-link>
      </li>
      <li>
        <router-link to="/">Messages</router-link>
      </li>
      <li>
        <router-link to="/">Exit</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "TheNavbar"
  }
</script>

<style scoped>

</style>
