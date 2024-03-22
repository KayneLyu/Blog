<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/home/index.vue';
import Modal from '@/components/modal.vue';
</script>

<template>
<Modal />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped>
</style>
