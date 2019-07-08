<template>
  <div class="front">
   <!-- 这里是头部 -->
   <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 左侧 -->
        <app-silder></app-silder>
        <!-- 右侧 -->
        <!-- <hero-list></hero-list> -->
        <!-- 路由对应组件位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppSilder from './components/AppSilder';

export default {
  name: "app",
  //注册组件
  components: {
    AppHeader,
    AppSilder,
    
  }
};
</script>

<style>
</style>
