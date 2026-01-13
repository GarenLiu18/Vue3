<script setup lang="ts">
import type { HeaderData } from '@/data/resumeData';

defineProps<{
  headerData: HeaderData
}>();
</script>

<template>
  <header class="header-section">
    <div class="business-card">
      <h1 class="name">{{ headerData.name }}</h1>
      <h2 class="job-title">{{ headerData.title }}</h2>

      <div class="contact-info">
        <a v-if="headerData.contact.email" :href="`mailto:${headerData.contact.email}`" class="contact-link">
          {{ headerData.contact.email }}
        </a>
        <span v-if="headerData.contact.phone" class="contact-item">
          {{ headerData.contact.phone }}
        </span>
        <a v-if="headerData.contact.github" :href="headerData.contact.github" target="_blank" rel="noopener noreferrer" class="contact-link">
          GitHub
        </a>
        <a v-if="headerData.contact.linkedin" :href="headerData.contact.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link">
          LinkedIn
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-section {
  text-align: center;
  padding: 0;
  background-color: var(--color-background-mute);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.business-card {
  background-color: var(--color-background);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border);
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.business-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.name {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.job-title {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  font-weight: 500;
  opacity: 0.8;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
}

.contact-link, .contact-item {
  color: var(--color-text-soft);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.contact-link:hover {
  color: var(--color-heading);
  text-decoration: underline;
}
</style>
