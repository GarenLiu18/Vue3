<script setup lang="ts">
defineProps<{
  name: string
}>();
</script>

<template>
  <span class="skill-item">
    {{ name }}
  </span>
</template>

<style scoped>
.skill-item {
  display: inline-block;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  font-size: 0.9rem;
}
</style>
