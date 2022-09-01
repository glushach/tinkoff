<template>
  <app-page title="List of claim">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    
    <request-table :requests="[]"></request-table>
    
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
  import {ref} from 'vue'
  import AppPage from "../components/ui/AppPage";
  import RequestTable from "../components/request/RequestTable";
  import RequestModal from "../components/request/RequestModal";
  import AppModal from "../components/ui/AppModal";
  
export default {
  setup() {
    const modal = ref(false)
    
    return {
      modal
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
