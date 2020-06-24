<template>
  <div class="h_detail">
    <transition name="el-zoom-in-top">
      <div v-show="!show" class="hd_top">
        <div class="hd_top_group">
          <div class="hd_top_group_title">总体介绍</div>
          <p class="hd_top_group_content">
            {{content2}}
          </p>
        </div>
        <div class="hd_top_group">
          <div class="hd_top_group_title">职能详情</div>
          <div class="hd_top_group_title_l">
            <div v-for="(item,key) in homeData.cg" :key="key" :class="[item.bool?'hd_top_group_title_l_ga':'hd_top_group_title_l_g']" @click="lTitleChange(key)">{{item.z_name}}</div>
          </div>
          <p class="hd_top_group_content">
            {{content}}
          </p>
          <div class="hd_top_group_button">进入系统</div>
        </div>
      </div>
    </transition>
    <transition name="el-zoom-in-center">
      <div v-show="!show" class="hd_bottom">
        <div class="hd_ball_font2">{{dataName[dataIndex]}}</div>
        <div class="hd_ball_icon_left" @click="changeRight"></div>
        <div class="hd_ball_icon_right" @click="changeLeft"></div>
        <div class="ball_s">
          <div v-for="(item,key) in dataList" :key="key" class="hd_ball" :class="[item.bool?item.class+'_a '+item.class:item.class]" @click="dataChange(item.name),dataChange2(key)">
            <div class="hd_ball_font">{{item.name}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      title_l: false,
      dataList: [
        {
          name: '',
          class: 'ball1',
          bool: false
        },
        {
          name: '',
          class: 'ball2',
          bool: false
        },
        {
          name: '',
          class: 'ball3',
          bool: false
        },
        {
          name: '',
          class: 'ball4',
          bool: false
        },
        {
          name: '',
          class: 'ball5',
          bool: false
        },
        {
          name: '',
          class: 'ball6',
          bool: false
        },
        {
          name: '',
          class: 'ball7',
          bool: false
        },
        {
          name: '',
          class: 'ball8',
          bool: false
        },
        {
          name: '',
          class: 'ball9',
          bool: false
        }
      ],
      dataName: ['智学', '智训', '智控', '智管', '智治', '智服', '智侦', '智防', '智监', '智指'],
      dataActive: '',
      dataIndex: 0,
      data1: [{
        name: '智·学',
        a: true,
        content: '创新大数据学习模式，通过移动警务终端，向全警创新提供引导式学习、交互式学习、碎片化学习能力，实现随时学、随心学、按需学，全方位“滴灌”大数据知识。'
      }, {
        name: '智·创',
        a: false,
        content: '实现“零代码”自创公安业务模型，以简单拖拽方式即可完成大数据建模，打造业务与技术的深度融合，让民警“玩转数据、提升技能”。'
      }, {
        name: '智·用',
        a: false,
        content: '模型超市。“众筹”全警自创业务模型，形成服务全警实战的大数据模型孵化中心大数据交流学习平台。集需求发布、疑问解答、经验分享为一体，打造全警大数据交流集散地 '
      }],
      content: '',
      content2: '“智学”是市局“十智”工程其中之一，主要目标是通过移动警务终端与电脑端的应用，提升基层警员的大数据技能，将智慧公安的能力“惠”至一线，并打造警务经验众创众筹的新模式，构建公安业务体系智慧宝库，推动公安大数据形成“学”、“研”、“用”一体化的良性发展。包括“智学自创”应用、移动端“智学”APP'
    }
  },
  computed: {
    ...mapState('home', [
      'homeData'
    ])
  },
  methods: {
    ...mapActions('home', [
      'invokeGetDatas'
    ]),
    lTitleChange (k) {
      var _this = this
      this.homeData.cg.forEach(function (item, index, arr) {
        if (index === k) {
          item.bool = true
          _this.content = item.introduce
        } else {
          item.bool = false
        }
      })
    },
    changeLeft () {
      this.dataChange2(this.dataIndex - 1)
      if (this.dataIndex === 0) {
        this.dataIndex = 9
        this.dataChange(this.dataName[this.dataIndex])
      } else {
        this.dataIndex--
        this.dataChange(this.dataName[this.dataIndex])
      }
    },
    changeRight () {
      this.dataChange2(this.dataIndex)
      if (this.dataIndex === 9) {
        this.dataIndex = 0
        this.dataChange(this.dataName[this.dataIndex])
      } else {
        this.dataIndex++
        this.dataChange(this.dataName[this.dataIndex])
      }
    },
    dataChange2 (k) {
      console.log(k)
      var _this = this
      this.dataList.forEach(function (item, index, arr) {
        item.bool = false
      })
      setTimeout(function () {
        _this.dataList[k].bool = true
      }, 100)
    },
    dataChange (data) {
      this.invokeGetDatas(data)
      var _this = this
      var dataArr = this.dataName.slice()
      dataArr.forEach(function (item, index, arr) {
        if (item === data) {
          _this.dataActive = data
          _this.dataIndex = index
          arr.splice(index, 1)
        }
      })
      setTimeout(function () {
        dataArr.forEach(function (item, index, arr) {
          _this.dataList[index].name = item
        })
      }, 1500)
    }
  },
  mounted () {
    console.log(this.homeData.cg[0])
    this.content = this.homeData.cg[0].introduce
    this.content2 = this.homeData.js
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
  justify-content: center;
  z-index: -1;
  .hd_top_group{
    width: 45vw;
    height: 39.7vh;
    margin: 0 2.5vw;
    background-image:url('../../assets/home/groupbg.png');
    background-size:100% 100%;
    .hd_top_group_title{
      color: #fff;
      text-align: left;
      line-height: 5vh;
      margin-left: 2vw;
      font-size: 30px;
      font-weight: 900;
    }
    .hd_top_group_title_l{
      display: flex;
      margin-left: 2vw;
      margin-top: 1vh;
      .hd_top_group_title_l_g{
        width: 8vw;
        height: 3.7vh;
        margin: 0 5px;
        background-image:url('../../assets/home/title_l.png');
        background-size:100% 100%;
        font-size: 26px;
        line-height: 3.7vh;
        color: #fff;
        font-weight: 300;
      }
      .hd_top_group_title_l_ga{
        width: 8vw;
        height: 3.7vh;
        margin: 0 5px;
        background-image:url('../../assets/home/title_la.png');
        background-size:100% 100%;
        font-size: 26px;
        line-height: 3.7vh;
        color: #fff;
        font-weight: 300;
      }
    }
    .hd_top_group_content{
      font-size: 26px;
      color: #fff;
      line-height: 4vh;
      height: 100%;
      width: 90%;
      word-break: break-all;
      margin: 5px auto;
      text-align: left;
      letter-spacing: 5px;
    }
    .hd_top_group_button{
        width: 8vw;
        height: 3.7vh;
        margin: 0 5px;
        background-image:url('../../assets/home/groupb.png');
        background-size:100% 100%;
        font-size: 26px;
        line-height: 3.7vh;
        color: #fff;
        font-weight: 300;
        position: absolute;
        right: 5vw;
        bottom: 1vh

    }
  }
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
      cursor: pointer;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-30deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-47.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-65deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-82.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-100deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-117.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-135deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-152.5deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
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
        font-size: 32px;
        font-weight: 900;
      }
      .hd_ball_font:hover{
        transform: rotateZ(-170deg) translateY(0px);
        background-image:url('../../assets/home/ball_d.png');
        background-size:100% 100%;
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 32px;
        font-weight: 900;
      }
    }
  }
}
.ball1_a{
  animation:ball1_a 2s forwards;
  -webkit-animation:ball1_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball1_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:26vw 0px;
    transform-origin: 26vw 0px;
    left: 45vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball2_a{
  animation:ball2_a 2s forwards;
  -webkit-animation:ball2_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball2_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:18vw 0px;
    transform-origin: 18vw 0px;
    left: 45vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball3_a{
  animation:ball3_a 2s forwards;
  -webkit-animation:ball3_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball3_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:14vw 0px;
    transform-origin: 14vw 0px;
    left: 45vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball4_a{
  animation:ball4_a 2s forwards;
  -webkit-animation:ball4_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball4_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:11vw 0px;
    transform-origin: 12vw 0px;
    left: 42vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball5_a{
  animation:ball5_a 2s forwards;
  -webkit-animation:ball5_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball5_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:10vw 0px;
    transform-origin: 11vw 0px;
    left: 41.5vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball6_a{
  animation:ball6_a 2s forwards;
  -webkit-animation:ball6_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball6_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:10vw 0px;
    transform-origin: 11vw 0px;
    left: 41vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball7_a{
  animation:ball7_a 2s forwards;
  -webkit-animation:ball7_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball7_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:10vw 0px;
    transform-origin: 10vw 0px;
    left: 39vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball8_a{
  animation:ball8_a 2s forwards;
  -webkit-animation:ball8_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball8_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:11vw 0px;
    transform-origin: 11vw 0px;
    left: 35vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
.ball9_a{
  animation:ball9_a 2s forwards;
  -webkit-animation:ball9_a 2s forwards; /*Safari and Chrome*/
}
@keyframes ball9_a
{
  0% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
  50% {
    -webkit-transform-origin:18vw 0px;
    transform-origin: 18vw 0px;
    left: 18vw;
    opacity: 0;
  }
  90% {
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 0;
  }
  100%{
    -webkit-transform-origin:32vw 0px;
    transform-origin: 32vw 0px;
    left: 18vw;
    opacity: 1;
  }
}
</style>
