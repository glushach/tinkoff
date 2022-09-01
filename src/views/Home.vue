<template>
  <app-page title="List of claim">
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
  import {ref, computed} from 'vue'
  import AppPage from "../components/ui/AppPage";
  import RequestTable from "../components/request/RequestTable";
  import RequestModal from "../components/request/RequestModal";
  import AppModal from "../components/ui/AppModal";
  import {useStore} from "vuex";
  
export default {
  setup() {
    const store = useStore()
    const modal = ref(false)
    
    const requests = computed(() => store.getters['request/requests'])
    
    return {
      modal,
      requests
    }
  },
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal
  }
}
</script>
