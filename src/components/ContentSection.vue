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
    <AboutSection id="about" :about="about" />
    <ExperienceSection id="experience" :experiences="experiences" />
    <ProjectSection id="projects" :projects="projects" />
    <SideProjectSection id="side-projects" :sideProjects="sideProjects" />
    <SkillSection id="skills" :skills="skills" />
  </main>
</template>

<style scoped>
.content-section {
  width: 100%;
}
</style>
