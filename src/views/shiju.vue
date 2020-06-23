<template>
  <div class="shiju">
    <div class="headtitle"></div>
    <v11></v11>
    <v21></v21>
    <v31></v31>
    <video class="v1"  autoplay muted loop>
        <source src="../assets/bg.mp4">
    </video>
  </div>
</template>>
<script>
import v11 from '@/components/v11/v11.vue'
import v21 from '@/components/v21/v21.vue'
import v31 from '@/components/v31/v31.vue'
export default {
  components: {
    v11,
    v21,
    v31
  }
}
</script>>
<style lang="scss" scoped>
body{
  margin: 0;
  padding: 0;
}
.v1{
  width: 100%;
  height: auto;
  position:fixed;
  left: 0;
  top: 0;
  z-index: -2;
}
.shiju{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: absolute;
    left: 0;
    top: 0;
    background-image:url('../assets/body.png')!important;
    background-size:100% 100%;
    .headtitle{
      width: 36vw;
      height: 6.6vh;
      position: absolute;
      left: 32vw;
      top: 18px;
      background-image:url('../assets/head.png')!important;
      background-size:100% 100%;
    }
}
</style>
