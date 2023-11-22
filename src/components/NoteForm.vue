<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button'

interface Note {
  title: string;
  content: string;
}

const emits = defineEmits(["updateNotes"])
const { isInputActive, openInput, closeInput } = defineProps(['isInputActive', 'openInput', 'closeInput']);

const notes = ref<Note[]>([]);
const default_note: Note = { title: '', content: '' };
const note = ref<Note>({ ...default_note });

const handleSubmit = () => {
  if (isNoteValid(note.value.title, note.value.content)) {
    notes.value = [...notes.value, note.value];
    emits('updateNotes', notes.value)
    closeInput()
    resetForm()
  } else {
    console.log('Tous les champs ne sont pas renseignés')
  }
};

const isNoteValid = (title: string, content: string): boolean => {
  return title.trim() !== '' && content.trim() !== '';
};

const resetForm = () => {
  note.value = { ...default_note };
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="title" class="sr-only">Titre</label>
    <input v-if="isInputActive" id="title" name="title"
      class="pb-5 font-medium text-base outline-none w-full border-none" v-model="note.title" placeholder="Titre" />
    <label for="content" class="sr-only">Créer une note ...</label>
    <textarea id="content" name="content"
      class="font-medium text-base p-0 h-5 resize-none outline-none w-full border-none"
      :class="{ 'h-16': isInputActive }" v-model="note.content" @click="openInput"
      placeholder="Créer une note"></textarea>
    <div v-if="isInputActive" class="button-container flex justify-between items-end mt-4">
      <Button type="submit" class="mr-2">Ajouter</Button>
      <Button @click="closeInput" variant="ghost">Fermer</Button>
    </div>
  </form>
</template>

<style scoped></style>