import { defineStore } from 'pinia'

export const usetheLatestStore = defineStore('imageStore7', {
  state: () => ({
    imagesCount: 3, // 图片集的数量
    activeSet: 1, // 记录当前激活的图片集编号，默认为1
    lastActiveSet: 0,

    currentImages: [], // 当前显示的图片集
    images1: [
      {
        id: 1,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000000gNVJD0XPHIy_1.png',
          import.meta.url
        ).href,
        title: '发疯',
        name: '王铮亮',
        data: '03:18'
      },
      {
        id: 2,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '会开花的云',
        name: '要小唐',
        data: '03:34'
      },
      {
        id: 3,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000001UMGkp4bXCCb_1.png',
          import.meta.url
        ).href,
        title: '我要睡觉',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 4,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000002OxSm12y0ID4_1.png',
          import.meta.url
        ).href,
        title: '红色的钞票',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 5,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000004aPOj44U9uh1_1.png',
          import.meta.url
        ).href,
        title: '今日休业中',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 6,
        url: new URL(
          '@/assets/newmusic/T002R300x300M0000013Z8m54JjQna_1.png',
          import.meta.url
        ).href,
        title: '我想当风',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 7,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '氧气',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 8,
        url: new URL(
          '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
          import.meta.url
        ).href,
        title: '周杰伦 · 翻开12月的回忆',
        name: '周杰伦',
        data: '03:04'
      },
      {
        id: 9,
        url: new URL(
          '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
          import.meta.url
        ).href,
        title: '芜湖',
        name: '芜湖',
        data: '03:04'
      }
    ],

    images2: [
      {
        id: 1,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000000gNVJD0XPHIy_1.png',
          import.meta.url
        ).href,
        title: '发疯',
        name: '王铮亮',
        data: '03:18'
      },
      {
        id: 2,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000000gNVJD0XPHIy_1.png',
          import.meta.url
        ).href,
        title: '会开花的云',
        name: '要小唐',
        data: '03:34'
      },
      {
        id: 3,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000000gNVJD0XPHIy_1.png',
          import.meta.url
        ).href,
        title: '我要睡觉',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 4,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000000gNVJD0XPHIy_1.png',
          import.meta.url
        ).href,
        title: '红色的钞票',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 5,
        url: new URL(
          '@/assets/newmusic/T002R300x300M000004aPOj44U9uh1_1.png',
          import.meta.url
        ).href,
        title: '今日休业中',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 6,
        url: new URL(
          '@/assets/newmusic/T002R300x300M0000013Z8m54JjQna_1.png',
          import.meta.url
        ).href,
        title: '我想当风',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 7,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '氧气',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 8,
        url: new URL(
          '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
          import.meta.url
        ).href,
        title: '周杰伦 · 翻开12月的回忆',
        name: '周杰伦',
        data: '03:04'
      },
      {
        id: 9,
        url: new URL(
          '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
          import.meta.url
        ).href,
        title: '芜湖',
        name: '芜湖',
        data: '03:04'
      }
    ],

    images3: [
      {
        id: 1,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '发疯',
        name: '王铮亮',
        data: '03:18'
      },
      {
        id: 2,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '会开花的云',
        name: '要小唐',
        data: '03:34'
      },
      {
        id: 3,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '我要睡觉',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 4,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '红色的钞票',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 5,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '今日休业中',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 6,
        url: new URL(
          '@/assets/newmusic/T002R300x300M0000013Z8m54JjQna_1.png',
          import.meta.url
        ).href,
        title: '我想当风',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 7,
        url: new URL(
          '@/assets/newmusic/T002R300x300M00000165Mnr462Oz3_2.png',
          import.meta.url
        ).href,
        title: '氧气',
        name: '汤志凌',
        data: '03:04'
      },
      {
        id: 8,
        url: new URL(
          '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
          import.meta.url
        ).href,
        title: '周杰伦 · 翻开12月的回忆',
        name: '周杰伦',
        data: '03:04'
      },
      {
        id: 9,
        url: new URL(
          '@/assets/foryou/5bef2d9a8606f9ae54e18aabe152a732cc615e27_50f17.png',
          import.meta.url
        ).href,
        title: '芜湖',
        name: '芜湖',
        data: '03:04'
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
