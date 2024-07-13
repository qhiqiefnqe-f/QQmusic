<script setup>
import { ref } from 'vue'

import classicSong from '@/components/homePage/musicClass/classicSong.vue'
import englishSong from '@/components/homePage/musicClass/englishSong.vue'
import officialSong from '@/components/homePage/musicClass/officialSong.vue'
import forYou from '@/components/homePage/musicClass/forYou.vue'
import loveSong from '@/components/homePage/musicClass/loveSong.vue'
import webSong from '@/components/homePage/musicClass/webSong.vue'
const items = ['为你推荐', '情歌', '网络歌曲', '英语', '官方歌单', '经典']

const currentView = ref('forYou')
</script>

<template>
  <div class="musicRecommend">
    <h2>歌单推荐</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
    <forYou v-show="currentView === 'forYou'" />
    <loveSong v-show="currentView === 'loveSong'" />
    <webSong v-show="currentView === 'webSong'" />
    <englishSong v-show="currentView === 'englishSong'" />
    <officialSong v-show="currentView === 'officialSong'" />
    <classicSong v-show="currentView === 'classicSong'" />
  </div>
</template>

<style lang="scss" scoped>
.musicRecommend {
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
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
