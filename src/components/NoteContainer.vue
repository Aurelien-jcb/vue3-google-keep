<template>
  <div class="input">
    <NoteForm :isInputActive="isInputActive" :openInput="openInput"/>
     <div class="button-container">
      <button type="button" class="close_btn" :class="{ 'display_close_button': isInputActive }"
        @click="closeInput">Fermer</button>
  </div>
  </div>
  <div class="cards">
    <NoteCard v-for="(card, index) in 3" :key="index" />
  </div>
</template>

<script setup>

import NoteCard from '@/components/NoteCard.vue';
import NoteForm from '@/components/NoteForm.vue';
import { ref } from 'vue';
const isInputActive = ref(false)

const openInput = () => {
  isInputActive.value = true;
}

const closeInput = () => {
  isInputActive.value = false;
}
</script>

<style scoped>
.input {
  width: 43%;
  min-width: 340px;
  min-height: 46px;
  margin: 0 auto;
  color: #202124;
  padding: 12px 16px 12px 16px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .20);
  display: flex;
  flex-direction: column;
}

.button_container {
  display: flex;
  justify-content: flex-end;
  align-content: end;
}

.close_btn {
  display: none;
  width: 96px;
  height: 36px;
  background: none;
  border: none;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
}

.close_btn:hover {
  background: rgba(95, 99, 104, 0.039);
}

.display_close_button {
  display: block;
}

.cards {
  display: flex;
  justify-content: start;
}
</style>