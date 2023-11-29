<script lang="ts" setup>

const { title, content } = defineProps<{ title: string; content: string }>();
</script>

<template>
  <div class="note w-60 my-2.5 mx-5 p-4 rounded-lg border shadow-sm">
    <h4 class="font-bold text-xl">{{ title }}</h4>
    <p class="pt-3 text-sm font-medium">{{ content }}</p>
  </div>
</template>