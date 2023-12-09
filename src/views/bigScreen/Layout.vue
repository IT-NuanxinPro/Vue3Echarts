<script setup>
import navBar from './components/navBar/index.vue'
import Content from '@/views/bigScreen/components/content/index.vue'
</script>
<template>
  <div class="container">
    <navBar />
    <Content />
  </div>
</template>

<style lang="scss" scoped>
$imgs: '@/assets/img/bigScreen/background.jpg';

.container {
  width: 100vw;
  height: 100vh;
  background-image: url($imgs);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

