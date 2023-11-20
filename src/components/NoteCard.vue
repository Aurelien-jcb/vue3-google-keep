<script setup>

</script>

<template>
  <div class="note">
    <p class="note__title">Titre de la note</p>
    <p class="note__content">Contenu de la note</p>
  </div>
</template>

<style scoped>
.note {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 12px 16px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  min-height: 154px;
  width: 240px;
  margin: 20px 10px;
}

.note__title {
  font-weight: 500;
}

.note__content {
  padding-top: 12px;
  font-size: 0.9rem;
  font-weight: normal;
}
</style>