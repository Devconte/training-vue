<script setup lang="ts">
import { ref } from 'vue';
import ButtonVue from '../../components/atoms/Button.vue';
import Input from '../../components/atoms/Input.vue';

const listTitle = ref('')
const emit = defineEmits(["newList"]) // <== le nom de l'évenement est défini ici
function sendList(){
  emit('newList', {title: listTitle.value, cards: []}) // <== je renvoi forcément avec un title et une liste de cards
  listTitle.value= ""
}

</script>

<template>
  <form @submit.prevent="sendList">
    <Input v-model="listTitle" />
    <ButtonVue type="submit" :disabled="listTitle===''" >Ajouter une liste</ButtonVue>
  </form>
</template>

<style scoped>
</style>
