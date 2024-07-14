<script setup>
import { ref } from 'vue'
import { usetheLatestStore } from '@/stores/newMusic/theLatest.js'
import { usetheEnglishStore } from '@/stores/newMusic/theEnglish.js'
import { usetheLandStore } from '@/stores/newMusic/theLand.js'
import { usetheSonsStore } from '@/stores/newMusic/theSons.js'

const theLatestStore = usetheLatestStore()
const theEnglishStore = usetheEnglishStore()
const theLandStore = usetheLandStore()
const theSonsStore = usetheSonsStore()

function triggerChange(n) {
  console.log('1')
  if (currentView.value == 'theLatest') theLatestStore.changeImageSet(n)
  if (currentView.value == 'theEnglish') theEnglishStore.changeImageSet(n)
  if (currentView.value == 'theLand') theLandStore.changeImageSet(n)
  if (currentView.value == 'theSons') theSonsStore.changeImageSet(n)
}

import theLatest from '@/components/homePage/areas/theLatest.vue'
import theEnglish from '@/components/homePage/areas/theEnglish.vue'
import theLand from '@/components/homePage/areas/theLand.vue'
import theSons from '@/components/homePage/areas/theSons.vue'

const items = [
  { cn: '最新', en: 'theLatest' },
  { cn: '内地', en: 'theLand' },
  { cn: '港台', en: 'theSons' },
  { cn: '欧美', en: 'theEnglish' }
]

const currentView = ref('theLatest')
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
    class="newMusic"
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

    <h2>新歌首发</h2>
    <div class="playAll">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="#666666"
          d="M18.54 9L8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19l-9.66 5.62a1.44 1.44 0 0 1-1.42 0a1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"
        />
      </svg>
      播放全部
    </div>
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
    <theLatest v-show="currentView === 'theLatest'" />
    <theEnglish v-show="currentView === 'theEnglish'" />
    <theLand v-show="currentView === 'theLand'" />
    <theSons v-show="currentView === 'theSons'" />

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
.playAll {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80px;
  left: 20px;
  width: 130px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #c9c9c9;
  transition: all 0.5s ease;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(120, 120, 120, 0.3);
  }
}
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
.newMusic {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 560px;
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
