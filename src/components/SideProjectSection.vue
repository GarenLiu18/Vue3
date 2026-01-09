<script setup lang="ts">
import type { SideProjectData } from '@/data/resumeData';
import SideProjectItem from './SideProjectItem.vue';

defineProps<{
  sideProjects: SideProjectData[]
}>();
</script>

<template>
  <section class="side-project-section">
    <h2 class="section-title">Side Projects</h2>
    <div class="project-list">
      <SideProjectItem
        v-for="project in sideProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.side-project-section {
  margin-bottom: 3rem;
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

