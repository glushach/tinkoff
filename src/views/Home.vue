<template>
  <app-loader v-if="loading"/>
  <app-page title="List of claim" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    
    <request-table :requests="requests"></request-table>
    
    <teleport to="body">
      <app-modal
          v-if="modal"
          title="Create request"
          @close="modal = false">
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
  import {ref, computed, onMounted} from 'vue'
  import AppPage from "../components/ui/AppPage";
  import RequestTable from "../components/request/RequestTable";
  import RequestModal from "../components/request/RequestModal";
  import AppModal from "../components/ui/AppModal";
  import {useStore} from "vuex";
  import AppLoader from "../components/ui/AppLoader";
  
export default {
  setup() {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    
    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })
    
    const requests = computed(() => store.getters['request/requests'])
    
    return {
      modal,
      requests,
      loading
    }
  },
  components: {
    AppLoader,
    AppPage,
    RequestTable,
    AppModal,
    RequestModal
  }
}
</script>
