<script setup lang="ts">
import type { ExperienceData } from '@/data/resumeData';
import ExperienceItem from './ExperienceItem.vue';

defineProps<{
  experiences: ExperienceData[]
}>();
</script>

<template>
  <section class="experience-section">
    <h2 class="section-title">Experience</h2>
    <div class="experience-list">
      <ExperienceItem
        v-for="exp in experiences"
        :key="exp.id"
        :experience="exp"
      />
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  color: var(--color-heading);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>
