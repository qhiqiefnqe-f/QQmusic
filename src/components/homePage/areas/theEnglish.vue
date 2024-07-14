<script setup>
import { watch, computed } from 'vue'
import { usetheEnglishStore } from '@/stores/newMusic/theEnglish'
const theEnglishStore = usetheEnglishStore()

const transitionName = computed(() => {
  return theEnglishStore.activeSet > theEnglishStore.lastActiveSet
    ? 'slide-grow'
    : 'slide-shrink'
})

// 监听activeSet的变化
watch(
  () => theEnglishStore.activeSet,
  (newVal, oldVal) => {
    theEnglishStore.lastActiveSet = oldVal
    // 这里可以根据需要更新showContent来触发动画
  }
)
</script>

<template>
  <div class="gallery">
    <transition :name="transitionName" mode="out-in">
      <div class="musicPart" :key="theEnglishStore.activeSet">
        <div class="column">
          <div
            class="perMusic"
            v-for="image in theEnglishStore.currentImagesSet.slice(0, 3)"
            :key="image.id"
            :class="{ 'border-bottom': image.id % 3 !== 0 }"
          >
            <div class="picture">
              <img :src="image.url" alt="Music Image" />
              <div class="play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#ffffff"
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41z"
                  />
                </svg>
              </div>
            </div>
            <div class="data">
              <div class="leftData">
                <h2>{{ image.title }}</h2>
                <p>{{ image.name }}</p>
              </div>
              <div class="rightData">
                <p>{{ image.data }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div
            class="perMusic"
            v-for="image in theEnglishStore.currentImagesSet.slice(3, 6)"
            :key="image.id"
            :class="{ 'border-bottom': image.id % 3 !== 0 }"
          >
            <div class="picture">
              <img :src="image.url" alt="Music Image" />
              <div class="play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#ffffff"
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41z"
                  />
                </svg>
              </div>
            </div>
            <div class="data">
              <div class="leftData">
                <h2>{{ image.title }}</h2>
                <p>{{ image.name }}</p>
              </div>
              <div class="rightData">
                <p>{{ image.data }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div
            class="perMusic"
            v-for="image in theEnglishStore.currentImagesSet.slice(6, 9)"
            :key="image.id"
            :class="{ 'border-bottom': image.id % 3 !== 0 }"
          >
            <div class="picture">
              <img :src="image.url" alt="Music Image" />
              <div class="play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#ffffff"
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41z"
                  />
                </svg>
              </div>
            </div>
            <div class="data">
              <div class="leftData">
                <h2>{{ image.title }}</h2>
                <p>{{ image.name }}</p>
              </div>
              <div class="rightData">
                <p>{{ image.data }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <ul class="dots">
      <li
        v-for="n in theEnglishStore.imagesCount"
        :key="n"
        @click="theEnglishStore.changeImageSetByIndex(n)"
        :class="{ active: n === theEnglishStore.activeSet }"
      ></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 0.8px solid #ccc; /* 或者你想要的任何样式 */
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.gallery svg * {
  animation: fadeIn 0.4s ease-out forwards;
}
.gallery {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  .musicPart {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 340px;

    .column {
      display: flex;
      flex-direction: column;
      width: 32%;
      height: 100%;
    }
    .perMusic {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 33.3%;

      .picture {
        display: flex;
        align-items: center;
        margin-left: 20px;
        position: relative; // 为了定位播放按钮
        cursor: pointer;
        width: 20%;
        height: 100%;
        overflow: hidden; // 确保放大的图片不会超出这个容器

        img {
          width: 100%; // 使图片宽度填满容器
          height: auto; // 保持图片的原始宽高比
          display: block; // 避免图片下方出现空隙
          transition: transform 0.4s ease; // 平滑过渡效果
        }
        &:hover img {
          transform: scale(1.1); // 放大图片
          filter: brightness(90%); // 图片变暗
        }
        .play-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); // 居中显示
          width: 40px; // 播放按钮的大小
          height: 40px;

          display: none; // 默认不显示
        }
        &:hover .play-button {
          display: block; // 当hover时显示播放按钮
        }
      }
      .data {
        padding-left: 15px;
        display: flex;

        flex-grow: 1;
        .leftdata {
          width: 50%;
          height: auto;
          h2 {
            margin: 0;
            margin-top: 15px;
            font-size: 15px;
            font-weight: 400;
            &:hover {
              color: #31c27c;
            }
          }
          p {
            margin-top: 5px;
            font-size: 14px;
            color: #999999;
            &:hover {
              color: #31c27c;
            }
          }
        }
        .rightData {
          position: relative;
          flex-grow: 1;
          height: auto;
          p {
            position: absolute;
            right: 20px;
            top: 25px;
            &:hover {
              color: #999999;
            }
          }
        }

        h2 {
          margin: 0;
          margin-top: 15px;
          font-size: 15px;
          font-weight: 400;
          &:hover {
            color: #31c27c;
          }
        }
        p {
          margin-top: 5px;
          font-size: 14px;
          color: #999999;
          &:hover {
            color: #31c27c;
          }
        }
      }
    }
  }
  .dots {
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    li {
      cursor: pointer;
      height: 8px;
      width: 8px;
      margin: 0 5px;
      background-color: #ccc;
      border-radius: 50%;
      &:hover {
        background-color: #777;
      }
    }
    li.active {
      background-color: #777;
    }
  }
}

.slide-grow-enter-active,
.slide-grow-leave-active {
  transition: transform 0.2s ease;
}
.slide-grow-enter-from {
  transform: translateX(100%);
}
.slide-grow-leave-to {
  transform: translateX(-100%);
}
.slide-grow-enter-to,
.slide-grow-leave-from {
  transform: translateX(0);
}

/* 变小时的滑动效果 */
.slide-shrink-enter-active,
.slide-shrink-leave-active {
  transition: transform 0.25s ease;
}
.slide-shrink-enter-from {
  transform: translateX(-100%);
}
.slide-shrink-leave-to {
  transform: translateX(100%);
}
.slide-shrink-enter-to,
.slide-shrink-leave-from {
  transform: translateX(0);
}
</style>
