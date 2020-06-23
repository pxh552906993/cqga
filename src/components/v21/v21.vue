<template>
  <div class="v21">
    <transition name="el-zoom-in-center">
        <div v-show="showtas" class="tas">
          <div class="middle">
            <div class="word1 word">各类专题库:{{data.ztk}}</div>
            <div class="word2 word">人:{{data.inner.r}}</div>
            <div class="word3 word">地:{{data.inner.d}}</div>
            <div class="word4 word">事:{{data.inner.s}}</div>
            <div class="word5 word">物:{{data.inner.w}}</div>
            <div class="word6 word">组织:{{data.inner.zz}}</div>
            <div class="word7 word">图像库:{{data.inner.tx}}</div>
            <div class="word8 word">标签库:{{data.inner.bq}}</div>
            <div class="word9 word">轨迹库:{{data.inner.gj}}</div>
            <div class="word10 word">全文检索:{{data.inner.qw}}</div>
          </div>
          <div class="dibu">数据总量：{{data.sjzl}}</div>
          <div class="jk1">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.wbdw"></SumScroll></div>
              <div class="jl2">外部单位</div>
            </div>
            <div class="jr"></div>
          </div>
          <div class="jk2">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.lywl"></SumScroll></div>
              <div class="jl2">来源网络</div>
            </div>
            <div class="jr"></div>
          </div>
          <div class="jk3">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.ywbm"></SumScroll></div>
              <div class="jl2">内部单位</div>
            </div>
            <div class="jr"></div>
          </div>
          <div class="jk4">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.ywxt"></SumScroll></div>
              <div class="jl2">业务系统</div>
            </div>
            <div class="jr"></div>
          </div>
          <div class="jk5">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.dsjwb"></SumScroll></div>
              <div class="jl2">外部单位</div>
            </div>
            <div class="jr"></div>
          </div>
          <div class="jk6">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.sjgx"></SumScroll></div>
              <div class="jl2">重庆警务大数据综合应用</div>
            </div>
            <div class="jr"></div>
          </div>
          <div class="jk7">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.zbh"></SumScroll></div>
              <div class="jl2">智博会安防</div>
            </div>
            <div class="jr"></div>
          </div>
          <div class="jk8">
            <div class="jl">
              <div class="jl1"><SumScroll :value="data.out.cqjw"></SumScroll></div>
              <div class="jl2">数据共享</div>
            </div>
            <div class="jr"></div>
          </div>
        </div>
    </transition>
    <div class="xian"></div>
    <div class="xian1"></div>
    <transition name="el-zoom-in-bottom">
      <div v-show="showjuxing"  class="juxing">
        <div class="kuang">运维监控</div>
        <span class="word">任务状态</span>
        <div class="wk">
          <div class="xwk">
            <div class="xname">全部任务数量</div>
            <div class="xcount">{{data2.qbrw}}</div>
          </div>
          <div class="xwk">
            <div class="xname">完成任务数量</div>
            <div class="xcount">{{data2.wcrw}}</div>
          </div>
          <div class="xwk">
            <div class="xname">未完成任务数量</div>
            <div class="xcount">{{data2.wwcrw}}</div>
          </div>
          <div class="xwk">
            <div class="xname">失败任务数量</div>
            <div class="xcount">{{data2.sbrw}}</div>
          </div>
        </div>
        <!-- 进度条 -->
        <!-- <div class="jindu">
        </div>
        <div class="zhanbi">{{zhanbi}}</div>
        <div class="jindu1" :style="{'width': width + 'px'}"></div>
        <div class="jindu2">
            <div class="quan"></div>
              <div class="quan"></div>
              <div class="quan"></div>
              <div class="quan"></div>
              <div class="quan"></div>
        </div>
        <div class="wenzi1">入库</div>
        <div class="wenzi2">ODS增量</div>
        <div class="wenzi3">ODS全量</div>
        <div class="wenzi4">ODS增量</div>
        <div class="wenzi5">ODS主题</div> -->
      </div>
    </transition>
    <transition name="el-zoom-in-bottom">
      <div v-show="showjuxing"  class="juxing1">
          <div class="kuang">数据安全</div>
          <div id="charts-1"></div>
          <div class="dengji">安全等级</div>
          <img class="dengji_icon" src="./img/icon-safe.png">
          <!-- <div class="sk1">
              <div class="xname">安全拦截次数</div>
              <div class="xcount">192346</div>
          </div>
          <div class="sk2">
              <div class="xname">安全拦截次数</div>
              <div class="xcount">192346</div>
          </div> -->
      </div>
      </transition>
  </div>
</template>>
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
    setTimeout(function () {
      _this.echartinit1()
    }, 2500)
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
  @media screen and (max-width: 1920px) {
  .tas{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 7vh;
    .middle{
      width: 430px;
      height: 480px;
      position: absolute;
      left: 50%;
      margin-left: -215px;
      top: 0px;
      .word{
        background-image: linear-gradient(270deg, rgba(2,31,36,0.20) 0%, #09262C 54%, rgba(0,29,34,0.20) 100%);
        border:#00E8EF 1px solid
      }
      .word1{
        width: 200px;
        height: 40px;
        position: absolute;
        left: 50%;
        margin-left: -100px;
        top: 65px;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        color: rgb(234, 94, 0)
      }
      .word2{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 4vw;
        top: 20vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word3{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 16vw;
        top: 20vh;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word4{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 93px;
        top: 220px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word5{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 232px;
        top: 220px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word6{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 160px;
        top: 258px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word7{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 4vw;
        top: 312px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word8{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 16vw;
        top: 312px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word9{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 100px;
        top: 362px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word10{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 220px;
        top: 362px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
    }
    .dibu{
      width: 29.3vw;
      height: 100px;
      background-image:url('./img/bm.png')!important;
      background-size:100% 100%;
      position: absolute;
      left: 9.3vw;
      top: 480px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      font-size: 28px;
      color: rgb(234, 94, 0)
    }
    .jk1{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: 20px;
      top: 60px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 4vw;
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
      left: 20px;
      top: 160px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 4vw;
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
      left: 20px;
      top: 260px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 4vw;
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
      left: 20px;
      top: 380px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .jr{
        width: 4vw;
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
      right: 26px;
      top: 60px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
      }
      .jr{
        width: 4vw;
        height: 80px;
        position: absolute;
        left: 2vw;
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
      right: 26px;
      top: 160px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
      }
      .jr{
        width: 4vw;
        height: 80px;
        position: absolute;
        left: 2vw;
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
      right: 26px;
      top: 260px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
      }
      .jr{
        width: 4vw;
        height: 80px;
        position: absolute;
        left: 2vw;
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
      right: 26px;
      top: 380px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
      }
      .jr{
        width: 4vw;
        height: 80px;
        position: absolute;
        left: 2vw;
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
      top: 0px;
      .word{
        background-image: linear-gradient(270deg, rgba(2,31,36,0.20) 0%, #09262C 54%, rgba(0,29,34,0.20) 100%);
        border:#00E8EF 1px solid
      }
      .word1{
        width: 200px;
        height: 40px;
        position: absolute;
        left: 50%;
        margin-left: -100px;
        top: 65px;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        color: rgb(234, 94, 0)
      }
      .word2{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 28px;
        top: 185px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word3{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 288px;
        top: 185px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word4{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 93px;
        top: 220px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word5{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 232px;
        top: 220px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word6{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 160px;
        top: 258px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word7{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 20px;
        top: 312px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word8{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 292px;
        top: 312px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word9{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 100px;
        top: 362px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
      .word10{
        width: 100px;
        height: 32px;
        // background: yellow;
        position: absolute;
        left: 220px;
        top: 362px;
        font-weight: bold;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        color: rgb(34, 181, 226)
      }
    }
    .dibu{
      width: 29.3vw;
      height: 100px;
      background-image:url('./img/bm.png')!important;
      background-size:100% 100%;
      position: absolute;
      left: 9.3vw;
      top: 480px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      font-size: 28px;
      color: rgb(234, 94, 0)
    }
    .jk1{
      width: 310px;
      height: 50px;
      // background: yellow;
      position: absolute;
      left: 20px;
      top: 60px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
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
      left: 20px;
      top: 160px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
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
      left: 20px;
      top: 260px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
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
      left: 20px;
      top: 380px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 12px;
        background-image:url('./img/left.png')!important;
        background-size:100% 100%;
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 14px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
        }
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 116px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
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
      right: 26px;
      top: 60px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
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
      right: 26px;
      top: 160px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 0;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
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
      right: 26px;
      top: 260px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
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
      right: 26px;
      top: 380px;
      .jl{
        width: 220px;
        height: 80px;
        position: absolute;
        left: 80px;
        top: 24px;
        background-image:url('./img/right.png')!important;
        background-size:100% 100%;
        .jl2{
          width: 76px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 26px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          font-size: 12px;
          color: rgb(26, 1, 8);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jl1{
          width: 96px;
          height: 40px;
          // background: yellow;
          position: absolute;
          left: 106px;
          top: 20px;
          font-weight: bold;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          color: rgb(234, 94, 0)
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
