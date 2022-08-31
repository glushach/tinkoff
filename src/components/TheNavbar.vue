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
        <router-link to="/auth">Exit</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {useRouter} from "vue-router";
  import {useStore} from "vuex";

  export default {
    setup() {
      const router = useRouter()
      const store = useStore()
      
      return {
        logout: () => {
          store.commit('auth/logout')
          router.push('/auth')
          }
        }
      }
    }
</script>

<style scoped>

</style>
