<script setup lang="ts">
import type { ExperienceData } from '@/data/resumeData';

defineProps<{
  experience: ExperienceData
}>();
</script>

<template>
  <div class="experience-item">
    <div class="header">
      <h3 class="title">{{ experience.title }}</h3>
      <span class="company">{{ experience.company }}</span>
      <span class="period">{{ experience.period }}</span>
    </div>
    <ul class="description">
      <li v-for="(item, index) in experience.description" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.experience-item {
  margin-bottom: 2rem;
  border-left: 4px solid var(--color-border);
  padding-left: 1rem;
}

.header {
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-heading);
  margin: 0;
}

.company {
  font-weight: 500;
  margin-right: 1rem;
  color: var(--color-text);
}

.period {
  font-style: italic;
  color: var(--color-text-soft);
}

.description {
  margin: 0.5rem 0 0 1.2rem;
  padding: 0;
  color: var(--color-text);
}

.description li {
  margin-bottom: 0.25rem;
}
</style>
