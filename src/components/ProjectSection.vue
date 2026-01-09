<script setup lang="ts">
import type { ProjectData } from '@/data/resumeData';
import ProjectItem from './ProjectItem.vue';

defineProps<{
  projects: ProjectData[]
}>();
</script>

<template>
  <section class="project-section">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <div class="project-list">
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-section {
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
  margin-bottom: 1.5rem;
}

.project-list {
  display: flex;
  flex-direction: column;
}
</style>

