<script setup lang="ts">
import {ListKanban, Card} from "../../types/kanban"
import { PropType } from "vue";
import CardVue from "./Card.vue"
import FormCard from '../molecules/FormCard.vue'
import Button from "../atoms/Button.vue";
/** 
 * 
 * Cette manière de définir les props peut être remplacer comme suit:
 *  const prop = defineProps({title: string, card: Array})
 * Si pas besoin d'utiliser le type de la props dans le script pas besoin de le stocker dans une variable
*/
const prop = defineProps({
    list:  {
        type: Object as PropType<ListKanban>,
        required: true
    }
}) 

function addCard(title: string){
    const card: Card = {
        id: prop.list.cards!.length +1, // typiquement typescript ne peux rien faire pour nous
        listId: prop.list.id,
        title
    }
    prop.list.cards?.push(card) // à verifier si c'est conseillé de faire ça
}

defineEmits(["delete"])

function deleteCard(id: number){
    const element = prop.list.cards!.findIndex((card: Card)=> card.id === id) // <== ! pour dire que cards ne peut pas être null car sinon le bouton apparait pas
    if (element !== -1){
        prop.list.cards?.splice(element, 1)
    }
}

</script>

<template>
    <div class="list-kanban">
        <h2>{{ list.title }}</h2>
         <CardVue v-for="card in list.cards" :card="card" @delete="deleteCard" />
         <Button color="danger" @click="$emit('delete', list.id)">X</Button>
         <FormCard @newCard="addCard"/>
    </div>
</template>

<style scoped>
.list-kanban {
 height: 20rem;
 width: 20rem;
 border: 2px black solid;
}

</style>