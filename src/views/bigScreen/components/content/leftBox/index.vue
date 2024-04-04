
<script setup>
import importantGuest from '@/views/bigScreen/components/content/leftBox/components/importantGuest/index.vue'
import cuServiceProgram from '@/views/bigScreen/components/content/leftBox/components/cuServiceProgram.vue'
import dataGovernance from '@/views/bigScreen/components/content/leftBox/components/dataGovernance.vue'

const items = [importantGuest, cuServiceProgram, dataGovernance]
</script>

<template>
  <div class="leftBox">
    <div v-for="item in 3" :key="item" :class="`item${item}`">
      <component :is="items[item - 1 ]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin layout($num) {
  @if $num ==1 {
    height: 43%;
  }

  @else if $num ==2 {
    height: 35%;
  }

  @else {
    height: 22%;
  }
}

.leftBox {
  width: 28.5%;
  height: 100%;
  margin: 0 0 0 0.3%;
  padding: 0 0.25%;
  box-sizing: border-box;
  border: 1.1px solid #004DCF;
  background-image: linear-gradient(to bottom, rgba(6, 72, 156, 0.15), rgba(34, 94, 172, 0.15),
      rgba(50, 108, 182, 0.15), rgba(15, 79, 161, 0.15));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @for $i from 1 through 3 {
    .item#{$i} {
      @include layout($i);
    }
  }
}
</style>
