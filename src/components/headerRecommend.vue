<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const items = [
  { title: '首页', path: '/musicHouse/homePage' },
  { title: '歌手', path: '/musicHouse/singerpage' },
  { title: '新碟', path: '/musicHouse/newMusic' },
  { title: '排行榜', path: '/musicHouse/rangepage' },
  { title: '分类歌单', path: '/musicHouse/classifypage' },
  { title: '雷达', path: '/musicHouse/radiopage' },
  { title: 'MV', path: '/musicHouse/mvpage' },
  { title: '数字专辑', path: '/musicHouse/albumpage' }
]

const isActiveRoute = (itemPath) => {
  return route.path === itemPath
}
</script>

<template>
  <div class="headerRecommend">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: isActiveRoute(item.path) }"
        @click="router.push(item.path)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.headerRecommend {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    list-style-type: none; // 取消默认的列表样式
    padding: 0; // 取消默认的内边距
    margin: 0; // 取消默认的外边距
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1em;
      font-weight: 400;
      color: black;
      margin: 0; // 根据需要，也可以为li元素取消外边距
      padding: 25px;
      &:hover {
        color: #31c27c;
      }
    }
    .active {
      color: #31c27c;
    }
  }
}
</style>
