<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useQuery } from '@tanstack/vue-query'
import NoteForm from "@/components/note/NoteForm.vue";
import NoteList from "@/components/note/NoteList.vue";
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useStore } from "vuex";
import type { Note, Post } from "@/types/index";

const notes = ref<Note[]>([]);
const store = useStore()
// const handleSubmit = (note: Note) => {
//   notes.value.unshift(note);
// };

const fetcher = async (): Promise<Post[]> =>
  await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json(),
  );

const { isPending, isError, isFetching, data, error, refetch, isSuccess} = useQuery({
  queryKey: ['posts'],
  queryFn: fetcher,
});

if(isSuccess) {
  console.log("success",data?.value)
  console.log("success",data?.value)
}
</script>

<template>
  <main>
    <!-- <NoteForm @submit="handleSubmit" /> -->
    <NoteList :notes="notes" />
  </main>
  <Toaster />
</template>@/types