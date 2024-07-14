<script setup>
import musicListRecommend from '@/components/homePage/main/musicListRecommend.vue'
import newMusic from '@/components/homePage/main/newMusic.vue'
</script>

<template>
  <div class="homePage">
    <musicListRecommend></musicListRecommend>
    <newMusic></newMusic>
  </div>
</template>

<style lang="scss" scoped>
.homePage {
  width: 100%;
}
</style>
