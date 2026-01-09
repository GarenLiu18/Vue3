<script setup lang="ts">
import type { SideProjectData } from '@/data/resumeData';

defineProps<{
  project: SideProjectData
}>();
</script>

<template>
  <div class="side-project-item">
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
.side-project-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: var(--color-background);
  border-radius: 6px;
  border: 1px dashed var(--color-border);
}

.header {
  margin-bottom: 0.5rem;
}

.name {
  font-size: 1.1rem;
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
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.8rem;
  color: var(--color-text-soft);
  background-color: var(--color-background-soft);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}
</style>

