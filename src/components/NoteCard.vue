<script lang="ts" setup>
import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
const { title, content } = defineProps(['title', 'content'])
</script>

<template>
  <li class="note w-60 my-2.5 mx-5">
    <Card>
      <CardHeader>
        <CardTitle class="font-medium">{{ title }}</CardTitle>
        <CardDescription class="pt-3 text-sm font-medium">{{ content }}</CardDescription>
      </CardHeader>
    </Card>
  </li>
</template>

<style scoped>
</style>