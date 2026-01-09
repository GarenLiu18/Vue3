<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// Layout component acts as the skeleton of the page
</script>

<template>
  <div class="layout">
    <nav class="side-nav">
      <a href="#home" class="nav-dot" title="Home"></a>
      <a href="#about" class="nav-dot" title="About"></a>
      <a href="#experience" class="nav-dot" title="Experience"></a>
      <a href="#projects" class="nav-dot" title="Projects"></a>
      <a href="#side-projects" class="nav-dot" title="Side Projects"></a>
      <a href="#skills" class="nav-dot" title="Skills"></a>
    </nav>

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

.side-nav {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-border);
  transition: background-color 0.3s, transform 0.3s;
}

.nav-dot:hover,
.nav-dot:active {
  background-color: var(--color-heading);
  transform: scale(1.2);
}

.layout-content {
  flex: 1;
}

.layout-header,
.layout-footer {
  flex-shrink: 0;
}
</style>
