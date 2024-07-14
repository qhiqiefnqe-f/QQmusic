<script setup>
import { ref } from 'vue'
import { useforYouStore } from '@/stores/forYou.js'
import { useloveSongStore } from '@/stores/loveSong.js'
import { useenglishSongStore } from '@/stores/englishSong.js'
import { useclassicSongStore } from '@/stores/classicSong.js'
import { useofficialSongStore } from '@/stores/officialSong.js'
import { usewebSongStore } from '@/stores/webSong.js'
const forYouStore = useforYouStore()
const loveSongStore = useloveSongStore()
const englishSongStore = useenglishSongStore()
const classicSongStore = useclassicSongStore()
const officialSongStore = useofficialSongStore()
const webSongStore = usewebSongStore()

function triggerChange(n) {
  if (currentView.value == 'forYou') forYouStore.changeImageSet(n)
  if (currentView.value == 'loveSong') loveSongStore.changeImageSet(n)
  if (currentView.value == 'englishSong') englishSongStore.changeImageSet(n)
  if (currentView.value == 'classicSong') classicSongStore.changeImageSet(n)
  if (currentView.value == 'officialSong') officialSongStore.changeImageSet(n)
  if (currentView.value == 'webSong') webSongStore.changeImageSet(n)
}

import classicSong from '@/components/homePage/musicClass/classicSong.vue'
import englishSong from '@/components/homePage/musicClass/englishSong.vue'
import officialSong from '@/components/homePage/musicClass/officialSong.vue'
import forYou from '@/components/homePage/musicClass/forYou.vue'
import loveSong from '@/components/homePage/musicClass/loveSong.vue'
import webSong from '@/components/homePage/musicClass/webSong.vue'
const items = [
  { cn: '为你推荐', en: 'forYou' },
  { cn: '情歌', en: 'loveSong' },
  { cn: '网络歌曲', en: 'webSong' },
  { cn: '英语', en: 'englishSong' },
  { cn: '官方歌单', en: 'officialSong' },
  { cn: '经典', en: 'classicSong' }
]

const currentView = ref('forYou')
const changeCurrentView = (partname) => {
  currentView.value = partname
}

const showSideDivs = ref(false)

const handleMouseEnter = () => {
  showSideDivs.value = true
}

const handleMouseLeave = () => {
  showSideDivs.value = false
}
</script>

<template>
  <div
    class="musicRecommend"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <transition name="slide">
      <div
        class="sideDiv left"
        v-show="showSideDivs"
        @click="triggerChange(-1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#333333"
            stroke-width="2"
            d="M17 2L7 12l10 10"
          />
        </svg>
      </div>
    </transition>

    <h2>歌单推荐</h2>
    <ul class="difParts">
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="changeCurrentView(item.en)"
        :class="{ active: currentView === item.en }"
      >
        {{ item.cn }}
      </li>
    </ul>
    <forYou v-show="currentView === 'forYou'" />
    <loveSong v-show="currentView === 'loveSong'" />
    <webSong v-show="currentView === 'webSong'" />
    <englishSong v-show="currentView === 'englishSong'" />
    <officialSong v-show="currentView === 'officialSong'" />
    <classicSong v-show="currentView === 'classicSong'" />
    <transition name="slide">
      <div
        class="sideDiv right"
        v-show="showSideDivs"
        @click="triggerChange(1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#333333"
            stroke-width="2"
            d="m7 2l10 10L7 22"
          />
        </svg>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sideDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 210px;
  width: 80px; // 示例宽度
  height: 120px; // 高度与musicRecommend相同
  background-color: rgba(23, 23, 23, 0.15); // 示例背景色
  transition: all 0.5s ease; // 平滑过渡效果
  z-index: 1; // 使侧边Div在内容之上
  &:hover {
    background-color: rgba(23, 23, 23, 0.3); // 鼠标悬停时的背景色
  }
}

.left {
  left: 0px; // 根据需要调整
}

.right {
  right: 0px; // 根据需要调整
}
.musicRecommend {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 532px;
  background-image: linear-gradient(to bottom, #f2f2f2, white);
  h2 {
    font-size: 2em;
    font-weight: 500;
    letter-spacing: 8px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  ul.difParts {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      cursor: pointer;
      padding: 10px;
      margin-left: 10px;
      margin-right: 10px;
      &:hover {
        color: #31c27c;
      }
    }
    li.active {
      color: #31c27c;
    }
  }
}
/* 定义进入和离开的动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}

.slide-enter-from.left,
.slide-leave-to.left {
  left: -100px;
}

.slide-enter-to.left,
.slide-leave-from.left {
  left: 0;
}

.slide-enter-from.right,
.slide-leave-to.right {
  right: -100px;
}

.slide-enter-to.right,
.slide-leave-from.right {
  right: 0;
}
</style>
