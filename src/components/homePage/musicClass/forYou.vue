<script setup>
import { ref } from 'vue'

const images = ref([
  {
    id: 1,
    url: new URL('@/assets/foryou/300.png', import.meta.url).href,
    title: '神仙打架！演绎1+1＞2的经典合作',
    data: '播放量：1158.3万'
  },
  {
    id: 2,
    url: new URL(
      '@/assets/foryou/761f6ab38fa930ec1ad1231ad1c2c513e383df0b_1fafbf.png',
      import.meta.url
    ).href,
    title: '抖音超热中文歌：一次听个够',
    data: '播放量：1371.1万'
  },
  {
    id: 3,
    url: new URL(
      '@/assets/foryou/110b26c32a979f0f7ee6d964f905ea072efde919_403503.PNG',
      import.meta.url
    ).href,
    title: '高考战歌|不负年华纪念励志青春',
    data: '播放量：11.9万'
  },
  {
    id: 4,
    url: new URL('@/assets/foryou/301.png', import.meta.url).href,
    title: '抖音超火热歌榜（持续更新）',
    data: '播放量：2039.4万'
  },
  {
    id: 5,
    url: new URL(
      '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
      import.meta.url
    ).href,
    title: '周杰伦 · 翻开12月的回忆',
    data: '播放量：1.1亿'
  }
])
</script>

<template>
  <div class="gallery">
    <div class="musicPart">
      <div class="perMusic" v-for="image in images" :key="image.id">
        <div class="picture">
          <img :src="image.url" alt="Music Image" />
        </div>
        <div class="data">
          <h2>{{ image.title }}</h2>
          <p>{{ image.data }}</p>
        </div>
      </div>
    </div>
    <div class="dots"></div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  .musicPart {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 310px;
    .perMusic {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      margin-right: 10px;
      width: 18%;
      height: 90%;

      .picture {
        cursor: pointer;
        width: 100%;
        height: 75%;
        overflow: hidden; // 确保放大的图片不会超出这个容器
        img {
          width: 100%; // 使图片宽度填满容器
          height: auto; // 保持图片的原始宽高比
          display: block; // 避免图片下方出现空隙
          transition: transform 0.3s ease; // 平滑过渡效果

          &:hover {
            transform: scale(1.1); // 放大图片
          }
        }
      }
      .data {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background-color: antiquewhite;
        h2 {
          margin: 0;
          margin-top: 15px;
          font-size: 14px;
          font-weight: 400;
        }
        p {
          margin-top: 5px;
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
  .dots {
    flex-grow: 1;
    background-color: green;
  }
}
</style>
