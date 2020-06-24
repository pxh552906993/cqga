<template>
  <div class="ui_base u_p3d">
    <img v-if="earth" class="u_p3d_earth" src="../../assets/home/ball.png">
    <div class="base u_p3d">
      <!-- <div class="pan"></div> -->
      <!-- <div class="ball_base u_p3d ball_1" @click="changeData('kx')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智侦</div></div>
      </div>
      <div class="ball_base u_p3d ball_3" @click="changeData('za')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智防</div></div>
      </div>
      <div class="ball_base u_p3d ball_6" @click="changeData('xz')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智监</div></div>
      </div>
      <div class="ball_base u_p3d ball_9" @click="changeData('kx')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智指</div></div>
      </div> -->
      <div class="ball_base u_p3d ball_1" @click="changeData('智学')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智学</div></div>
      </div>
      <div class="ball_base u_p3d ball_2" @click="changeData('智训')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智训</div></div>
      </div>
      <div class="ball_base u_p3d ball_3" @click="changeData('智控')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智控</div></div>
      </div>
      <div class="ball_base u_p3d ball_4" @click="changeData('智管')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智管</div></div>
      </div>
      <div class="ball_base u_p3d ball_5" @click="changeData('智治')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智治</div></div>
      </div>
      <div class="ball_base u_p3d ball_6" @click="changeData('智服')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智服</div></div>
      </div>
      <div class="ball_base u_p3d ball_7" @click="changeData('智侦')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智侦</div></div>
      </div>
      <div class="ball_base u_p3d ball_8" @click="changeData('智防')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智防</div></div>
      </div>
      <div class="ball_base u_p3d ball_9" @click="changeData('智监')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智监</div></div>
      </div>
      <div class="ball_base u_p3d ball_10" @click="changeData('智指')" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="ball"><div class="ball_font2">智指</div></div>
      </div>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      index: true,
      earth: false
    }
  },
  computed: {
    ...mapState('home', [
      'collects'
    ])
  },
  methods: {
    ...mapActions('home', [
      'invokeGetDatas'
    ]),
    changeData (key) {
      this.index = false
      this.invokeGetDatas(key)
      var _this = this
      setTimeout(function () {
        _this.earth = true

        _this.$emit('videoChange', key)
      }, 1000)
      document.querySelectorAll('.ball_base3').forEach((item, index, arr) => {
        item.classList.add('ball_base_a3')
      })
      document.querySelectorAll('.ball_base2').forEach((item, index, arr) => {
        item.classList.add('ball_base_a2')
      })
      document.querySelectorAll('.ball_base').forEach((item, index, arr) => {
        item.classList.add('ball_base_a')
      })
    },
    mouseOver () {
      document.querySelectorAll('.ball').forEach((item, index, arr) => {
        item.classList.add('ball_base_select')
      })
      document.querySelectorAll('.base').forEach((item, index, arr) => {
        item.classList.add('base_select')
      })
    },
    mouseLeave () {
      document.querySelectorAll('.ball').forEach((item, index, arr) => {
        item.classList.remove('ball_base_select')
      })
      document.querySelectorAll('.base').forEach((item, index, arr) => {
        item.classList.remove('base_select')
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
// @-webkit-keyframes cir1 {
//   0% {
//     -webkit-transform: rotateY(0deg) rotateZ(0deg);
//   }
//   100% {
//     -webkit-transform: rotateY(-360deg) rotateZ(0deg);
//   }
// }
// @keyframes cir1 {
//   0% {
//     transform: rotateY(0deg) rotateZ(0deg);
//   }
//   100% {
//     transform: rotateY(-360deg) rotateZ(0deg);
//   }
// }
// @-webkit-keyframes cir2 {
//   0% {
//     -webkit-transform: rotateY(-60deg) rotateZ(0deg);
//   }
//   100% {
//     -webkit-transform: rotateY(-420deg) rotateZ(0deg);
//   }
// }
// @keyframes cir2 {
//   0% {
//     transform: rotateY(-60deg) rotateZ(0deg);
//   }
//   100% {
//     transform: rotateY(-420deg) rotateZ(0deg);
//   }
// }
// @-webkit-keyframes cir3 {
//   0% {
//     -webkit-transform: rotateY(-120deg) rotateZ(0deg);
//   }
//   100% {
//     -webkit-transform: rotateY(-480deg) rotateZ(0deg);
//   }
// }
// @keyframes cir3 {
//   0% {
//     transform: rotateY(-120deg) rotateZ(0deg);
//   }
//   100% {
//     transform: rotateY(-480deg) rotateZ(0deg);
//   }
// }
// @-webkit-keyframes cir4 {
//   0% {
//     -webkit-transform: rotateY(-180deg) rotateZ(0deg);
//   }
//   100% {
//     -webkit-transform: rotateY(-540deg) rotateZ(0deg);
//   }
// }
// @keyframes cir4 {
//   0% {
//     transform: rotateY(-180deg) rotateZ(0deg);
//   }
//   100% {
//     transform: rotateY(-540deg) rotateZ(0deg);
//   }
// }
// @-webkit-keyframes cir5 {
//   0% {
//     -webkit-transform: rotateY(-240deg) rotateZ(0deg);
//   }
//   100% {
//     -webkit-transform: rotateY(-600deg) rotateZ(0deg);
//   }
// }
// @keyframes cir5 {
//   0% {
//     transform: rotateY(-240deg) rotateZ(0deg);
//   }
//   100% {
//     transform: rotateY(-600deg) rotateZ(0deg);
//   }
// }
// @-webkit-keyframes cir6 {
//   0% {
//     -webkit-transform: rotateY(-300deg) rotateZ(0deg);
//   }
//   100% {
//     -webkit-transform: rotateY(-660deg) rotateZ(0deg);
//   }
// }
// @keyframes cir6 {
//   0% {
//     transform: rotateY(-300deg) rotateZ(0deg);
//   }
//   100% {
//     transform: rotateY(-660deg) rotateZ(0deg);
//   }
// }
@-webkit-keyframes cir1 {
  0% {
    -webkit-transform: rotateY(0deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-360deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir1 {
  0% {
    transform: rotateY(0deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-360deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir2 {
  0% {
    -webkit-transform: rotateY(-36deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-396deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir2 {
  0% {
    transform: rotateY(-36deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-396deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir3 {
  0% {
    -webkit-transform: rotateY(-72deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-432deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir3 {
  0% {
    transform: rotateY(-72deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-432deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir4 {
  0% {
    -webkit-transform: rotateY(-108deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-468deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir4 {
  0% {
    transform: rotateY(-108deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-468deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir5 {
  0% {
    -webkit-transform: rotateY(-144deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-504deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir5 {
  0% {
    transform: rotateY(-144deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-504deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir6 {
  0% {
    -webkit-transform: rotateY(-180deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-540deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir6 {
  0% {
    transform: rotateY(-180deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-540deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir7 {
  0% {
    -webkit-transform: rotateY(-216deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-576deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir7 {
  0% {
    transform: rotateY(-216deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-576deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir8 {
  0% {
    -webkit-transform: rotateY(-252deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-612deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir8 {
  0% {
    transform: rotateY(-252deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-612deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir9 {
  0% {
    -webkit-transform: rotateY(-288deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-648deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir9 {
  0% {
    transform: rotateY(-288deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-648deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir10 {
  0% {
    -webkit-transform: rotateY(-324deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    -webkit-transform: rotateY(-684deg) rotateZ(0deg) rotateX(45deg);
  }
}
@keyframes cir10 {
  0% {
    transform: rotateY(-324deg) rotateZ(0deg) rotateX(45deg);
  }
  100% {
    transform: rotateY(-684deg) rotateZ(0deg) rotateX(45deg);
  }
}
@-webkit-keyframes cir21 {
  0% {
    -webkit-transform: rotateY(0deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-360deg) rotateZ(0deg);
  }
}
@keyframes cir21 {
  0% {
    transform: rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-360deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir22 {
  0% {
    -webkit-transform: rotateY(-90deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-450deg) rotateZ(0deg);
  }
}
@keyframes cir22 {
  0% {
    transform: rotateY(-90deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-450deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir23 {
  0% {
    -webkit-transform: rotateY(-180deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-540deg) rotateZ(0deg);
  }
}
@keyframes cir23 {
  0% {
    transform: rotateY(-180deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-540deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir24 {
  0% {
    -webkit-transform: rotateY(-270deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-630deg) rotateZ(0deg);
  }
}
@keyframes cir24 {
  0% {
    transform: rotateY(-270deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-630deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir31 {
  0% {
    -webkit-transform: rotateY(-50deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-410deg) rotateZ(0deg);
  }
}
@keyframes cir31 {
  0% {
    transform: rotateY(-50deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-410deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir32 {
  0% {
    -webkit-transform: rotateY(-110deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-470deg) rotateZ(0deg);
  }
}
@keyframes cir32 {
  0% {
    transform: rotateY(-110deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-470deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir33 {
  0% {
    -webkit-transform: rotateY(-170deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-530deg) rotateZ(0deg);
  }
}
@keyframes cir33 {
  0% {
    transform: rotateY(-170deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-530deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir34 {
  0% {
    -webkit-transform: rotateY(-230deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-590deg) rotateZ(0deg);
  }
}
@keyframes cir34 {
  0% {
    transform: rotateY(-230deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-590deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir35 {
  0% {
    -webkit-transform: rotateY(-290deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-650deg) rotateZ(0deg);
  }
}
@keyframes cir35 {
  0% {
    transform: rotateY(-290deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-650deg) rotateZ(0deg);
  }
}
@-webkit-keyframes cir36 {
  0% {
    -webkit-transform: rotateY(-350deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateY(-710deg) rotateZ(0deg);
  }
}
@keyframes cir36 {
  0% {
    transform: rotateY(-350deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(-710deg) rotateZ(0deg);
  }
}
@keyframes cir {
  0% {
    transform: rotateX(60deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-360deg);
  }
}
@keyframes cir_p {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}
@-webkit-keyframes cir {
  0% {
    -webkit-transform: rotateX(80deg) rotateY(-10deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(80deg) rotateY(-10deg) rotateZ(-360deg);
  }
}
@-webkit-keyframes cir_p {
  0% {
    -webkit-transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
  }
}

.u_p3d{
    -webkit-transform-style: preserve-3d !important;
    transform-style: preserve-3d !important;
}
.u_p3d_earth{
    position: static;
    margin-top: 35vh;
    animation:earthmove 1s forwards;
   -webkit-animation:earthmove 1s forwards; /*Safari and Chrome*/
}
@keyframes earthmove
{
  0% {
    margin-top: 35vh;
    opacity:1;
  }
  100% {
    margin-top: 100vh;
    opacity:0;
    display: none;
  }
}

@-webkit-keyframes earthmove /*Safari and Chrome*/
{
  0% {
    -webkit-transform-origin:24.8vw 0px;
    transform-origin: 20.8vw 0px;
    left:0vw;
    position: absolute;
    opacity:1;
  }
  100% {
    -webkit-transform-origin:0vw 0px;
    transform-origin: 0vw 0px;
    left:24.8vw;
    position: absolute;
    opacity:0;
  }
}
.ui_base {
    position: relative;
    width: 60vw;
    height: 0px;
    margin:0 auto;
    -webkit-perspective: 50vw;
    -webkit-perspective-origin: 50% 0%;
    perspective: 300vw;
    perspective-origin: 50% 0%;
}
.base{
    -webkit-transform: rotateX(103deg) rotateY(0deg);
    transform: rotateX(103deg) rotateY(0deg);
    position: fixed;
    width: 60vw;
    height: 60vw;
    top: -10vh;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: cir 48s linear 0s infinite;
    // border: 1px solid red
}
.base2{
    display: none;
    -webkit-transform: rotateX(103deg) rotateY(0deg);
    transform: rotateX(103deg) rotateY(0deg);
    position: fixed;
    width: 450px;
    height: 450px;
    top: 330px;
    left: 244px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: cir 8s linear 0s infinite;
}
.base3{
    display: none;
    -webkit-transform: rotateX(103deg) rotateY(0deg);
    transform: rotateX(103deg) rotateY(0deg);
    position: fixed;
    width: 675px;
    height: 675px;
    top: 165px;
    left: 124px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    animation: cir 12s linear 0s infinite;
}
.base_select{
    animation-play-state:paused!important;
}
.ball_base {
    -webkit-transform-origin: 100%;
    transform-origin: 30vw 0px;
    position: absolute;
    top: 53vh;
    width: 20vh;
    height: 127px;
}
.ball_base_a {
    animation:mymove3 1s forwards;
   -webkit-animation:mymove3 1s  forwards; /*Safari and Chrome*/
}

@keyframes mymove3
{
  0% {
    -webkit-transform-origin:309vw 0px;
    transform-origin: 30vw 0px;
    left:0vw;
    position: absolute;
    opacity:1;
  }
  100% {
    -webkit-transform-origin:0vw 0px;
    transform-origin: 0vw 0px;
    left:30vw;
    position: absolute;
    opacity:0;
  }
}

@-webkit-keyframes mymove3 /*Safari and Chrome*/
{
  0% {
    -webkit-transform-origin:27.5vw 0px;
    transform-origin: 27.5vw 0px;
    left:0vw;
    position: absolute;
    opacity:1;
  }
  100% {
    -webkit-transform-origin:0vw 0px;
    transform-origin: 0vw 0px;
    left:27vw;
    position: absolute;
    opacity:0;
  }
}
.ball_base3 {
    -webkit-transform-origin:24.8vw 0px;
    transform-origin: 20.8vw 0px;
    position: absolute;
    top: 44.5vh;
    width: 17.5vw;
    height: 11.7vh;
}
.ball_base_a3 {
    animation:mymove 2s forwards;
   -webkit-animation:mymove 2s  forwards; /*Safari and Chrome*/
}
@keyframes mymove
{
  0% {
    -webkit-transform-origin:24.8vw 0px;
    transform-origin: 20.8vw 0px;
    left:0vw;
    position: absolute;
    opacity:1;
  }
  100% {
    -webkit-transform-origin:0vw 0px;
    transform-origin: 0vw 0px;
    left:24.8vw;
    position: absolute;
    opacity:0;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/
{
  0% {
    -webkit-transform-origin:24.8vw 0px;
    transform-origin: 20.8vw 0px;
    left:0vw;
    position: absolute;
    opacity:1;
  }
  100% {
    -webkit-transform-origin:0vw 0px;
    transform-origin: 0vw 0px;
    left:24.8vw;
    position: absolute;
    opacity:0;
  }
}
.ball_base2 {
    -webkit-transform-origin: 16.9vw 0px;
    transform-origin: 16.9vw 0px;
    position: absolute;
    top: 44.6vh;
    left: 6.5vw;
    width: 11.7vw;
    height: 11.7vh;
}

.ball_base_a2 {
    animation:mymove2 2s forwards;
   -webkit-animation:mymove2 2s  forwards; /*Safari and Chrome*/
}
@keyframes mymove2
{
  0% {
    -webkit-transform-origin:16.9vw 0px;
    transform-origin: 20.8vw 0px;
    left: 6.5vw;
    position: absolute;
    opacity:1;
  }
  100% {
    -webkit-transform-origin:0vw 0px;
    transform-origin: 0vw 0px;
    left:24.8vw;
    position: absolute;
    opacity:0;
  }
}

@-webkit-keyframes mymove2 /*Safari and Chrome*/
{
  0% {
    -webkit-transform-origin:16.9vw 0px;
    transform-origin: 20.8vw 0px;
    left: 6.5vw;
    position: absolute;
    opacity:1;
  }
  100% {
    -webkit-transform-origin:0vw 0px;
    transform-origin: 0vw 0px;
    left:24.8vw;
    position: absolute;
    opacity:0;
  }
}
.ball{
  -webkit-transition:all 2s ease-out 0ms;
  transition:all 2s ease-out 0ms;
  -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  position: absolute;
  width: 170px;
  height: 250px;
  text-align: center;
  background-image: url(../../assets/home/ball.png);
  background-size: 100% 100%;
  left: 0px;
  top: 0px;
  color: rgba(255, 255, 255, 0);
  font-size: 12px;
  opacity: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ball:hover{
  -webkit-transition:all 2s ease-out 0ms;
  transition:all 2s ease-out 0ms;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  position: absolute;
  width: 170px;
  height: 250px;
  text-align: center;
  background-image: url(../../assets/home/ball_a.png);
  background-size: 100% 100%;
  left: 0px;
  top: 0px;
  color: rgba(255, 255, 255, 0);
  font-size: 12px;
  opacity: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ball_c {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    position: absolute;
    width: 157px;
    height: 157px;
    line-height: 157px;
    text-align: center;
    background-image: url(../../assets/img2/ball_center.png);
    left: 90px;
    top: 50px;
    color: #fff;
    font-size: 24px;
}

.pan {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img2/c.png");
    background-size: 100% 100%;
    -webkit-animation: cir_p 5s linear 0s infinite;
    animation: cir_p 5s linear 0s infinite;
}

.ball {
    color: #fff;
    opacity: 1;
}

// .ball_1 .ball {
//   transform: rotateY(10deg) rotateZ(10deg);
//   animation: cir1 10s linear 0s infinite;
//   -webkit-transition-delay: 1100ms !important;
//   transition-delay: 1100ms !important;
// }
// .ball_2 .ball {
//   -webkit-animation: cir2 10s linear 0s infinite;
//   animation: cir2 10s linear 0s infinite;
//   -webkit-transition-delay: 900ms !important;
//   transition-delay: 900ms !important;
// }
// .ball_3 .ball {
//   -webkit-animation: cir3 10s linear 0s infinite;
//   animation: cir3 10s linear 0s infinite;
//   -webkit-transition-delay: 700ms !important;
//   transition-delay: 700ms !important;
// }
// .ball_4 .ball {
//   -webkit-animation: cir4 10s linear 0s infinite;
//   animation: cir4 10s linear 0s infinite;
//   -webkit-transition-delay: 500ms !important;
//   transition-delay: 500ms !important;
// }
// .ball_5 .ball {
//   -webkit-animation: cir5 10s linear 0s infinite;
//   animation: cir5 10s linear 0s infinite;
//   -webkit-transition-delay: 300ms !important;
//   transition-delay: 300ms !important;
// }
// .ball_6 .ball {
//   -webkit-animation: cir6 10s linear 0s infinite;
//   animation: cir6 10s linear 0s infinite;
//   -webkit-transition-delay: 100ms !important;
//   transition-delay: 100ms !important;
// }

.ball_1 .ball {
  transform: rotateY(10deg) rotateZ(10deg) rotateX(60deg);
  animation: cir1 48s linear 0s infinite;
  -webkit-transition-delay: 1700ms !important;
  transition-delay: 1700ms !important;
}
.ball_2 .ball {
  -webkit-animation: cir2 48s linear 0s infinite;
  animation: cir2 48s linear 0s infinite;
  -webkit-transition-delay: 1500ms !important;
  transition-delay: 1500ms !important;
}
.ball_3 .ball {
  -webkit-animation: cir3 48s linear 0s infinite;
  animation: cir3 48s linear 0s infinite;
  -webkit-transition-delay: 1300ms !important;
  transition-delay: 1300ms !important;
}
.ball_4 .ball {
  -webkit-animation: cir4 48s linear 0s infinite;
  animation: cir4 48s linear 0s infinite;
  -webkit-transition-delay: 1100ms !important;
  transition-delay: 1100ms !important;
}
.ball_5 .ball {
  -webkit-animation: cir5 48s linear 0s infinite;
  animation: cir5 48s linear 0s infinite;
  -webkit-transition-delay: 900ms !important;
  transition-delay: 900ms !important;
}
.ball_6 .ball {
  -webkit-animation: cir6 48s linear 0s infinite;
  animation: cir6 48s linear 0s infinite;
  -webkit-transition-delay: 800ms !important;
  transition-delay: 800ms !important;
}
.ball_7 .ball {
  -webkit-animation: cir7 48s linear 0s infinite;
  animation: cir7 48s linear 0s infinite;
  -webkit-transition-delay: 700ms !important;
  transition-delay: 700ms !important;
}
.ball_8 .ball {
  -webkit-animation: cir8 48s linear 0s infinite;
  animation: cir8 48s linear 0s infinite;
  -webkit-transition-delay: 500ms !important;
  transition-delay: 500ms !important;
}
.ball_9 .ball {
  -webkit-animation: cir9 48s linear 0s infinite;
  animation: cir9 48s linear 0s infinite;
  -webkit-transition-delay: 300ms !important;
  transition-delay: 300ms !important;
}
.ball_10 .ball {
  -webkit-animation: cir10 48s linear 0s infinite;
  animation: cir10 48s linear 0s infinite;
  -webkit-transition-delay: 100ms !important;
  transition-delay: 100ms !important;
}

.ball_21 .ball {
  -webkit-animation: cir21 48s linear 0s infinite;
  animation: cir21 48s linear 0s infinite;
  -webkit-transition-delay: 700ms !important;
  transition-delay: 700ms !important;
}
.ball_22 .ball {
  -webkit-animation: cir22 48s linear 0s infinite;
  animation: cir22 48s linear 0s infinite;
  -webkit-transition-delay: 500ms !important;
  transition-delay: 500ms !important;
}
.ball_23 .ball {
  -webkit-animation: cir23 48s linear 0s infinite;
  animation: cir23 48s linear 0s infinite;
  -webkit-transition-delay: 100ms !important;
  transition-delay: 300ms !important;
}
.ball_24 .ball {
  -webkit-animation: cir24 48s linear 0s infinite;
  animation: cir24 48s linear 0s infinite;
  -webkit-transition-delay: 100ms !important;
  transition-delay: 100ms !important;
}
.ball_31 .ball {
  -webkit-animation: cir31 48s linear 0s infinite;
  animation: cir31 48s linear 0s infinite;
  -webkit-transition-delay: 1600ms !important;
  transition-delay: 1600ms !important;
}
.ball_32 .ball {
  -webkit-animation: cir32 48s linear 0s infinite;
  animation: cir32 48s linear 0s infinite;
  -webkit-transition-delay: 1350ms !important;
  transition-delay: 1350ms !important;
}
.ball_33 .ball {
  -webkit-animation: cir33 48s linear 0s infinite;
  animation: cir33 48s linear 0s infinite;
  -webkit-transition-delay: 1100ms !important;
  transition-delay: 1100ms !important;
}
.ball_34 .ball {
  -webkit-animation: cir34 48s linear 0s infinite;
  animation: cir34 48s linear 0s infinite;
  -webkit-transition-delay: 850ms !important;
  transition-delay: 850ms !important;
}
.ball_35 .ball {
  -webkit-animation: cir35 48s linear 0s infinite;
  animation: cir35 48s linear 0s infinite;
  -webkit-transition-delay: 600ms !important;
  transition-delay: 600ms !important;
}
.ball_36 .ball {
  -webkit-animation: cir36 48s linear 0s infinite;
  animation: cir36 48s linear 0s infinite;
  -webkit-transition-delay: 350ms !important;
  transition-delay: 350ms !important;
}
.ball_base_select {
  animation-play-state:paused!important;
}

// .ball_1 {
//     -webkit-transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
//     transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
// }
// .ball_2 {
//     -webkit-transform: rotateX(-90deg) rotateY(60deg) translateY(-70px);
//     transform: rotateX(-90deg) rotateY(60deg) translateY(-70px);
// }
// .ball_3 {
//     -webkit-transform: rotateX(-90deg) rotateY(120deg) translateY(-70px);
//     transform: rotateX(-90deg) rotateY(120deg) translateY(-70px);
// }
// .ball_4 {
//     -webkit-transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
//     transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
// }
// .ball_5 {
//     -webkit-transform: rotateX(-90deg) rotateY(240deg) translateY(-70px);
//   transform: rotateX(-90deg) rotateY(240deg) translateY(-70px);
// }
// .ball_6 {
//   -webkit-transform: rotateX(-90deg) rotateY(300deg) translateY(-70px);
//     transform: rotateX(-90deg) rotateY(300deg) translateY(-70px);
// }

.ball_1 {
    -webkit-transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
}
.ball_2 {
    -webkit-transform: rotateX(-90deg) rotateY(36deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(36deg) translateY(-70px);
}
.ball_3 {
    -webkit-transform: rotateX(-90deg) rotateY(72deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(72deg) translateY(-70px);
}
.ball_4 {
    -webkit-transform: rotateX(-90deg) rotateY(108deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(108deg) translateY(-70px);
}
.ball_5 {
    -webkit-transform: rotateX(-90deg) rotateY(144deg) translateY(-70px);
  transform: rotateX(-90deg) rotateY(144deg) translateY(-70px);
}
.ball_6 {
  -webkit-transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
}
.ball_7 {
  -webkit-transform: rotateX(-90deg) rotateY(216deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(216deg) translateY(-70px);
}
.ball_8 {
  -webkit-transform: rotateX(-90deg) rotateY(252deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(252deg) translateY(-70px);
}
.ball_9 {
  -webkit-transform: rotateX(-90deg) rotateY(288deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(288deg) translateY(-70px);
}
.ball_10 {
  -webkit-transform: rotateX(-90deg) rotateY(324deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(324deg) translateY(-70px);
}
.ball_21 {
  -webkit-transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(0deg) translateY(-70px);
}
.ball_22 {
  -webkit-transform: rotateX(-90deg) rotateY(90deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(90deg) translateY(-70px);
}
.ball_23 {
  -webkit-transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
}
.ball_24 {
  -webkit-transform: rotateX(-90deg) rotateY(270deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(270deg) translateY(-70px);
}
.ball_31 {
  -webkit-transform: rotateX(-90deg) rotateY(50deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(50deg) translateY(-70px);
}
.ball_32 {
  -webkit-transform: rotateX(-90deg) rotateY(110deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(110deg) translateY(-70px);
}
.ball_33 {
  -webkit-transform: rotateX(-90deg) rotateY(170deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(170deg) translateY(-70px);
}
.ball_34 {
  -webkit-transform: rotateX(-90deg) rotateY(230deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(230deg) translateY(-70px);
}
.ball_35 {
  -webkit-transform: rotateX(-90deg) rotateY(290deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(290deg) translateY(-70px);
}
.ball_36 {
  -webkit-transform: rotateX(-90deg) rotateY(350deg) translateY(-70px);
    transform: rotateX(-90deg) rotateY(350deg) translateY(-70px);
}
.ball_font2{
    font-size: 20px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #Fff;
    position: fixed;
    top: -4px;
    left: 37%;
}
</style>
