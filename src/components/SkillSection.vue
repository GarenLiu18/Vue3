<script setup lang="ts">
import type { SkillData } from '@/data/resumeData';
import SkillItem from './SkillItem.vue';

defineProps<{
  skills: SkillData[]
}>();
</script>

<template>
  <section class="skill-section">
    <h2 class="section-title">Skills</h2>
    <div class="skill-categories">
      <div v-for="category in skills" :key="category.id" class="category-group">
        <h3 class="category-title">{{ category.category }}</h3>
        <div class="skill-list">
          <SkillItem
            v-for="item in category.items"
            :key="item"
            :name="item"
            class="skill-gap"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  color: var(--color-heading);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.category-group {
  margin-bottom: 1.5rem;
}

.category-title {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
