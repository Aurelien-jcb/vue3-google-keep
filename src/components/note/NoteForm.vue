<script setup lang="ts">
import { nextTick, ref } from "vue";

import type { Note } from "../../types/note";

const emit = defineEmits<{ submit: [note: Note] }>();

const noteDefaultValue: Note = { title: "", content: "" };

const fakeInput = ref<HTMLButtonElement>();
const textarea = ref<HTMLTextAreaElement>();
const isFormOpen = ref(false);
const note = ref({ ...noteDefaultValue });

const handleSubmit = async () => {
  emit("submit", note.value);
  resetForm();

  isFormOpen.value = false;

  await nextTick();

  fakeInput.value?.focus();
};

const openForm = async () => {
  isFormOpen.value = true;

  await nextTick();

  textarea.value?.focus();
};

const closeForm = async () => {
  isFormOpen.value = false;

  await nextTick();

  fakeInput.value?.focus();
};

const resetForm = () => {
  note.value = { ...noteDefaultValue };
};
</script>

<template>
  <button v-if="!isFormOpen" ref="fakeInput" type="button" @click="openForm">
    Creer un note...
  </button>

  <form v-else="isFormOpen" @submit.prevent="handleSubmit">
    <div>
      <label for="title-input">Titre</label>
      <input id="title-input" placeholder="Titre" v-model="note.title" />
    </div>

    <div>
      <label for="content-input">Contenu</label>
      <textarea
        id="content-input"
        placeholder="Créer une note..."
        v-model="note.content"
        ref="textarea"
      ></textarea>
    </div>

    <button type="button" @click="closeForm">Fermer</button>
    <button type="submit">Créer la note</button>
  </form>
</template>
