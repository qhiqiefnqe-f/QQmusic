<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const items = [
  { name: '音乐馆', path: '/musicHouse' },
  { name: '我的音乐', path: '/myMusic' },
  { name: '客户端', path: '/clientEnd' },
  { name: '开放平台', path: '/openPlatform' },
  { name: 'VIP', path: 'vipPart' }
]
const search = [
  { name: '离别开出花', data: '503.7万' },
  { name: '放纵', data: '503.3万' },
  { name: '与我无关', data: '405.9万' },
  { name: '若月亮没来', data: '364.2万' },
  { name: '2002年的第一场雪', data: '359.2万' }
]
const activeIndex = ref(0) // 使用ref来创建响应式数据
const isFocused = ref(false)
const showDropdown = ref(false)
const hoveringOverDropdown = ref(false)
let timeoutId = null // 用于跟踪setTimeout的ID

function setActive(index) {
  activeIndex.value = index // 更新响应式数据的值
  const item = items[index]
  router.push(item.path)
}
function handleMouseOut() {
  // 清除之前的setTimeout
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
  }
  // 使用setTimeout来延迟设置showDropdown，给鼠标时间从触发项移动到下拉框
  timeoutId = setTimeout(() => {
    if (!hoveringOverDropdown.value) {
      showDropdown.value = false
    }
  }, 1000) // 100毫秒的延迟，可以根据需要调整
}
</script>

<template>
  <div class="headerContainer">
    <div class="bigmain">
      <div class="musicTitle"></div>
      <ul class="topnav">
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: activeIndex === index }"
          @mouseover="index === 2 ? (showDropdown = true) : null"
          @mouseout="index === 2 ? (showDropdown = false) : null"
          @click="setActive(index)"
        >
          {{ item.name }}
          <div
            v-if="index === 2 && showDropdown"
            class="khd-dropdown"
            @mouseover="showDropdown = true"
            @mouseout="handleMouseOut()"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#31c27c"
                  d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.5 8.25V9H6v6h1.5v-2.25h2V15H11V9H9.5v2.25zM16.25 15H17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.75v1.5h1.5zm-1.75-4.5h2v3h-2z"
                />
              </svg>
              HQ高品质&nbsp;全员开启&nbsp;&nbsp;
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#31c27c"
                  d="m23.556 14.346l-1.194-1.173a.841.841 0 0 1 .604-1.445h.59a.346.346 0 0 0 .349-.343v-.636H18.97a1.49 1.49 0 0 0-1.507 1.477v.003c0 .396.16.775.444 1.05l1.201 1.18a.841.841 0 0 1-.604 1.446h-1.849a1.306 1.306 0 0 1-1.317-1.294v-2.876h1.135a.346.346 0 0 0 .35-.343v-.636h-1.485V7.587l-3.866 1.66v1.494h-1.87V7.123h-2.87a.986.986 0 0 0-.997.98v2.638H3.67C1.514 10.741 0 11.893 0 13.81c0 1.71 1.776 3.068 3.676 3.068h4.615a1.306 1.306 0 0 0 1.318-1.294v-3.855h1.863v2.503c0 1.423.874 2.646 2.65 2.646h8.371A1.49 1.49 0 0 0 24 15.4v-.003a1.44 1.44 0 0 0-.444-1.051M5.729 15.683a.217.217 0 0 1-.219.214h-.13c-1.34 0-1.835-.908-1.85-2.088c.015-1.216.525-2.088 1.85-2.088h.349z"
                />
              </svg>
              独家音效&nbsp;全面升级&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#31c27c"
                  d="m6 10.95l-1 .55q-.35.2-.75.1t-.6-.45l-2-3.5q-.2-.35-.1-.75T2 6.3L7.75 3H9.5q.225 0 .363.138T10 3.5V4q0 .825.588 1.413T12 6t1.413-.587T14 4v-.5q0-.225.138-.363T14.5 3h1.75L22 6.3q.35.2.45.6t-.1.75l-2 3.5q-.2.35-.588.438T19 11.475l-1-.5V20q0 .425-.288.713T17 21H7q-.425 0-.712-.288T6 20z"
                />
              </svg>
              轻盈视觉&nbsp;动态皮肤&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <button>下载体验</button>
          </div>
        </li>
      </ul>
      <div class="inputContainer">
        <input
          class="searchInput"
          placeholder="搜索音乐,MV,歌单，用户"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
        <svg
          class="input-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#666666"
            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7"
          />
        </svg>
        <div v-if="isFocused" class="dropdown">
          <ul>
            <li v-for="(item, index) in search" :key="index">
              <div class="itemname">
                <h2>&nbsp;&nbsp;{{ index + 1 }}</h2>
                &nbsp;&nbsp;{{ item.name }}
              </div>

              <div class="itemdata">{{ item.data }}&nbsp;&nbsp;</div>
            </li>
          </ul>
          <div class="searchHistory">
            历史搜索
            <svg
              class="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="#999999"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path d="M9 10v34h30V10z" />
                <path stroke-linecap="round" d="M20 20v13m8-13v13M4 10h40" />
                <path d="m16 10l3.289-6h9.488L32 10z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="login">登录</div>
      <button class="vip">
        开通VIP
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path fill="#ffffff" d="m12 15l-5-5h10z" />
        </svg>
      </button>
      <button class="pay">
        充值
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="m12 15l-5-5h10z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pay {
  margin-left: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7%;
  height: 40px;
  background-color: white;
  color: black;
  --svg-fill-color: black; /* 定义默认的SVG颜色 */
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  svg {
    fill: var(--svg-fill-color); /* 使用CSS变量作为填充颜色 */
  }
  &:hover {
    background-color: #31c27c;
    color: white;
    --svg-fill-color: white; /* 鼠标悬停时改变SVG颜色 */
  }
  &:hover svg {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }
}
button.vip {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.5%;
  height: 40px;
  background-color: #31c27c;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  &:hover svg {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }
}
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 6%;
  cursor: pointer;
  &:hover {
    color: #31c27c; // 鼠标悬停时的文字颜色
  }
}
.khd-dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 160px; /* 或根据需要调整 */
  height: 160px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px #c9c9c9;
  top: 77%;
  left: 44%;
  div {
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 23%;
    font-size: 11px;
    color: black;
    svg {
      height: 23px;
      width: 23px;
      margin-left: 10px;
    }
  }
  button {
    width: 70%;
    height: 15%;
    background-image: linear-gradient(to right, #31c2a0, #31c27c);
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }
}
.search-icon {
  cursor: pointer;

  height: 20px; /* 根据SVG图标的大小调整 */
  width: 20px; /* 根据SVG图标的大小调整 */
  &:hover path {
    stroke: #31c27c; // 鼠标悬停时的颜色
  }
}
.searchHistory {
  height: 20%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #666666;
  margin-left: 0.7em;
}
.dropdown {
  display: flex;
  flex-direction: column;
  /* 样式调整 */
  position: absolute;
  width: 218px; /* 或根据需要调整 */
  height: 260px;
  background-color: white;
  border: 1px solid #c9c9c9;

  /* 确保下拉框位于输入框下方 */
  top: 69%;
  left: 8%;
  ul {
    height: 80%;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      height: 20%;
      width: 100%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      font-size: 15px;
      &:hover {
        background-color: #31c27c;
        color: white; // 鼠标悬停时的背景颜色
        h2 {
          color: white;
        }
      }
      h2 {
        color: #ff5129;
        font-size: 15px;
        font-weight: 400;
      }
      .itemname {
        display: flex;
        align-items: center;
      }
      .itemdata {
        color: #666666;
        font-size: 13px;
        font-weight: 300;
      }
    }
  }
}
.input-icon {
  cursor: pointer;
  position: absolute;
  right: 10px; /* 根据需要调整 */
  height: 20px; /* 根据SVG图标的大小调整 */
  width: 20px; /* 根据SVG图标的大小调整 */
  &:hover path {
    fill: #31c27c; // 鼠标悬停时的颜色
  }
}
.inputContainer {
  height: 100px;
  width: 20%;
  position: relative;
  display: flex;
  align-items: center;
}
.searchInput {
  padding-left: 15px;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  margin-left: 1.5em;
  height: 35px;
  width: 200px;
  background: white;
  &:focus {
    outline: none;
  }
}
.topnav {
  position: relative;
  margin-left: 1em;
  padding: 0;
  display: flex;
  height: 100%;
  width: 40%;
  background: white;
  li {
    font-size: 19px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
    background-color: white;
    &:hover {
      color: #31c27c; // 鼠标悬停时的文字颜色
    }
    &.active {
      background-color: #31c27c;
      color: white;
    }
  }
}
.bigmain {
  display: flex;
  align-items: center;
  height: 90px;
  background: white;
  width: 95%;
}
.headerContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
  background-color: white;
  border-bottom: 0.6px solid #c9c9c9;
}

.musicTitle {
  margin-left: 5px;
  height: 60px;
  width: 180px;
  background-image: url('../assets/11.18：39：03.png'); // 设置另一背景图片
  background-size: cover; // 覆盖整个元素区域
  background-position: center; // 图片居中显示
  background-repeat: no-repeat; // 不重复图片
}
</style>
