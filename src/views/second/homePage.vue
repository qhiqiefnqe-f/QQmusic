<script setup>
import musicListRecommend from '@/components/homePage/main/musicListRecommend.vue'
import newMusic from '@/components/homePage/main/newMusic.vue'
import rangePart from '@/components/homePage/main/rangePart.vue'
import theFooter from '@/components/homePage/main/theFooter.vue'
</script>

<template>
  <div class="homePage">
    <musicListRecommend></musicListRecommend>
    <newMusic></newMusic>
    <rangePart></rangePart>
    <theFooter></theFooter>
  </div>
</template>

<style lang="scss" scoped>
.homePage {
  width: 100%;
}
</style>
