<template>
  <span :class="['badge', className]">{{text}}</span>
</template>

<script>
  import {ref, watch} from 'vue'
  
  export default {
    props: {
      type: {
        type: String,
        required: true,
        validator(value) {
          return ['active', 'cancelled', 'done', 'pending'].includes(value)
        }
      }
    },
    
    
    setup(props) {
      const classesMap = {
        active: 'primary',
        cancelled: 'danger',
        done: 'primary',
        pending: 'warning'
      }
      
      const textMap = {
        active: 'Active',
        cancelled: 'Canceled',
        done: 'Completed',
        pending: 'Pending'
      }
      
      watch(props, val => {
        classesMap.value = classesMap[val.type]
        text.value = textMap[val.type]
      })
      
      const className = ref(classesMap[props.type])
      const text = ref(classesMap[props.type])
      
      
      return {
        className,
        text
      }
    }
  }
</script>

<style scoped>

</style>
