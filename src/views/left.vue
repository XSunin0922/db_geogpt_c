<script setup>
import {ref} from 'vue'

const indexes = ref()
const extents = ref()
const years = ref()

const props = ref({ multiple: true })
</script>

<template>
  <el-menu
      default-active="1"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Search /></el-icon>
        <span>数据库检索</span>
      </template>
      <el-menu-item class="search">
        <div class="jjzb_extent_year">
          <span>经济指标</span>
          <el-cascader
              style="width: 200px"
              placeholder="select"
              :options="indexOptions"
              :props="props"
              collapse-tags
              v-model="indexes"
              filterable clearable>
            <template #default="{ node, data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader>
        </div>
        <div class="jjzb_extent_year">
          <span>行政区划</span>
          <el-cascader
              style="width: 200px"
              placeholder="select"
              :options="extentOptions"
              :props="props"
              collapse-tags
              v-model="extents"
              filterable clearable>
          </el-cascader>
        </div>
        <div class="jjzb_extent_year">
          <span>统计年份</span>
          <el-date-picker
              style="width: 180px"
              start-placeholder="Start"
              end-placeholder="End"
              v-model="years"
              type="yearrange"
              range-separator="To"
          />
        </div>
        <div>
          <el-button type="info">重置</el-button>
          <el-button type="primary">检索</el-button>
        </div>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><PictureRounded /></el-icon>
        <span>地理要素分析</span>
      </template>
      <el-sub-menu>
        <template #title>11</template>
        <el-menu-item>22</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.search {
  height: 200px;
  display: flex;
  flex-direction: column;
  .jjzb_extent_year {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
}
</style>
