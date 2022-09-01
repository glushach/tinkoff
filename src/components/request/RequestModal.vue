<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: fError}">
      <label for="fio">Full name</label>
      <input type="text" id="fio" v-model="fio" @blur="fBlur">
      <small v-if="fError">{{fError}}</small>
    </div>
  
    <div class="form-control" :class="{invalid: pError}">
      <label for="phone">Phone</label>
      <input type="text" id="phone" v-model="phone" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>
  
    <div class="form-control" :class="{invalid: aError}">
      <label for="amount">Amount</label>
      <input type="number" id="amount" v-model.number="amount" @blur="aBlur">
      <small v-if="aError">{{aError}}</small>
    </div>
  
    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Completed</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    
    <button class="btn primary" :disabled="isSubmitting">Create</button>
  </form>
</template>

<script>
  import {useRequestFrom} from "../../use/request-form";

  export default {
    emits: ['created'],
    setup(_, {emit}) {
      const submit = async values => {
        console.log(values)
        emit('created')
      }
      
      return {
        ...useRequestFrom(submit)
      }
    }
  }
</script>

<style scoped>

</style>
