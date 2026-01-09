<script setup lang="ts">
defineProps<{
  about: string
}>();
</script>

<template>
  <section class="about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="content">{{ about }}</p>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
  padding: 2rem 1.5rem;
}

.container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
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
