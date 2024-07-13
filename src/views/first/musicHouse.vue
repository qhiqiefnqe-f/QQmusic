<script setup>
import headerRecommend from '@/components/headerRecommend.vue'
</script>

<template>
  <div class="musicHouse">
    <headerRecommend />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.musicHouse {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: black;
}
</style>
