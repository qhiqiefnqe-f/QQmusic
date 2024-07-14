<script setup>
import { ref } from 'vue'

const rangeClass = ref([
  {
    id: 1,
    title: '热歌',
    firts: { music: '暮色回想', name: '机型出租' },
    second: { music: '若月亮没来', name: '王玉周' },
    third: { music: '富士山下', name: '陈奕迅' },
    url: new URL('@/assets/range/1.png', import.meta.url).href,
    hover: false
  },
  {
    id: 2,
    title: '新歌',
    firts: { music: '暮色回想', name: '机型出租' },
    second: { music: 'one more nignt', name: '刘耀文' },
    third: { music: 'FOREVER', name: 'BABYMONSTER' },
    url: new URL('@/assets/range/2.png', import.meta.url).href,
    hover: false
  },
  {
    id: 3,
    title: '流行指数',
    firts: { music: '暮色回想', name: '机型出租' },
    second: { music: '童话镇', name: '小野来了' },
    third: { music: '会开花的云 (Live)', name: '弦子/姚晓棠' },
    url: new URL('@/assets/range/3.png', import.meta.url).href,
    hover: false
  },
  {
    id: 4,
    title: '欧美',
    firts: { music: 'oneThing', name: 'Ameriie' },
    second: { music: 'Tough', name: 'Quavo/Lana Del Rey' },
    third: { music: 'Fortnight', name: 'Taylor Swift' },
    url: new URL('@/assets/range/4.png', import.meta.url).href,
    hover: false
  },
  {
    id: 5,
    title: '韩国',
    firts: { music: 'FOREVER', name: 'BABYMONSTER' },
    second: { music: 'Hot Mess', name: 'aespa' },
    third: { music: 'Small girl ', name: '李泳知' },
    url: new URL('@/assets/range/5.png', import.meta.url).href,
    hover: false
  }
])
</script>

<template>
  <div class="rangePart">
    <h1>排行榜</h1>
    <div class="more">
      <p>更多</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
    <div class="rangeList">
      <div
        class="perList"
        v-for="item in rangeClass"
        :key="item.id"
        @mouseover="item.hover = true"
        @mouseleave="item.hover = false"
      >
        <img :src="item.url" alt="排行榜" />
        <div class="theData">
          <h2>巅峰榜</h2>
          <h1>{{ item.title }}</h1>
          <div class="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 16 16"
              v-if="!item.hover"
            >
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 512 512"
              v-else
            >
              <path
                fill="#ffffff"
                d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"
              />
            </svg>
          </div>

          <div>
            <div class="number">1.</div>
            <div class="theMusic">
              <p>
                {{ item.firts.music }}
                <br />
                {{ item.firts.name }}
              </p>
            </div>
          </div>

          <div>
            <div class="number">2.</div>
            <div class="theMusic">
              <p>
                {{ item.second.music }}
                <br />
                {{ item.second.name }}
              </p>
            </div>
          </div>

          <div>
            <div class="number">3.</div>
            <div class="theMusic">
              <p>
                {{ item.third.music }}
                <br />
                {{ item.third.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rangeList {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  .perList {
    position: relative;
    height: 480px;
    width: 17%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    overflow: hidden;
    .theData {
      position: absolute;
      bottom: 50px;
      width: 100%;
      height: 80%;

      display: flex;
      flex-direction: column;

      align-items: center;
      color: white;
      font-size: 14px;
      text-align: center;
      .svg {
        margin-bottom: 20px;
        cursor: pointer;
      }
      div {
        display: flex;

        margin-bottom: 15px;
        .number {
          width: 5px;
          padding-right: 8px;
        }
        .theMusic {
          width: 130px;
          text-align: left;
          p {
            margin: 0;
          }
        }
      }
      h1 {
        margin: 0;
        margin-top: 3px;
        margin-bottom: 20px;
      }
      h2 {
        margin: 0;
        font-weight: 300;
      }
      p {
        margin: 0;
      }
    }
    img {
      width: 100%; // 使图片宽度填满容器
      height: auto; // 保持图片的原始宽高比
      display: block; // 避免图片下方出现空隙
      transition: transform 0.4s ease; // 平滑过渡效果
      transform: scale(1.1);
    }
    &:hover img {
      transform: scale(1.3); // 放大图片
    }
  }
}
.rangePart {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 614px;
  background-image: linear-gradient(to bottom, #f2f2f2, white);
  h1 {
    margin-top: 30px;
    font-weight: 500;
  }
  .more {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 25px;
    &:hover {
      color: #31c27c;
      svg {
        fill: #31c27c; /* 或者使用currentColor来自动匹配文字颜色 */
      }
    }
  }
}
</style>
