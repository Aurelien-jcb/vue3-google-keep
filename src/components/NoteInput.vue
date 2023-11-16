<template>
  <div class="input__container">
    <input class="input__title" :class="{ 'open__input__title': isInputActive }" v-model="title" placeholder="Titre">
    <textarea class="input__content" :class="{ 'open__input__content': isInputActive }" v-model="message"
      @click="openInput" placeholder="Créer une note"></textarea>
    <div class="button__container">
      <button class="close__button" :class="{ 'display__close__button': isInputActive }"
        @click="closeInput">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('');
const note = ref({
  title: String,
  content: String
})

const isInputActive = ref(false)

const openInput = () => {
  isInputActive.value = true;
}
const closeInput = () => {
  isInputActive.value = false;
}
console.log(isInputActive.value)

</script>

<style scoped>
.input__container {
  width: 100%;
  min-height: 46px;
  margin: 0 auto;
  color: #202124;
  padding: 12px 16px 12px 16px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .20);
  display: flex;
  flex-direction: column;
}

.input__title,
.input__content {
  outline: none;
  width: 100%;
  border: none;
}

.input__title {
  display: none;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 20px;
}

.input__content {
  font-size: 1rem;
  font-weight: 500;
  resize: none;
  padding: 0px;
  height: 60px;
}

.open__input__title {
  display: block;
}

.open__input__content {
  font-size: 0.9rem;
  font-weight: normal;
  height: 60px;
}

.input__content {
  height: 20px;
}

.button__container {
  display: flex;
  justify-content: flex-end;
  align-content: end;
}

.close__button {
  display: none;
  width: 96px;
  height: 36px;
  background: none;
  border: none;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
}
.close__button:hover {
  background:rgba(95,99,104,0.039);
}
.display__close__button {
  display: block;
}
</style>