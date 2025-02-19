<script setup>
import {ref} from 'vue'

const indexes = ref([])
const extents = ref([])
const years = ref([])

const props = ref({ multiple: true })

const handleReset = () => {
  indexes.value = []
  extents.value = []
  years.value = []
}
</script>

<template>
  <el-menu
      :default-openeds="['1', '2', '3']"
      style="user-select: none"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Search /></el-icon>
        <span>数据库检索</span>
      </template>
      <el-menu-item index="1-1" class="search">
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
          <el-button type="info" @click="handleReset">重置</el-button>
          <el-button type="primary" style="margin-left: 15px">检索</el-button>
        </div>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><View /></el-icon>
        <span>可视化分析</span>
      </template>
      <el-sub-menu index="2-1">
        <template #title>断面分析</template>
        <el-menu-item></el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-2">
        <template #title>柱状分析</template>
        <el-menu-item></el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><PictureRounded /></el-icon>
        <span>地理要素分析</span>
      </template>
      <el-sub-menu index="3-1">
        <template #title>空间统计分析</template>
        <el-menu-item>全局Moran's I指数</el-menu-item>
        <el-menu-item>Getis-Ord Gi* 热点分析</el-menu-item>
        <el-menu-item>地理加权回归(GWR)</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3-2">
        <template #title>高级分析模型</template>
        <el-menu-item>马尔科夫链预测</el-menu-item>
        <el-menu-item>空间溢出模型</el-menu-item>
        <el-menu-item>经济韧性指数</el-menu-item>
        <el-menu-item>地理探测器</el-menu-item>
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
