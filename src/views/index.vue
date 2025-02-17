<script setup>
import { ref, onMounted } from 'vue'
import {Notebook, User} from "@element-plus/icons-vue";


</script>

<template>
  <div class="main">
    <div class="header">
      <span class="title">中国经济统计数据库</span>
      <div class="icons">
        <div class="icon">
          <el-icon><Notebook /></el-icon>
          <span>日志</span>
        </div>
        <div class="icon">
          <el-icon><User /></el-icon>
          <span>用户</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="left_column"></div>
      <div class="middle_column">
        <div class="map"></div>
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
  .header {
    position: relative;
    height: 60px;
    background-color: #1F2B3D;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-family: "PingFang SC", sans-serif;
    .title {
      color: #FFFFFF;
      margin-left: 20px;
      font-size: 25px;
      font-weight: 550;
      letter-spacing: 3px;
    }
    .icons {
      position: absolute;
      right: 20px;
      display: flex;
      align-content: center;
      .icon {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 2px;
        span {
          margin-left: 5px;
        }
      }
    }
  }
  .body {
    flex: 1;
    display: flex;
    .left_column {
      width: 200px;
      background-color: #f0f0f0;
    }
    .middle_column {
      flex: 1;
      display: flex;
      flex-direction: column;
      .map {
        flex: 1;
        background-color: #f0f0f0;
      }
      .bottom {
        height: 200px;
        background-color: #f0f0f0;
      }
    }
    .right_column {
      width: 200px;
      background-color: #f0f0f0;
    }
  }
}
</style>
