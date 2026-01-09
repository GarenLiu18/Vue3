<script setup lang="ts">
defineProps<{
  year: number;
  copyright: string;
}>();
</script>

<template>
  <footer class="footer-section">
    <p>&copy; {{ year }} {{ copyright }}</p>
  </footer>
</template>

<style scoped>
.footer-section {
  text-align: center;
  padding: 2rem 0;
  margin-top: 0;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-soft);
  font-size: 0.9rem;
  scroll-snap-align: start;
}
</style>
