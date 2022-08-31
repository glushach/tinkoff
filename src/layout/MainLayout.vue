<template>
  <the-navbar></the-navbar>
  <div class="container with-nav pt-1">
    <div class="card">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TheNavbar from "../components/TheNavbar";
  export default {
    components: {TheNavbar}
  }
</script>

<style scoped>

</style>
