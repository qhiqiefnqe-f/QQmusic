import { defineStore } from 'pinia'

export const useenglishSongStore = defineStore('imageStore4', {
  state: () => ({
    imagesCount: 3, // 图片集的数量
    activeSet: 1, // 记录当前激活的图片集编号，默认为1
    lastActiveSet: 0,

    currentImages: [], // 当前显示的图片集
    images1: [
      {
        id: 1,
        url: new URL('@/assets/foryou/301.png', import.meta.url).href,
        title: '神仙打架！演绎1+1＞2的经典合作',
        data: '播放量：1158.3万'
      },
      {
        id: 2,
        url: new URL('@/assets/foryou/301.png', import.meta.url).href,
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
        url: new URL(
          '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
          import.meta.url
        ).href,
        title: '周杰伦 · 翻开12月的回忆',
        data: '播放量：1.1亿'
      }
    ],

    images2: [
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
    ],

    images3: [
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
    ]
  }),
  actions: {
    changeImageSet(setNumber) {
      this.activeSet =
        (this.activeSet + setNumber + this.imagesCount) % this.imagesCount ||
        this.imagesCount
    },
    changeImageSetByIndex(index) {
      this.activeSet = index
    }
  },
  getters: {
    currentImagesSet(state) {
      // 使用模板字符串构造属性名，并返回对应的图片集
      return state[`images${state.activeSet}`] || []
    }
  }
})
