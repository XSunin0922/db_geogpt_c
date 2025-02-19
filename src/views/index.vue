<script setup>
import { ref, onMounted } from 'vue'
import {Notebook, User} from "@element-plus/icons-vue";
import Map from "../components/Map.vue";
import left from "../views/left.vue";
import right from "../views/right.vue";
import bottom from "../views/bottom.vue";
import {useStatusStore} from "../store/status.js";

const statusStore = useStatusStore()
</script>

<template>
  <div class="main">
    <div class="header">
      <span class="title">中国经济统计数据库</span>
      <div class="icons">
        <div class="icon">
          <el-icon size="16"><Notebook /></el-icon>
          <span>日志</span>
        </div>
        <div class="icon">
          <el-icon size="16"><User /></el-icon>
          <span>用户</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="left_column"><left /></div>
      <div class="middle_column">
        <div class="map"><Map /></div>
        <div class="bottom"><bottom /></div>
      </div>
      <div class="right_column"><right /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/colors.css";
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  .header {
    user-select: none;
    position: relative;
    height: 60px;
    background-color: var(--color-secondary);
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-content: center;
    justify-content: space-between;
    font-family: "PingFang SC", sans-serif;
    .title {
      color: var(--text-primary);
      margin-left: 20px;
      font-size: 25px;
      font-weight: 550;
      letter-spacing: 3px;
    }
    .icons {
      margin-right: 20px;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      gap: 10px;
      .icon {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        color: var(--text-primary);
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
      }
    }
  }
  .body {
    height: calc(100% - 60px);
    display: flex;
    .left_column {
      overflow-y: auto;
      width: 350px;
      box-sizing: border-box;
      border-right: 2px solid var(--el-menu-border-color);
    }
    .middle_column {
      height: 100%;
      width: calc(100% - 800px);
      flex: 1;
      display: flex;
      flex-direction: column;
      .map {
        height: 600px;
      }
      .bottom {
        height: calc(100% - 600px);
        border-top: 2px solid var(--el-menu-border-color);
        box-sizing: border-box;
        padding: 5px;
      }
    }
    .right_column {
      border-left: 2px solid var(--el-menu-border-color);
      box-sizing: border-box;
      padding: 10px;
      overflow-y: auto;
      width: 450px;
    }
  }
}
/* 滚动条整体样式 */
::-webkit-scrollbar {
  width: 6px; /* 滚动条宽度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: var(--el-menu-bg-color); /* 轨道背景颜色 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #888; /* 滑块背景颜色 */
  border-radius: 4px; /* 滑块圆角 */
}

/* 滑块悬停时的样式 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 悬停时滑块背景颜色 */
}
</style>
