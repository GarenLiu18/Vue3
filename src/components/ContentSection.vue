<script setup lang="ts">
import type { ExperienceData, SkillData } from '@/data/resumeData';
import AboutSection from './AboutSection.vue';
import ExperienceSection from './ExperienceSection.vue';
import SkillSection from './SkillSection.vue';

defineProps<{
  about: string;
  experiences: ExperienceData[];
  skills: SkillData[];
}>();
</script>

<template>
  <main class="content-section">
    <AboutSection :about="about" />
    <ExperienceSection :experiences="experiences" />
    <SkillSection :skills="skills" />
  </main>
</template>

<style scoped>
.content-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
</style>
