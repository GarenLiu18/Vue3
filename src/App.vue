<script setup lang="ts">
import { resumeData } from '@/data/resumeData';
import Layout from '@/components/Layout.vue';
import HeaderSection from '@/components/HeaderSection.vue';
import ContentSection from '@/components/ContentSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <Layout>
    <template #header>
      <HeaderSection :headerData="resumeData.header" />
    </template>

    <template #content>
      <ContentSection
        :about="resumeData.about"
        :experiences="resumeData.experience"
        :projects="resumeData.projects"
        :sideProjects="resumeData.sideProjects"
        :skills="resumeData.skills"
      />
    </template>

    <template #footer>
      <FooterSection
        :year="resumeData.footer.year"
        :copyright="resumeData.footer.copyright"
      />
    </template>
  </Layout>
</template>

<style>
/* Global styles can be imported here or in main.ts */
</style>
