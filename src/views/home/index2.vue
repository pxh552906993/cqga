<template>
  <div class="h_index">
    <div class="hheadtitle" @click="videoChanges2">重庆市公安局“10+X”智慧警务应用</div>
    <video ref="hv" class="hv" autoplay muted loop>
        <source src="../../assets/bg3.mp4" type="video/mp4">
    </video>
    <video ref="hv2" class="hv2" autoplay muted loop>
        <source src="../../assets/home/bg3.mp4" type="video/mp4">
    </video>
    <transition name="el-zoom-in-top">
      <div class="h_index2_groud2" v-if="show">
        <div class="index2_groud_title1">十智介绍</div>
        <div class="groud_content2">
        </div>
      </div>
    </transition>
    <surroundSelect ref="mychild2" @videoChange="videoChanges" v-if="sS" :typeData="'index2'"></surroundSelect>
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
      sS: true,
      show: true
    }
  },
  computed: {
    ...mapState('home', [
      'homeData'
    ])
  },
  methods: {
    videoChanges (ky) {
      this.$refs.hv.classList.remove('hv_a2')
      this.$refs.hv2.classList.remove('hv2_a2')
      this.$refs.hv.classList.add('hv_a')
      this.$refs.hv2.classList.add('hv2_a')
      var _this = this
      this.show = false
      setTimeout(function () {
        _this.sS = false
        _this.$refs.mychild.dataChange(ky)
      }, 1000)
    },
    videoChanges2 () {
      if (!this.sS) {
        this.$refs.hv.classList.remove('hv_a')
        this.$refs.hv2.classList.remove('hv2_a')
        this.$refs.hv.classList.add('hv_a2')
        this.$refs.hv2.classList.add('hv2_a2')
        // var _this = this
        this.sS = true
        this.show = true
        // setTimeout(function () {
        //   _this.$refs.mychild2.changeData2()
        // }, 1000)
      }
    }
  },
  mounted () {
    console.log(this.sS, '3211')
  }
}
</script>
<style scoped>
.groud_content2::-webkit-scrollbar {/*滚动条整体样式*/

        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/

        height: 1px;

    }

.groud_content2::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        background: rgba(5,80,140,.6);

    }

.groud_content2::-webkit-scrollbar-track {/*滚动条里面轨道*/

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: rgba(0,0,0,0.2);

}
</style>
<style lang="scss" scoped>
.hheadtitle{
    width: 100%;
    height: 12vh;
    position: absolute;
    background-image:url('../../assets/home/title.png');
    background-size:100% 100%;
    line-height: 6vh;
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    z-index: 1;
    cursor: pointer;
}
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
.hv_a2{
    animation:videoC 2s forwards;
   -webkit-animation:videoC 2s forwards; /*Safari and Chrome*/
}
.hv2_a2{
    animation:videoC2 2s forwards;
   -webkit-animation:videoC2 2s forwards; /*Safari and Chrome*/
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
@keyframes video2
{
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes videoC /*Safari and Chrome*/
{
  0% {
    opacity:1;
  }
  100% {
    opacity:1;
  }
}
@keyframes videoC
{
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes videoC2 /*Safari and Chrome*/
{
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
}
@keyframes videoC2
{
  0% {
    opacity: 1;
  }
  100% {
    opacity:0;
  }
}
.h_index{
    position: fixed;
    width: 100%;
    height: 100vh;
    .index2_groud_title1{
      position: relative;
      font-size: 22px;
      font-weight: 600;
      width: 2%;
      text-align: center;
      height: 95%;
      color: #35faff;
      line-height: 3.5vh;
      background-image:url('../../assets/home/toptitle.png');
      background-size:100% 100%;
    }
    .groud_content2{
      text-align: left;
      overflow-y: scroll;
      height: 90%;
      font-size: 20px;
      color: #fff;
      line-height: 3vh;
      width: 95%;
      word-break: break-all;
      margin-left: 1vw;
      margin-top: 1vh;
      text-align: left;
      letter-spacing: 4px;
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
    .h_index2_groud2{
      width: 92vw;
      height: 15vh;
      background-image:url('../../assets/home/topbg.png');
      background-size:100% 100%;
      position: relative;
      top: 10vh;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
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
