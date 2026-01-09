<script setup lang="ts">
import type { ExperienceData, ProjectData, SideProjectData, SkillData } from '@/data/resumeData';
import AboutSection from './AboutSection.vue';
import ExperienceSection from './ExperienceSection.vue';
import ProjectSection from './ProjectSection.vue';
import SideProjectSection from './SideProjectSection.vue';
import SkillSection from './SkillSection.vue';

defineProps<{
  about: string;
  experiences: ExperienceData[];
  projects: ProjectData[];
  sideProjects: SideProjectData[];
  skills: SkillData[];
}>();
</script>

<template>
  <main class="content-section">
    <AboutSection :about="about" />
    <ExperienceSection :experiences="experiences" />
    <ProjectSection :projects="projects" />
    <SideProjectSection :sideProjects="sideProjects" />
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
