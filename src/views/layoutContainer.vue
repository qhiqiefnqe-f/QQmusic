<script setup>
import musicHeader from '@/components/musicHeader.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const showReturnTop = ref(false)

const handleScroll = () => {
  showReturnTop.value = window.scrollY > 150
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="main">
    <div class="returnTop" v-show="showReturnTop" @click="scrollToTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 15 15"
      >
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="square"
          d="m10.5 8.5l-3-3l-3 3"
        />
      </svg>
    </div>
    <musicHeader />

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  .returnTop {
    position: fixed;
    right: 20px;
    bottom: 60px;
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: white;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    z-index: 1;
    &:hover {
      background-color: #ccc;
    }
  }
}
</style>
