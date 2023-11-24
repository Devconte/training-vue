<script setup lang="ts">
import FormList from '../../components/molecules/FormList.vue';
import List from '../../components/molecules/List.vue';
import { ListKanban } from '../../types/kanban';
import { ref } from 'vue';


const lists = ref<ListKanban[]>([{id: 1, title: "Ma première liste", cards:[]}, {id: 2, title: "Ma deuxième liste", cards:[{id: 1, listId: 1, title: "première carte"}] }])

function addTolist(list: ListKanban){
  lists.value.push(list)
}

function removeList(id: number){
  const element = lists.value.findIndex((list: ListKanban) => list.id === id)
  if (element !== -1){
    lists.value.splice(element, 1)
  }
}

</script>

<template>
<div class="list">
  <List v-for="list in lists" :key="list.id" :list="list" @delete="removeList"/>
</div>
<FormList @newList="addTolist"/>

</template>

<style scoped>
.list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}</style>