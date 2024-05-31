<template>
  <div class="content">
    <header class="px-6 py-3 d-flex align-center gap-3 cursor-pointer" @click="$router.push('/')">
      <v-icon size=x-large>mdi-sticker-check-outline</v-icon>
      <h1 class="font-weight-medium">ToDo</h1>
    </header>
  
    <router-view />
  
    <footer class="text-center">
      Copyright ©{{ new Date().getFullYear() }} Morgan Guillemin
    </footer>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
}
.content {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-image: url('@/assets/images/background.webp');
  background-repeat: repeat;
  background-color: transparent;
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
