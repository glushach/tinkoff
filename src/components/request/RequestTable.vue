<template>
  <h4 v-if="requests.length === 0" class="text-center">Request are not yet</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Full name</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) in requests" :key="r.id">
        <td>{{idx + 1}}</td>
        <td>{{r.fio}}</td>
        <td>{{r.phone}}</td>
        <td>{{currency(r.amount)}}</td>
        <td><AppStatus :type="r.status"/></td>
        
        <td>
          <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}">
            <button class="btn" @click="navigate">Send</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import {currency} from "../../utils/currency";
  import AppStatus from "../ui/AppStatus";

  export default {
    props: ['requests'],
    setup() {
      return {currency}
    },
    components: {AppStatus}
  }
</script>

<style scoped>

</style>
