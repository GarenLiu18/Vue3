<script setup lang="ts">
import type { ProjectData } from '@/data/resumeData';

defineProps<{
  project: ProjectData
}>();
</script>

<template>
  <div class="project-item">
    <div class="header">
      <h3 class="name">
        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
          {{ project.name }}
        </a>
        <span v-else>{{ project.name }}</span>
      </h3>
    </div>
    <p class="description">{{ project.description }}</p>
    <div class="technologies">
      <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.project-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--color-background-soft);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.header {
  margin-bottom: 0.75rem;
}

.name {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
}

.project-link {
  color: var(--color-heading);
  text-decoration: none;
}

.project-link:hover {
  color: var(--color-heading);
  text-decoration: underline;
}

.description {
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.85rem;
  color: var(--color-text-soft);
  background-color: var(--color-background-mute);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
</style>

