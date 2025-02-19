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
        <div class="bottom"></div>
      </div>
      <div class="right_column"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/colors.css";
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  .header {
    user-select: none;
    position: relative;
    height: 60px;
    background-color: #1F2B3D;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-content: center;
    justify-content: space-between;
    font-family: "PingFang SC", sans-serif;
    .title {
      color: #FFFFFF;
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
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
      }
    }
  }
  .body {
    flex: 1;
    display: flex;
    .left_column {
      overflow: auto;
      flex-shrink: 0;
      width: 350px;
      height: 100%;
    }
    .middle_column {
      height: 100%;
      width: calc(100% - 800px);
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: #f0f0f0;

      .map {
        height: 600px;
      }
      .bottom {
        height: calc(100% - 600px);
        background-color: #f0f0f0;
      }
    }
    .right_column {
      height: 100%;
      width: 450px;
      background-color: #f0f0f0;
    }
  }
}
</style>
