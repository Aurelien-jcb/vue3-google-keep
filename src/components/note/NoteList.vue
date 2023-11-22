<script setup lang="ts">
import NoteCard from "./NoteCard.vue";

import type { Note } from "../../types/note";

const { notes } = defineProps<{ notes: Note[] }>();
</script>

<template>
  <ul v-if="notes?.length">
    <li v-for="{ title, content } in notes" :key="title">
      <NoteCard :title="title" :content="content" />
    </li>
  </ul>
</template>
