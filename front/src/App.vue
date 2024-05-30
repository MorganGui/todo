<template>
  <header>
    <h1>ToDo</h1>
  </header>

  <router-view />

  <footer class="text-center">
    Copyright ©{{ new Date().getFullYear() }} Morgan Guillemin
  </footer>
</template>

<style>
html, body {
  height: 100%;
}
#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
.gap-5 { gap: 20px; }
.gap-6 { gap: 24px; }
.gap-7 { gap: 28px; }
.gap-8 { gap: 32px; }
.gap-9 { gap: 36px; }
.gap-10 { gap: 40px; }
.gap-11 { gap: 44px; }
.gap-12 { gap: 48px; }
</style>
