<script setup lang="ts">
  defineProps({
  modelValue: String,
  type: {
    type: String
  },
  placeholder: {
    type: String
  }

});

defineEmits(['update:modelValue']);
</script>

<template>
  <!-- Ici on doit définir comment faire fonctionner le v model (voir la doc)
  GitHub Copilot: This code is a part of a Vue.js component that uses the `v-model` directive for two-way data binding.

Here's a breakdown:

- `<input :value="modelValue"`: This binds the `value` attribute of the input element to the `modelValue` prop of the component. This means that the value of the input field in the UI will reflect the value of `modelValue`.

- `@input="$emit('update:modelValue',($event.target as HTMLInputElement).value)"`: This listens for the `input` event, which is fired every time the user changes the value of the input field. When the `input` event is fired, it emits an `update:modelValue` event with the new value of the input field. The `($event.target as HTMLInputElement).value` part is TypeScript syntax that gets the value of the input field from the event object.

The `update:modelValue` event is part of Vue's `v-model` syntax. When you use `v-model="someProp"` in a parent component, Vue translates it to `:someProp="someProp" @update:someProp="val => someProp = val"`. So emitting an `update:modelValue` event will update the `modelValue` prop in the parent component, achieving two-way data binding. -->
  <input :value="modelValue"
  @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)" 
  :placeholder="placeholder" :type="type">
</template>

<style scoped>
</style>