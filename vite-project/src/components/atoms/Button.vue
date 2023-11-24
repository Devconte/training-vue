<script setup lang="ts">
  import { ButtonType } from '../../types/button';
  import { PropType } from 'vue';
 const prop = defineProps({
  color: {
    type: String as PropType<ButtonType>,
      default: 'success'
  }
 })

 function addColor(){
  switch(prop.color) {
    case 'danger':
      return 'danger'
    case 'warning':
      return 'warning'
    case 'info':
      return 'info'
    case 'success':
      return 'success'
    default: 
      return
  }
 }
</script>

<template>
  
  <button class="button" :class="addColor()">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  color: white ;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
}

.button:disabled {
  background-color: grey;
}
.danger {
  background-color: red;
}
.success {
  background-color: green ;
}

.warning {
  background-color: orange ;
}

.info {
  background-color: blue ;
}
</style>