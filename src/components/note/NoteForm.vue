<script setup lang="ts">
import { nextTick, ref } from "vue";
import type { Note } from "@/types/note";
import { Button } from "@/components/ui/button";
import store from '@/store/index'

const emit = defineEmits<{ submit: [note: Note] }>();
const noteDefaultValue: Note = { title: "", content: "" };
const fakeInput = ref<HTMLButtonElement>();
const textarea = ref<HTMLTextAreaElement>();
const isFormOpen = ref(false);
const note = ref({ ...noteDefaultValue });

const handleSubmit = async () => {
  if (isNoteValid(note.value.title, note.value.content)) {
    emit("submit", note.value);
    store.dispatch("showToast", { message: "Note créée avec succès", success: true });
    resetForm();
    isFormOpen.value = false;
    await nextTick();
    fakeInput.value?.focus();
  } else {
    store.dispatch("showToast", { message: "Veuillez renseigner tous les champs afin de créer une nouvelle note.", success: false });
  }
};

const isNoteValid = (title: string, content: string) => {
  return !!(title?.trim() && content.trim());
};

const openForm = async () => {
  isFormOpen.value = true;
  await nextTick()
  textarea.value?.focus();
};

const closeForm = async () => {
  isFormOpen.value = false;
  resetForm();
  await nextTick();
  fakeInput.value?.focus();
};

const resetForm = () => {
  note.value = { ...noteDefaultValue };
};


</script>

<template>
  <div class="w-full md:w-3/6 lg:w-3/6 text-primary rounded-md shadow-lg flex flex-col p-4 mx-auto my-8">

    <button v-if="!isFormOpen" ref="fakeInput" type="button" variant="ghost"
      class="text-left justify-start font-light color- px-1 text-base" label="Créer une note ..." @click="openForm">Créer
      une note ...
    </button>

    <form v-else="isFormOpen" @submit.prevent="handleSubmit">
      <div>
        <label for="title-input" class="sr-only">Titre</label>
        <input id="title-input" class="pb-5 font-medium text-base outline-none w-full border-none" type="text"
          placeholder="Titre" v-model="note.title" />
      </div>

      <div>
        <label for="content-input" class="sr-only">Contenu</label>
        <textarea class="font-medium text-base p-0 h-16 resize-none outline-none w-full border-none" id="content-input"
          placeholder="Créer une note..." v-model="note.content" ref="textarea"></textarea>
      </div>

      <div class="button-container flex justify-between items-end mt-4">
        <Button type="submit" class="mr-2" label="Ajouter" />
        <Button @click="closeForm" label="Fermer" variant="ghost" />
      </div>
    </form>
  </div>
</template>