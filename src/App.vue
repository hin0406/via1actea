<template>
  <div class="header">
    <pageHeader />
  </div>
  <div class="body">
    <router-view />
  </div>
  <div class="footer">footer</div>
</template>

<script setup lang="ts">
import pageHeader from "./components/header.vue";
</script>

<style scoped>
.header {
  background-color: white;
  width: 100vw;
  min-height: 5rem;
}

.body {
  min-height: calc(100vh - 5rem - 15rem);
}

.footer {
  background-color: white;
  min-height: 15rem;
}
</style>
