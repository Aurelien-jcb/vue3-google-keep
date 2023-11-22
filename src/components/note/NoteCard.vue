<script setup lang="ts">
const { title, content } = defineProps<{ title: string; content: string }>();
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
  </div>
</template>
