<script setup>
import { ref, onMounted } from 'vue'


</script>

<template>
  <div class="main">
    <div class="header"></div>
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
    height: 50px;
    background-color: #1F2B3D;
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
