<script setup lang="ts">
import Calculator from './components/Calculator.vue'
</script>

<template>
  <main class="app-shell">
    <Calculator />
  </main>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  color-scheme: dark;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #1a1a2e;
}

body {
  min-height: 100vh;
  background: #1a1a2e;
}

#app,
.app-shell {
  min-height: 100vh;
}

.app-shell {
  display: grid;
  place-items: center;
  padding: 1rem;
}
</style>
