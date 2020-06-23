<template>
  <div class="h_detail">
    <transition name="el-zoom-in-top">
      <div v-show="!show" class="hd_top">.el-zoom-in-top</div>
    </transition>
    <transition name="el-zoom-in-center">
      <div v-show="!show" class="hd_bottom">
        <div class="hd_ball_font2">{{dataName[dataIndex]}}</div>
        <div class="hd_ball_icon_left"></div>
        <div class="hd_ball_icon_right"></div>
        <div class="ball_s">
          <div v-for="(item,key) in dataList" :key="key" class="hd_ball" :class="item.class" @click="dataChange(item.name)">
            <div class="hd_ball_font">{{item.name}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    show: {
      type: Boolean
    }
  },
  components: {
  },
  data () {
    return {
      dataList: [
        {
          name: '',
          class: 'ball1'
        },
        {
          name: '',
          class: 'ball2'
        },
        {
          name: '',
          class: 'ball3'
        },
        {
          name: '',
          class: 'ball4'
        },
        {
          name: '',
          class: 'ball5'
        },
        {
          name: '',
          class: 'ball6'
        },
        {
          name: '',
          class: 'ball7'
        },
        {
          name: '',
          class: 'ball8'
        },
        {
          name: '',
          class: 'ball9'
        }
      ],
      dataName: ['智学', '智训', '智控', '智管', '智治', '智服', '智侦', '智防', '智监', '智指'],
      dataActive: '',
      dataIndex: 0
    }
  },
  computed: {
    ...mapState('home', [
      'homeData'
    ])
  },
  methods: {
    dataChange (data) {
      var _this = this
      var dataArr = this.dataName.slice()
      dataArr.forEach(function (item, index, arr) {
        if (item === data) {
          _this.dataActive = data
          _this.dataIndex = index
          arr.splice(index, 1)
        }
      })
      dataArr.forEach(function (item, index, arr) {
        _this.dataList[index].name = item
      })
      console.log(this.dataIndex)
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.hd_ball_font{
  font-size: 16px
}
.hd_top{
  width: 100vw;
  height: 40vh;
  top: 10vh;
  position: absolute;
  display: flex;
  z-index: -1;
}
.hd_ball_font2{
    position: absolute;
    left: 48vw;
    bottom: 0;
    line-height: 9vh;
    font-size: 42px;
    color: #fff;
    font-weight: 900;
}
.hd_ball_icon_left{
  width: 166px;
  height: 74px;
  position: absolute;
  right: 10vw;
  bottom: 25vh;
  background-image:url('../../assets/home/left.png');
  background-size:100% 100%;
}
.hd_ball_icon_right{
  width: 166px;
  height: 74px;
  position: absolute;
  left: 10vw;
  bottom: 25vh;
  background-image:url('../../assets/home/right.png');
  background-size:100% 100%;
}
.hd_bottom{
  width: 100vw;
  height: 50vh;
  bottom: 0;
  position: absolute;
  z-index: -1;
  text-align: center;
  .ball_s{
    width: 100vw;
    height: 100%;
    margin: auto;
    .hd_ball{
      -webkit-transform-origin:32vw 0px;
      transform-origin: 32vw 0px;
      position: absolute;
      top: 58vh;
      left: 18vw;
      width: 170px;
      height: 170px;
      color: #fff
    }
    .ball1{
      transform: rotateZ(30deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-30deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-30deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball2{
      transform: rotateZ(47.5deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-47.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-47.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball3{
      transform: rotateZ(65deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-65deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-65deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball4{
      transform: rotateZ(82.5deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-82.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-82.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball5{
      transform: rotateZ(100deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-100deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-100deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball6{
      transform: rotateZ(117.5deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-117.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-117.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball7{
      transform: rotateZ(135deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-135deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-135deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball8{
      transform: rotateZ(152.5deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-152.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-152.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
    .ball9{
      transform: rotateZ(170deg) translateY(0px);
      .hd_ball_font{
        transform: rotateZ(-170deg) translateY(0px);
        background-image:url('../../assets/home/ball_c.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-170deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
      }
    }
  }
}
</style>
