<template>
  <div class="container">
    <CommonLoading v-if="state.loading"></CommonLoading>
    <div class="content-view" v-else>
      <HomeTopBar></HomeTopBar>
      <div class="tab-bar">
        <div
          class="tab-bar-item"
          :class="{ active: item.code == state.selectedItem }"
          v-for="item in tabs"
          :key="item.id"
          @click="onClickTabItem(event, item)"
        >
          {{ item.title }}
        </div>
      </div>

      <div class="page-view">
        <div
          class="page-view-item"
          v-for="(item, index) in tabs"
          :key="item.id"
          v-show="item.code == state.selectedItem"
        >
          <component :is="componentNameForItem(item)"></component>
        </div>
      </div>
      <!-- <van-tabs shrink swipeable class="page-view">
        <van-tab v-for="item in tabs" :key="item.id" :title="item.title">
          <component :is="componentNameForItem(item)"></component>
        </van-tab>
      </van-tabs> -->
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, computed } from 'vue'

import HomeTopBar from '../components/Home/HomeTopBar.vue'
import CommonLoading from '../components/Loading/CommonLoading.vue'
import HomeView from '../views/HomeView.vue'
import FreeView from '../views/FreeView.vue'
import TopicView from '../views/TopicView.vue'
import HistoryView from '../views/HistoryView.vue'
import ActivityView from '../views/ActivityView.vue'
import MainFeatureView from '../views/MainFeatureView.vue'
const state = reactive({
  loading: false,
  model: null,
  selectedIndex: 3,
  selectedItem: 'EXPLORE_TOPIC'
})

/// 从服务端数据中返回tab数据
const tabs = computed(() => state.model?.data.displays[0].displayPages)

// 根据 code 返回不同的View
function componentNameForItem(item) {
  switch (item.code) {
    case 'EXPLORE_FEATURED':
      return HomeView
    case 'CHANNEL_FREE':
      return FreeView
    case 'EXPLORE_TOPIC':
      return TopicView
    case 'HISTORY':
      return HistoryView
    case 'ACTIVITY':
      return ActivityView
    case 'MAIN_FEATURED':
      return MainFeatureView
    default:
      return null
  }
}

// 点击顶部Tab时的回调
function onClickTabItem(event, item) {
  console.log('click item' + item.code)
  state.selectedItem = item.code
}

onMounted(async () => {
  // 加载状态设为true
  state.loading = true
  // debugger
  // 加载服务端数据
  const response = await fetch(
    'https://configuration.podoteng.com/v4/structure?packageName=net.daum.iphone.kakaowebtoon&region=chn&appVersion=3.1.0&platform=ios'
  )
  // 转对象
  const data = await response.json()

  console.log('[data]' + data)

  // 设置数据
  state.model = data

  // 加载状态恢复
  state.loading = false

  // const response = await axios.get('https://configuration.podoteng.com/v4/structure?packageName=net.daum.iphone.kakaowebtoon&region=chn&appVersion=3.1.0&platform=ios')
})
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .loading-view {
    display: none;
  }

  .content-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    width: 100%;
    // margin-top: 40px;

    // .tab-content {
    // width: 100%;
    // height: 100%;
    // }
    .tab-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      //   flex-wrap: nowrap;
      gap: 24px;
      //   width: 100%;
      height: 44px;
      overflow-x: scroll;
      padding: 0px 8px;

      .tab-bar-item {
        // margin: 0px 24px;

        text-align: center;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 600;
        line-height: 20px;

        white-space: nowrap;

        &.active {
          color: red;
        }
      }
    }
    .page-view {
      height: 100%;
      width: 100%;
      background-color: green;
      .page-view-item {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        background-color: yellow;
      }
    }
  }
}
</style>
