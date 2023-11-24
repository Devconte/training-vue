<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import ButtonVue from '../atoms/Button.vue';
import Input from '../atoms/Input.vue';

const cardTitle = ref('')
const emit = defineEmits(["newCard"])

function addCard(){
  emit('newCard',  cardTitle.value )
  cardTitle.value= ""
}

</script>

<template>
  <form @submit.prevent="addCard">
<Input v-model="cardTitle" />
<ButtonVue type="submit" color="success" :disabled="cardTitle === ''">Ajouter une carte</ButtonVue>
  </form>


</template>


<style scoped>

</style>