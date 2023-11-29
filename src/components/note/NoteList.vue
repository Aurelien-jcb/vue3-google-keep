<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
import NoteCard from "./NoteCard.vue";
import type { Note } from "../../types/note";

const { notes } = defineProps<{ notes: Note[] }>();

const generateUniqueKey = () => {
  return uuidv4();
};
</script>

<template>
  <ul v-if="notes?.length" class="flex flex-start flex-wrap">
    <li v-for="{ title, content } in notes" :key="generateUniqueKey()">
      <NoteCard :title="title" :content="content" />
    </li>
  </ul>
</template >../../types