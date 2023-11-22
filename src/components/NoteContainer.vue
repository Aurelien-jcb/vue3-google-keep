<script setup lang="ts">
import NoteForm from '@/components/NoteForm.vue';
import NoteCard from '@/components/NoteCard.vue';

import { ref } from 'vue';

interface Note {
  title: string;
  content: string;
}

const isInputActive = ref(false);
const parentNotes = ref<Note[]>([]);

const openInput = () => {
  isInputActive.value = true;
};

const closeInput = () => {
  isInputActive.value = false;
};

const updateNotes = (newNotes: Note[]) => {
  parentNotes.value = newNotes.reverse();
};
</script>

<template>
  <div class="w-full  md:w-3/6 lg:w-3/6 text-primary rounded-md shadow-lg flex flex-col outline-none p-4 mx-auto my-8">
    <NoteForm :isInputActive="isInputActive" @updateNotes="updateNotes" :openInput="openInput" :closeInput="closeInput" />
  </div>
  <ul class="flex flex-start flex-wrap">
    <NoteCard v-for="(card, index) in parentNotes" :key="index" :title="card.title" :content="card.content" />
  </ul>
</template>

<style scoped>
</style>