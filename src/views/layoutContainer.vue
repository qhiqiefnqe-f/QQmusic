<script setup>
import musicHeader from '@/components/musicHeader.vue'
</script>

<template>
  <div class="main">
    <musicHeader />

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
