<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Request" v-else-if="request">
    <p><strong>Name owner</strong>: {{request.fio}}</p>
    <p><strong>Phone</strong>: {{request.phone}}</p>
    <p><strong>Amount</strong>: {{currency(request.amount)}}</p>
    <p><strong>Status</strong>: <app-status :type="request.status" /></p>
  </app-page>
  <h3 v-else class="text-center text-white">
    Requests with ID = {{id}} were not found
  </h3>
</template>

<script>
  import {ref, onMounted} from 'vue'
  import {useRoute} from 'vue-router'
  import AppPage from "../components/ui/AppPage";
  import {useStore} from "vuex";
  import AppLoader from "../components/ui/AppLoader";
  import AppStatus from "../components/ui/AppStatus";
  import {currency} from "../utils/currency";
  
  export default {
    setup() {
      const loading = ref(true)
      const route = useRoute()
      const store = useStore()
      const request = ref({})
      
      onMounted(async () => {
        loading.value = true
        request.value = await store.dispatch('request/loadOne', route.params.id)
        loading.value = false
      })

      console.log(route.params.id)
      
      return {
        loading,
        request,
        id: route.params.id,
        currency
      }
    },
    components: {
      AppPage,
      AppLoader,
      AppStatus
    }
  }
</script>

<style scoped>

</style>
