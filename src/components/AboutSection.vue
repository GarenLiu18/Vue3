<script setup lang="ts">
defineProps<{
  about: string
}>();
</script>

<template>
  <section class="about-section">
    <h2 class="section-title">About Me</h2>
    <p class="content">{{ about }}</p>
  </section>
</template>

<style scoped>
.about-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  color: var(--color-heading);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.content {
  line-height: 1.6;
  color: var(--color-text);
  white-space: pre-line;
}
</style>
