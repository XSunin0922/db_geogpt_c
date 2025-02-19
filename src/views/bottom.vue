<script setup>
import {ref} from 'vue'
import {useLayersStore} from "../store/layers.js";
import { Search, Promotion } from '@element-plus/icons-vue'

const layersStore = useLayersStore();
const chatHistorySearch = ref('');
const msg = ref('');
const activeTab = ref('1');
</script>

<template>
  <div style="display: flex; height: 100%;">
    <div class="layer">
      <el-tabs v-model="activeTab" class="layer_header">
        <el-tab-pane label="图层管理" name="1">

        </el-tab-pane>
        <el-tab-pane label="计算结果" name="2">

        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="chat">
      <div class="chat_header">
        <span>GeoGPT</span>
      </div>
      <div class="history_conversation">
        <div class="history">
          <div class="search_new_chat">
            <el-button type="primary" circle>
              <el-icon><Plus /></el-icon>
            </el-button>
            <el-input
                v-model="chatHistorySearch"
                style="width: 70%;"
                placeholder="搜索记录"
                :suffix-icon="Search"
            />
          </div>
          <div class="history_list"></div>
        </div>
        <div class="conversation">
          <div class="conversation_window"></div>
          <div class="send_msg">
            <el-input
                placeholder="请输入消息"
                clearable
                v-model="msg"
                style="width: 85%"
            />
            <el-button type="primary" circle>
              <el-icon><Promotion /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .layer {
    width: 40%;
    border-right: 1px solid var(--el-menu-border-color);
    padding: 5px;
    .layer_header {
      letter-spacing: 2px;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
    }
  }
  .chat {
    margin-right: -5px;
    margin-top: -5px;
    margin-bottom: -5px;
    width: 60%;
    .chat_header {
      user-select: none;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .history_conversation {
      display: flex;
      height: 100%;
      .history {
        width: 30%;
        background-color: var(--el-color-info-light-8);
        .search_new_chat {
          margin: 5px;
          gap: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          height: 40px;
        }
        .history_list {
          overflow-y: auto;
          height: calc(100% - 33px);
        }
      }
      .conversation {
        width: 70%;
        .conversation_window {
          overflow-y: auto;
          background-color: var(--el-color-info-light-9);
          height: 220px;
        }
        .send_msg {
          height: 39px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-content: center;
        }
      }
    }
  }
</style>
