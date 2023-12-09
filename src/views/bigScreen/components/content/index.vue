<template>
  <div class="main" ref="main">
    <h1>{{ content }}</h1>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const content = ref('content')
const { proxy } = getCurrentInstance()
console.log(proxy.$Test())
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

