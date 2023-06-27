<template>
  <div class="container">
    <CommonLoading v-if="state.loading"></CommonLoading>
    <div class="content-view" v-else>
      <HomeTopBar></HomeTopBar>
      <van-tabs shrink="">
        <van-tab v-for="item in tabs" :key="item.id" :title="item.title">
          <component :is="componentNameForItem(item)"></component>
        </van-tab>
      </van-tabs>
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
const state = reactive({
  loading: false,
  model: null
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
    default:
      return null
  }
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
    justify-content: stretch;
  }
}
</style>
