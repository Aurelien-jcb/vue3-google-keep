<template>
  <div class="input__container">
    <input type="text" name="note" id="note" placeholder="Créer une note...">
  </div>
</template>

<script setup>

</script>

<style scoped>
.input__container input {
  width: 100%;
  min-height: 46px;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 auto;
  color: #202124;
  padding: 12px 16px 12px 16px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .20);
}
</style>