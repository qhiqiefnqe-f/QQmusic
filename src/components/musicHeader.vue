<script setup>
import headerBig from '@/components/headerBig.vue'
import headerSmall from '@/components/headerSmall.vue'
</script>

<template>
  <div class="main">
    <headerBig />
    <headerSmall />
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 142px;
  width: 100%;
}
</style>
