<script setup lang="ts">
import { ref } from "vue";
import NoteForm from "@/components/note/NoteForm.vue";
import NoteList from "@/components/note/NoteList.vue";
import Toaster from '@/components/ui/toast/Toaster.vue'

import type { Note } from "@/types/note";

const notes = ref<Note[]>([]);
const handleSubmit = (note: Note) => {
  notes.value.unshift(note);
};
</script>

<template>
  <main>
    <NoteForm @submit="handleSubmit" />
    <NoteList :notes="notes" />
  </main>
  <Toaster/>
</template>