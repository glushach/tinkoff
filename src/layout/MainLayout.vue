<template>
  <the-navbar></the-navbar>
  <div class="container with-nav pt-1">
    <div>
      <app-message/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TheNavbar from "../components/TheNavbar";
  import AppMessage from "../components/ui/AppMessage";
  export default {
    components: {
      TheNavbar,
      AppMessage
    }
  }
</script>

<style scoped>

</style>
