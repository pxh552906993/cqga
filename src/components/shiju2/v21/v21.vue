<template>
  <div class="v21">
    <transition name="el-zoom-in-center">
        <div v-show="showtas" class="tas">
          <div class="middle">
            <!-- <div class="word1">各类专题库:{{data.ztk}}</div> -->
            <div class="word0">
              <div class="word0_title"><img src="../../../assets/shiju2/1.png" style="margin-right: 1vw;">数据总量<img src="../../../assets/shiju2/2.png" style="margin-left: 1vw;"></div>
              <div class="word0_data">{{data.sjzl}}</div>
              <img src="../../../assets/shiju2/bottom.png" style="position: relative;bottom: 4vh;">
            </div>
            <div class="word1">数据资源中心</div>
            <div class="word2 word">人：<span>{{data.inner.r}}</span></div>
            <div class="word3 word">地：<span>{{data.inner.d}}</span></div>
            <div class="word4 word">事：<span>{{data.inner.s}}</span></div>
            <div class="word5 word">物：<span>{{data.inner.w}}</span></div>
            <div class="word6 word">组织：<span>{{data.inner.zz}}</span></div>
            <div class="word7 word">图像库：<span>{{data.inner.tx}}</span></div>
            <div class="word8 word">标签库：<span>{{data.inner.bq}}</span></div>
            <div class="word9 word">轨迹库：<span>{{data.inner.gj}}</span></div>
            <div class="word10 word">全文检索：<span>{{data.inner.qw}}</span></div>
          </div>
          <div class="jk1">
            <div class="jl">
              <div class="jl2">外部单位</div>
              <div class="jl1"><SumScroll :value="data.out.wbdw"></SumScroll></div>
            </div>
          </div>
          <div class="jk2">
            <div class="jl">
              <div class="jl2">来源网络</div>
              <div class="jl1"><SumScroll :value="data.out.lywl"></SumScroll></div>
            </div>
          </div>
          <div class="jk3">
            <div class="jl">
              <div class="jl2">内部单位</div>
              <div class="jl1"><SumScroll :value="data.out.ywbm"></SumScroll></div>
            </div>
          </div>
          <div class="jk4">
            <div class="jl">
              <div class="jl2">业务系统</div>
              <div class="jl1"><SumScroll :value="data.out.ywxt"></SumScroll></div>
            </div>
          </div>
          <div class="jk5">
            <div class="jl">
              <div class="jl2">外部单位</div>
              <div class="jl1"><SumScroll :value="data.out.dsjwb"></SumScroll></div>
            </div>
          </div>
          <div class="jk6">
            <div class="jl">
              <div class="jl2">重庆警务大数据综合应用</div>
              <div class="jl1"><SumScroll :value="data.out.sjgx"></SumScroll></div>
            </div>
          </div>
          <div class="jk7">
            <div class="jl">
              <div class="jl2">智博会安防</div>
              <div class="jl1"><SumScroll :value="data.out.zbh"></SumScroll></div>
            </div>
          </div>
          <div class="jk8">
            <div class="jl">
              <div class="jl2">数据共享</div>
              <div class="jl1"><SumScroll :value="data.out.cqjw"></SumScroll></div>
            </div>
          </div>
          <div class="bottom">
            <div class="xiantiao1_1">
              <img src="../../../assets/shiju2/xiantiao1.png" class="xiantiao1">
              <img src="../../../assets/shiju2/xiantiao1.png" class="xiantiao1">
            </div>
            各类专题库
            <div class="xiantiao2_1">
              <img src="../../../assets/shiju2/xiantiao2.png" class="xiantiao2">
              <img src="../../../assets/shiju2/xiantiao2.png" class="xiantiao2">
            </div>
          </div>
        </div>
    </transition>
  </div>
</template>
<script>
import echarts from 'echarts'
import SumScroll from '@/components/sumScroll.vue'
export default {
  components: {
    SumScroll
  },
  data () {
    return {
      showtas: false,
      showjuxing: false,
      data: {
        ztk: '4',
        sjzl: '1.23千亿',
        out: { wbdw: '16', lywl: '5', ywbm: '20', ywxt: '381', dsjwb: '123', sjgx: '8111', zbh: '56', cqjw: '652' },
        inner: { r: '544', d: '4', s: '382', w: '57', zz: '0', gj: '1', tx: '1', bq: '1', qw: '1' }
      },
      data2: { id: '1', qbrw: '13771', wcrw: '13037', wwcrw: '197', sbrw: '479' },
      width: 230,
      zhanbi: 70 + '%',
      charts1: null,
      chartData: [],
      datas: {}
    }
  },
  mounted () {
    var _this = this
    setTimeout(function () {
      _this.showtas = true
    }, 1000)
    setTimeout(function () {
      _this.showjuxing = true
    }, 2000)
  },
  watch: {
    detail (newVal) {
    }
  },
  methods: {
    echartinit1 () {
      var _this = this
      this.$axios
        .get(
          this.$messageIP + '/cockpit/r_center', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            _this.data = res.data.res
          } else {}
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$axios
        .get(
          this.$messageIP + '/cockpit/contr', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            _this.data2 = res.data.res
          } else {}
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$axios
        .get(
          this.$messageIP + '/cockpit/secu', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            var chartData = [res.data.res.qjgx, res.data.res.dqgx, res.data.res.bmgx, res.data.res.sqgx]
            var total = parseInt(res.data.res.qjgx) + parseInt(res.data.res.dqgx) + parseInt(res.data.res.bmgx) + parseInt(res.data.res.sqgx)
            var datas = {
              全警共享: { percent: (parseInt(res.data.res.qjgx) / total).toFixed(4) * 100 },
              相关分局共享: { percent: (parseInt(res.data.res.dqgx) / total).toFixed(4) * 100 },
              相关业务单位共享: { percent: (parseInt(res.data.res.bmgx) / total).toFixed(4) * 100 },
              严格授权共享: { percent: (parseInt(res.data.res.sqgx) / total).toFixed(4) * 100 }
            }
            _this.echartinit2(chartData, datas)
          } else {}
        })
        .catch(function (error) {
          console.log(error)
          var chartData = ['2707', '5', '0', '8466']
          var datas = {
            全警共享: { percent: (2707 / 11178).toFixed(4) * 100 },
            相关分局共享: { percent: (5 / 11178).toFixed(4) * 100 },
            相关业务单位共享: { percent: (0 / 11178).toFixed(4) * 100 },
            严格授权共享: { percent: (8466 / 11178).toFixed(4) * 100 }
          }
          _this.echartinit2(chartData, datas)
        })
    },
    echartinit2 (chartData, datas) {
      this.charts1 = echarts.init(document.getElementById('charts-1'))
      var chartName = ['全警共享', '相关分局共享', '相关业务单位共享', '严格授权共享']
      var data = []
      var legendName = []
      for (var i = 0; i < chartData.length; i++) {
        var c = {
          value: chartData[i],
          name: chartName[i]
        }
        data[i] = c
        legendName[i] = chartName[i]
      }

      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}% <br/> {c}'
        },
        legend: {
          orient: 'vertical',
          x: '55%',
          y: '15%',
          itemWidth: 8,
          itemHeight: 8,
          align: 'left',
          textStyle: {
            fontSize: 13,
            color: '#fff'
          },
          data: legendName,
          formatter: function (name) {
            return `{title|${name}}{percent|${datas[name].percent}}{unit|%}`
          },
          // eslint-disable-next-line no-dupe-keys
          textStyle: {
            rich: {
              title: {
                color: '#FFFFFF',
                fontSize: 12,
                fontFamily: 'HuaKang',
                padding: [0, 10, 0, 0]
              },
              unit: {
                color: '#82baff',
                fontSize: 12,
                fontFamily: 'HuaKang',
                padding: [0, 0, 0, 0]
              },
              percent: {
                color: '#16CEB9',
                fontSize: 12,
                fontFamily: 'HuaKang',
                padding: [0, 0, 0, 0]
              }
            }
          }
        },
        series: [{
          type: 'pie',
          radius: ['70%', '90%'],
          center: ['30%', '50%'],
          color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF'],
          data: data,
          labelLine: {
            normal: {
              show: false,
              length: 20,
              length2: 20,
              lineStyle: {
                color: '#12EABE',
                width: 2
              }
            }
          },
          label: {
            normal: {
              show: false,
              formatter: '{c|{c}}\n{hr|}\n{d}',
              rich: {
                b: {
                  fontSize: 20,
                  color: '#12EABE',
                  align: 'left',
                  padding: 4
                },
                hr: {
                  borderColor: '#12EABE',
                  width: '100%',
                  borderWidth: 2,
                  height: 0
                },
                d: {
                  fontSize: 20,
                  color: '#fff',
                  align: 'left',
                  padding: 4
                },
                c: {
                  fontSize: 20,
                  color: '#fff',
                  align: 'left',
                  padding: 4
                }
              }
            }
          }
        },
        {
          type: 'pie',
          zlevel: 2,
          silent: true,
          radius: ['95%', '98%'],
          center: ['30%', '50%'],
          startAngle: -65,
          color: '#00E4EA',
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [100]
        }]
      }
      this.charts1.setOption(option)
      var _this = this
      window.addEventListener('resize', function () {
        _this.charts1.resize()
      })
    }
  }
}
</script>>
<style lang="scss" scoped>
.v21{
  width: 48.8vw;
  height: 67vh;
  position: absolute;
  left: 26vw;
  .xiantiao1_1{
    width: 104px;
    position: absolute;
    left: -6vw;
    top: 4vh;
    overflow-x: hidden;
  }
  .xiantiao1{
    display: block;
    margin-bottom: 2vh;
    // animation:xiantiao1Move 2s infinite;
    // -webkit-animation:xiantiao1Move 2s infinite; /*Safari and Chrome*/
  }
  .xiantiao2{
    display: block;
    margin-bottom: 2vh;
    // animation:xiantiao1Move 2s infinite;
    // -webkit-animation:xiantiao1Move 2s infinite; /*Safari and Chrome*/
  }
@keyframes xiantiao1Move
{
  0% {
    margin-left: 0px;
  }
  33% {
    margin-left: -50px;
  }
  66% {
    margin-left: 50px;
  }
  100% {
    margin-left: 0px;
  }
}

@-webkit-keyframes xiantiao1Move /*Safari and Chrome*/
{
  0% {
    margin-left: 0px;
  }
  50% {
    margin-left: -104px;
  }
  100% {
    margin-left: 0px;
  }
}
  .xiantiao1_2{
    position: absolute;
    left: -6vw;
    top: 6vh;
  }
  .xiantiao2_1{
    width: 104px;
    position: absolute;
    left: 12vw;
    top: 4vh;
    overflow-x: hidden;
  }
  .xiantiao2_2{
    position: absolute;
    left: 12vw;
    top: 6vh;
  }
  @media screen and (max-width: 1920px) {
  .tas{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 14vh;
    .middle{
      width: 430px;
      height: 480px;
      position: absolute;
      left: 50%;
      margin-left: -215px;
      top: 22vh;
      .word{
        background-image: linear-gradient(270deg, rgba(2,31,36,0.20) 0%, #09262C 54%, rgba(0,29,34,0.20) 100%);
        border:#00E8EF 1px solid
      }
      .word span{
        font-size: 16px;
        color: #F0CE3B;
        letter-spacing: 0;
        text-align: center;
      }
      .word0{
        position: absolute;
        left: -3vw;
        top: -25vh;
        text-align: center;
        .word0_title{
          width: 30vw;
          font-family: MicrosoftYaHei-Bold;
          font-size: 30px;
          color: #B3EEFB;
          letter-spacing: 3.33px;
          text-align: center;
        }
        .word0_data{
          width: 30vw;
          font-family: DINAlternate-Bold;
          font-size: 82px;
          color: #B3EEFB;
          letter-spacing: 8px;
          text-align: center;
          text-shadow: 0 2px 4px rgba(0,0,0,0.50);
        }
      }
      .word1{
        width: 200px;
        height: 40px;
        position: absolute;
        left: 50%;
        margin-left: -100px;
        top: 15vh;
        font-family: FZZZHONGJW--GB1-0;
        font-size: 28px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0,0,0,0.50);
      }
      .word2{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: -3vw;
        top: 15vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word3{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 22vw;
        top: 15vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word4{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 0;
        top: 20vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word5{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 18vw;
        top: 20vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word6{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 10vw;
        top: 23vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word7{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: -3vw;
        top: 28vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
      .word8{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 22vw;
        top: 28vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
      .word9{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 3vw;
        top: 37vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
      .word10{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 16vw;
        top: 37vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
    }
    .bottom{
      width: 12.3vw;
      height: 10vh;
      background-image:url('../../../assets/shiju2/bottombg.png');
      background-size:100% 100%;
      position: absolute;
      left: 18vw;
      bottom: -14vh;
      font-family: MicrosoftYaHei-Bold;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: 2px;
      text-align: center;
      line-height: 14vh
    }
    .dibu{
      width: 29.3vw;
      height: 100px;
      background-image:url('./img/bm.png');
      background-size:100% 100%;
      position: absolute;
      left: 9.3vw;
      top: 480px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      font-size: 28px;
      color: #3BD3F0
    }
    .jk1{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: 6vw;
      bottom: -10vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 20px;
        background-image:url('./img/l1.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk2{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: -3vw;
      top: 15vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 20px;
        background-image:url('./img/l1.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk3{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: 1vw;
      top: 25vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 0px;
        background-image:url('./img/l2.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk4{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: -2vw;
      top: 53vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 0px;
        background-image:url('./img/l2.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk5{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: -2vw;
      bottom: -10vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 20px;
        background-image:url('./img/r.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk6{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: -3vw;
      top: 15vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 12vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 20px;
        background-image:url('./img/r.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk7{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: 1vw;
      top: 25vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image:url('./img/r1.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk8{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: -2vw;
      top: 52vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image:url('./img/r1.gif')!important;
        background-size:100% 100%;
      }
    }
  }
  }
  @media screen and (min-width: 1920px) {
  .tas{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 14vh;
    .middle{
      width: 430px;
      height: 480px;
      position: absolute;
      left: 50%;
      margin-left: -215px;
      top: 22vh;
      .word{
        background-image: linear-gradient(270deg, rgba(2,31,36,0.20) 0%, #09262C 54%, rgba(0,29,34,0.20) 100%);
        border:#00E8EF 1px solid
      }
      .word span{
        font-size: 16px;
        color: #F0CE3B;
        letter-spacing: 0;
        text-align: center;
      }
      .word0{
        position: absolute;
        left: -4vw;
        top: -25vh;
        text-align: center;
        .word0_title{
          width: 30vw;
          font-family: MicrosoftYaHei-Bold;
          font-size: 30px;
          color: #B3EEFB;
          letter-spacing: 3.33px;
          text-align: center;
        }
        .word0_data{
          width: 30vw;
          font-family: DINAlternate-Bold;
          font-size: 82px;
          color: #B3EEFB;
          letter-spacing: 8px;
          text-align: center;
          text-shadow: 0 2px 4px rgba(0,0,0,0.50);
        }
      }
      .word1{
        width: 200px;
        height: 40px;
        position: absolute;
        left: 50%;
        margin-left: -100px;
        top: 15vh;
        font-family: FZZZHONGJW--GB1-0;
        font-size: 28px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0,0,0,0.50);
      }
      .word2{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: -3vw;
        top: 15vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word3{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 19vw;
        top: 15vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word4{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 0;
        top: 20vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word5{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 16vw;
        top: 20vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word6{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 8vw;
        top: 23vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC
      }
      .word7{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: -5vw;
        top: 28vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
      .word8{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 20vw;
        top: 28vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
      .word9{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 1vw;
        top: 37vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
      .word10{
        width: 130px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 14vw;
        top: 37vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #C8F4FC;
        border-radius: 25px;
      }
    }
    .bottom{
      width: 12.3vw;
      height: 10vh;
      background-image:url('../../../assets/shiju2/bottombg.png');
      background-size:100% 100%;
      position: absolute;
      left: 18vw;
      bottom: -14vh;
      font-family: MicrosoftYaHei-Bold;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: 2px;
      text-align: center;
      line-height: 14vh
    }
    .dibu{
      width: 29.3vw;
      height: 100px;
      background-image:url('./img/bm.png');
      background-size:100% 100%;
      position: absolute;
      left: 9.3vw;
      top: 480px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      font-size: 28px;
      color: #3BD3F0
    }
    .jk1{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: 6vw;
      bottom: -10vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 20px;
        background-image:url('./img/l1.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk2{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: -3vw;
      top: 15vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 20px;
        background-image:url('./img/l1.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk3{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: 1vw;
      top: 25vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 0px;
        background-image:url('./img/l2.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk4{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: -2vw;
      top: 53vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 190px;
        top: 0px;
        background-image:url('./img/l2.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk5{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: 1vw;
      bottom: -10vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 20px;
        background-image:url('./img/r.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk6{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: -3vw;
      top: 15vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 11vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 20px;
        background-image:url('./img/r.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk7{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: 1vw;
      top: 25vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image:url('./img/r1.gif')!important;
        background-size:100% 100%;
      }
    }
    .jk8{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      right: -2vw;
      top: 52vh;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('../../../assets/shiju2/rbg.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .jl2{
          width: 6vw;
          height: 40px;
          // background: yellow;
          text-align: center;
          font-size: 16px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          font-weight: bold;
          text-align: center;
          line-height: 30px;
          font-size: 26px;
          color: #3BD3F0
        }
      }
      .jr{
        width: 100px;
        height: 80px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image:url('./img/r1.gif')!important;
        background-size:100% 100%;
      }
    }
  }
  }
  @media screen and (max-width: 1920px) {
  .xian{
    width: 24.5vw;
    height: 4px;
    position: absolute;
    left: 0;
    top: 69.7vh;
    background-image:url('./img/xian.png')!important;
    background-size:100% 100%;
  }

  .xian1{
    width: 24.5vw;
    height: 4px;
    position: absolute;
    left: 24.5vw;
    top: 69.7vh;
    background-image:url('./img/xian.png')!important;
    background-size:100% 100%;
  }
  }
  @media screen and (min-width: 1920px) {
  .xian{
    width: 471px;
    height: 4px;
    position: absolute;
    left: 0;
    top: 721px;
    background-image:url('./img/xian.png')!important;
    background-size:100% 100%;
  }
  .xian1{
    width: 471px;
    height: 4px;
    position: absolute;
    left: 472px;
    top: 721px;
    background-image:url('./img/xian.png')!important;
    background-size:100% 100%;
  }
  }
  .juxing{
    width: 24.5vw;
    height: 23.7vh;
    position: absolute;
    left: -8px;
    top: 70.4vh;
    background-image:url('./img/juxing.png')!important;
    background-size:100% 100%;
    .kuang{
      width: 7.8vw;
        height: 2.5vh;
        position: absolute;
        left: 25px;
        top: 1.25vh;
        background-image:url('./img/xk.png')!important;
        background-size:100% 100%;
        font-size:14px;
        text-align: center;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(0,228,234,1);
        line-height:2.5vh;
    }
    .word{
        width:6vw;
        height:1.8vh;
        position: absolute;
        right: 4px;
        top: 1.8vh;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(0,228,234,1);
        line-height:1.8vh;
    }
    .wk{
      width: 100%;
      height: 80%;
      position: absolute;
      left: 0;
      top: 5vh;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      .xwk{
        width: 40%;
        height: 7vh;
        background-image:url('./img/fz.png')!important;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .xname{
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:17px;
            padding-top: 5px;
        }
        .xcount{
            font-size:16px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(252,75,15,1);
            line-height:22px;
        }
      }
    }
    .jindu{
      width:380px;
      height:6px;
      background:rgba(13,56,60,1);
      border-radius:4px;
      opacity:0.7;
      position: absolute;
      left: 8px;
      top: 138px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .zhanbi{
     width:40px;
        height:17px;
        position: absolute;
        right: 0px;
        top: 134px;
        font-size:12px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(195,255,249,1);
        line-height:17px;
        letter-spacing:2px;
    }
    .jindu1{
      height:6px;
      background:linear-gradient(270deg,rgba(63,244,250,1) 0%,rgba(27,124,243,1) 100%);
      border-radius:4px 0px 4px 4px;
      position: absolute;
      left: 8px;
      top: 138px;
    }
    .jindu2{
      width:380px;
      height:6px;
      background:rgba(13,56,60,0);
      border-radius:4px;
      opacity:0.7;
      position: absolute;
      left: 8px;
      top: 138px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .quan{
        width:12px;
        height:12px;
        background:rgba(13,48,51,1);
        border-radius:50%;
        border:3px solid rgba(61,239,250,1);
        z-index: 1000;
      }
    }
    .wenzi1{
      width:33px;
        height:20px;
        position: absolute;
        left: 8px;
        top: 158px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        letter-spacing:2px;
    }
    .wenzi2{
        width:72px;
        height:20px;
        position: absolute;
        left: 70px;
        top: 158px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        letter-spacing:2px;
        text-align: center
    }
    .wenzi3{
        width:72px;
        height:20px;
        position: absolute;
        left: 162px;
        top: 158px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        letter-spacing:2px;
        text-align: center
    }
    .wenzi4{
        width:72px;
        height:20px;
        position: absolute;
        left: 252px;
        top: 158px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        letter-spacing:2px;
        text-align: center
    }
    .wenzi5{
        width:72px;
        height:20px;
        position: absolute;
        left: 342px;
        top: 158px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
        letter-spacing:2px;
        text-align: center
    }
  }
  .juxing1{
    width: 24.5vw;
    height: 23.7vh;
    position: absolute;
    left: 24.5vw;
    top: 70.4vh;
    background-image:url('./img/juxing.png')!important;
    background-size:100% 100%;
    .kuang{
      width: 150px;
        height: 27px;
        position: absolute;
        left: 25px;
        top: 13px;
        background-image:url('./img/xk.png')!important;
        background-size:100% 100%;
        font-size:14px;
        text-align: center;
        font-family:PingFangSC;
        font-weight:500;
        color:rgba(0,228,234,1);
        line-height:27px;
    }
    #charts-1{
      width: 80%;
      height: 60%;
      position: absolute;
      left: 25px;
      top: 6vh;
    }
    .dengji{
        width: 80px;
        height: 80px;
        background-image:url('./img/tuoyuan.png')!important;
        background-size:100% 100%;
        position: absolute;
        left: 5vw;
        top: 10vh;
        font-size: 12px;
        line-height: 10vh;
        text-align: center;
        color: #fff;
    }
    .dengji_icon{
        position: absolute;
        left: 6.5vw;
        top: 11vh;
    }
    .sk1{
      width: 5vw;
      height: 5vh;
      position: absolute;
      right: 20px;
      top: 8vh;
      background-image:url('./img/fz.png')!important;
      background-size:100% 100%;
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .xname{
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:17px;
            padding-top: 5px;
        }
        .xcount{
            font-size:16px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(252,75,15,1);
            line-height:22px;
        }
    }
    .sk2{
      width: 5vw;
      height: 5vh;
      position: absolute;
      right:20px;
      top: 13vh;
      background-image:url('./img/fz.png')!important;
      background-size:100% 100%;
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .xname{
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:17px;
            padding-top: 5px;
        }
        .xcount{
            font-size:16px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(252,75,15,1);
            line-height:22px;
        }
    }
  }
}
</style>>
