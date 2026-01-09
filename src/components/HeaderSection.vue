<script setup lang="ts">
import type { HeaderData } from '@/data/resumeData';

defineProps<{
  headerData: HeaderData
}>();
</script>

<template>
  <header class="header-section">
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
  </header>
</template>

<style scoped>
.header-section {
  text-align: center;
  padding: 3rem 1.5rem;
  background-color: var(--color-background-mute);
  border-bottom: 1px solid var(--color-border);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.job-title {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-weight: normal;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-link, .contact-item {
  color: var(--color-text-soft);
  text-decoration: none;
  font-size: 1rem;
}

.contact-link:hover {
  color: var(--color-heading);
  text-decoration: underline;
}
</style>
