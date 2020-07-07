<template>
  <div class="shiju">
    <div class="headtitle">重庆市公安局数据资源中心</div>
    <div class="headtitle2"><img src="../assets/shiju2/icon3.png" style="margin: -5px 10px">数据上云统计</div>
    <div class="headtitle3"><img src="../assets/shiju2/icon2.png" style="margin: -5px 10px">资源申请分析</div>
    <v11></v11>
    <v21></v21>
    <v31></v31>
    <video class="v1"  autoplay muted loop>
        <source src="../assets/shiju2bg2.mp4">
    </video>
  </div>
</template>>
<script>
import v11 from '@/components/shiju2/v11/v11.vue'
import v21 from '@/components/shiju2/v21/v21.vue'
import v31 from '@/components/shiju2/v31/v31.vue'
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
    .headtitle{
      width: 47.8vw;
      height: 13.6vh;
      position: absolute;
      left: 26vw;
      background-image:url('../assets/shiju2/head.png');
      background-size:100% 100%;
      font-family: MicrosoftYaHei-Bold;
      font-size: 36px;
      color: #D0F6FF;
      letter-spacing: 2px;
      text-align: center;
      text-shadow: 0 3px 4px #03162C;
      line-height: 7.6vh
    }
    .headtitle2{
      width: 20.5vw;
      height: 11.2vh;
      position: absolute;
      right: 0;
      background-image:url('../assets/shiju2/head2.png');
      background-size:100% 100%;
      font-family: MicrosoftYaHei;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 2px;
      line-height: 6vh
    }
    .headtitle3{
      width: 20.5vw;
      height: 11.2vh;
      position: absolute;
      left: 0;
      background-image:url('../assets/shiju2/head3.png');
      background-size:100% 100%;
      font-family: MicrosoftYaHei;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 2px;
      line-height: 6vh
    }
}
</style>
