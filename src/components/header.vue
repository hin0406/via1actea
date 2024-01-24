<template>
  <div class="header">
    <div @click="goTo('/')" class="btn-tag">Home</div>
    <div class="btn-tag">Products</div>
    <div @click="goTo('/')">
      <img class="icon btn-tag" :src="icon" alt="" />
    </div>
    <div @click="goTo('AboutMe')" class="btn-tag">About me</div>
    <div class="btn-tag">Contact us</div>
  </div>
</template>

<script setup lang="ts">
import icon from "../assets/viaLactea-icon.png";
import routes from "~pages";
import { useRouter } from "vue-router";
const router = useRouter();

const goTo = (path: string) => router.push(path);
</script>

<style scoped>
.header {
  color: black;
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
}

.icon {
  height: 3rem;
}

.btn-tag {
  cursor: pointer;
}
</style>
