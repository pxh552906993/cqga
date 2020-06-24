<template>
  <div class="home">
    <div class="hheadtitle">重庆市公安局“10+X”智慧警务应用</div>
    <transition name="el-zoom-in-center">
      <index></index>
    </transition>
  </div>
</template>

<script>
import index from '@/views/home/index.vue'
export default {
  name: 'Home',
  components: {
    index
  }
}
</script>
<style lang="scss" scoped>
body{
  margin: 0;
  padding: 0;
}

.hv{
  width: 100%;
  height: auto;
  position:fixed;
  left: 0;
  top: 0;
  z-index: -2;
}
.home{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: absolute;
    background-image:url('../assets/home/bg.png');
    background-size:100% 100%;
    left: 0;
    top: 0;
    .hheadtitle{
      width: 100%;
      height: 12vh;
      position: absolute;
      background-image:url('../assets/home/title.png');
      background-size:100% 100%;
      line-height: 6vh;
      font-size: 40px;
      color: #fff;
      font-weight: 600;
      z-index: 1;
    }
    .h_bg2{
      position: fixed;
      left: 0;
      width: 100%;
      top: 23vh;
    }
}
</style>
