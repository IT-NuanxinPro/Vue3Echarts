<template>
  <div class="main">
    <LeftBox />
    <CenterBox />
    <RightBox />
  </div>
</template>

<script setup>
import LeftBox from '@/views/bigScreen/components/content/leftBox/index.vue'
import CenterBox from '@/views/bigScreen/components/content/centerBox/index.vue'
import RightBox from '@/views/bigScreen/components/content/rightBox/index.vue'
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: calc(100vh - 7vh);
  transform: translateY(-1%);
  display: flex;
  padding-bottom: 0.3%;
  box-sizing: border-box;
  justify-content: space-between;
}
</style>

