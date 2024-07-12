<script setup></script>

<template>
  <div class="myMusic">
    <div>我的音乐</div>
  </div>
</template>

<style lang="scss" scoped>
.myMusic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: white;
  div {
    font-size: 8em;
    background: linear-gradient(to right, #31c2a0, #31c27c);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
}
</style>
