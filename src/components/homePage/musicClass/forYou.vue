<script setup>
import { onMounted, ref, watch, computed } from 'vue'

const imagesCount = ref(3) // 图片集的数量

const currentImages = ref([]) // 当前显示的图片集
const activeSet = ref(1) // 记录当前激活的图片集编号，默认为1
const lastActiveSet = ref(0)

const changeImageSet = (setNumber) => {
  currentImages.value = eval(`images${setNumber}`).value
  activeSet.value = setNumber // 更新当前激活的图片集编号
}

onMounted(() => {
  changeImageSet(1)
})

const transitionName = computed(() => {
  return activeSet.value > lastActiveSet.value ? 'slide-grow' : 'slide-shrink'
})

// 监听activeSet的变化
watch(activeSet, (newVal, oldVal) => {
  lastActiveSet.value = oldVal
  // 这里可以根据需要更新showContent来触发动画
})

const images1 = ref([
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

const images2 = ref([
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
    url: new URL('@/assets/foryou/301.png', import.meta.url).href,
    title: '周杰伦 · 翻开12月的回忆',
    data: '播放量：1.1亿'
  }
])

const images3 = ref([
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
    url: new URL('@/assets/foryou/301.png', import.meta.url).href,
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
    url: new URL('@/assets/foryou/301.png', import.meta.url).href,
    title: '周杰伦 · 翻开12月的回忆',
    data: '播放量：1.1亿'
  }
])
</script>

<template>
  <div class="gallery">
    <transition :name="transitionName" mode="out-in">
      <div class="musicPart" :key="activeSet">
        <div class="perMusic" v-for="image in currentImages" :key="image.id">
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
            <h2>{{ image.title }}</h2>
            <p>{{ image.data }}</p>
          </div>
        </div>
      </div>
    </transition>
    <ul class="dots">
      <li
        v-for="n in imagesCount"
        :key="n"
        @click="changeImageSet(n)"
        :class="{ active: n === activeSet }"
      ></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
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
        position: relative; // 为了定位播放按钮
        cursor: pointer;
        width: 100%;
        height: 75%;
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
          width: 50px; // 播放按钮的大小
          height: 50px;

          display: none; // 默认不显示
        }
        &:hover .play-button {
          display: block; // 当hover时显示播放按钮
        }
      }
      .data {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

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
    margin: 0;
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
