<template>
  <the-navbar></the-navbar>
  <the-sidebar/>
  <div class="container with-nav pt-1">
    <div>
      <app-message/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TheNavbar from "../components/TheNavbar";
  import TheSidebar from "../components/TheSidebar";
  import AppMessage from "../components/ui/AppMessage";
  export default {
    components: {
      TheNavbar,
      AppMessage,
      TheSidebar
    }
  }
</script>

<style scoped>

</style>
