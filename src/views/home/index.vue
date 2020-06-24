<template>
  <div class="h_index">
    <video ref="hv" class="hv" autoplay muted loop>
        <source src="../../assets/bg2.mp4" type="video/mp4">
    </video>
    <video ref="hv2" class="hv2" autoplay muted loop>
        <source src="../../assets/home/bg3.mp4" type="video/mp4">
    </video>
    <surroundSelect @videoChange="videoChanges" v-if="sS"></surroundSelect>
    <homeDetail ref="mychild" :show="sS"></homeDetail>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import surroundSelect from '@/components/home/surroundSelect.vue'
import homeDetail from '@/components/home/homeDetail.vue'
export default {
  components: {
    surroundSelect,
    homeDetail
  },
  data () {
    return {
      sS: true
    }
  },
  computed: {
    ...mapState('home', [
      'homeData'
    ])
  },
  methods: {
    videoChanges (ky) {
      this.$refs.hv.classList.add('hv_a')
      this.$refs.hv2.classList.add('hv2_a')
      var _this = this
      setTimeout(function () {
        _this.sS = false
        _this.$refs.mychild.dataChange(ky)
      }, 1000)
    }
  },
  mounted () {
    console.log(this.sS, '3211')
  }
}
</script>
<style lang="scss" scoped>
 .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
    position: absolute;
    left: 45vw;
    top: 50vh;
  }
.hv{
  width: 100vw;
  height: auto;
  position:fixed;
  left: 0;
  top: 0;
  z-index: -2;
  opacity: 1;
}
.hv2{
  width: 100vw;
  height: auto;
  position:fixed;
  left: 0;
  top: 0;
  z-index: -3;
  opacity: 1;
}
.hv_a{
    animation:video 2s forwards;
   -webkit-animation:video 2s forwards; /*Safari and Chrome*/
}
.hv2_a{
    animation:video2 2s forwards;
   -webkit-animation:video2 2s forwards; /*Safari and Chrome*/
}
@keyframes video
{
  0% {
    opacity: 1;
  }
  100% {
    opacity:0;
  }
}

@-webkit-keyframes video /*Safari and Chrome*/
{
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
}
@keyframes video2
{
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes video2 /*Safari and Chrome*/
{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}
.h_index{
    position: fixed;
    width: 100%;
    height: 100vh;
    .groud_title1{
      position: relative;
      text-align: left;
      margin-left: 2vw;
      color: #fff;
      line-height: 2.5vh;
    }
    .groud_title2{
      position: relative;
      text-align: left;
      margin-left: 2vw;
      color: #fff;
      line-height: 2.5vh;
    }
    .h_index_groud1{
      width: 15vw;
      height: 3vh;
      position: absolute;
      top: 10vh;
      left: 3vw;
      background-image:url('../../assets/home/groudbg2.png');
      background-size:100% 100%;
    }
    .h_index_groud2{
      width: 22.7vw;
      height: 25.4vh;
      position: absolute;
      top: 68vh;
      left: 3vw;
      background-image:url('../../assets/home/groudbg.png');
      background-size:100% 100%;
    }
    .h_index_groud3{
      width: 15vw;
      height: 3vh;
      position: absolute;
      top: 10vh;
      right: 3vw;
      background-image:url('../../assets/home/groudbg2.png');
      background-size:100% 100%;
    }
    .h_index_groud4{
      width: 22.7vw;
      height: 25.4vh;
      position: absolute;
      top: 68vh;
      right: 3vw;
      background-image:url('../../assets/home/groudbg.png');
      background-size:100% 100%;
    }
}
</style>
