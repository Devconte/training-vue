<script setup lang="ts">
import { PropType } from 'vue';
import { Card } from '../../types/kanban';
import Button from '../atoms/Button.vue';

defineProps({
  card : {
    type: Object as PropType<Card>,
    required: true  
  }
})

defineEmits(["delete"])
</script>


<template>
  <div class="card">
    <Button color="danger" @click="$emit('delete', card.id)">X</Button>
    <p>{{ card.title }}</p>
  </div>

</template>

<style scoped> 
.card {
  border: 1px black solid;
  padding: 1rem;
  margin: 1rem;
}
</style>