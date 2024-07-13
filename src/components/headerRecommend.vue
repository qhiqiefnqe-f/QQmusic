<script setup>
const items = [
  '首页',
  '歌手',
  '新碟',
  '排行榜',
  '分类歌单',
  '雷达',
  'MV',
  '数字专辑'
]
</script>

<template>
  <div class="headerRecommend">
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
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
  }
}
</style>
