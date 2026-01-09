<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// Layout component acts as the skeleton of the page
</script>

<template>
  <div class="layout">
    <header class="layout-header">
      <slot name="header"></slot>
    </header>

    <div class="layout-content">
      <slot name="content"></slot>
    </div>

    <footer class="layout-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-background);
}

.layout-content {
  flex: 1;
}

.layout-header,
.layout-footer {
  flex-shrink: 0;
}
</style>
