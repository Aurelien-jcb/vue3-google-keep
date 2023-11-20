<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue';

const props = defineProps({
  isInputActive: Boolean,
  openInput: Function
})
// const title = ref('');
// const content = ref('');
const notes = ref([]);

const note = ref({
  title: '',
  content: ''
})

const handleSubmit = () => {
  notes.value = [...notes.value, note.value]
  console.log(notes.value)
  note.value = { title: '', content: '' };
}
</script>

<template>
  <form @submit.prevent="handleSubmit" >
    <label for="title">Titre</label>
    <input id="title" name="title" class="title" :class="{ 'open_title': props.isInputActive }" v-model="note.title"
      placeholder="Titre">
    <label for="content">Créer une note ...</label>
    <textarea id="content" name="content" class="content" :class="{ 'open_content': props.isInputActive }"
      v-model="note.content" @click="props.openInput" placeholder="Créer une note"></textarea>
  </form>
  <button type="submit">Ajouter</button>
</template>


<style scoped>
.title,
.content {
  outline: none;
  width: 100%;
  border: none;
}

.title {
  display: none;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 20px;
}

.content {
  font-size: 1rem;
  font-weight: 500;
  resize: none;
  padding: 0px;
  height: 60px;
}

.open_title {
  display: block;
}

.open_content {
  font-size: 0.9rem;
  font-weight: normal;
  height: 60px;
}

.content {
  height: 20px;
}
</style>