<template>
  <div class="v31">
     <el-collapse-transition>
      <div v-show="showv31">
        <div class="rightname">资源申请分析</div>
        <div class="righttop">
          <span class="biaoti">各警总申请数据</span>
          <div id="chart4"></div>
        </div>
        <img class="brimg" src="../../assets/hline.png" alt="" />
        <div class="rightbottom">
          <span class="biaoti">分局申请分析</span>
          <div id="chart6"></div>
        </div>
        <img class="brimg" src="../../assets/hline.png" alt="" />
        <div class="rightmid">
          <span class="biaoti">申请资源占比</span>
          <div id="chart5"></div>
        </div>
        <img class="brimg" src="../../assets/hline.png" alt="" />
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
import options from './option.js'
import echarts from 'echarts'
export default {
  data () {
    return {
      showv31: false,
      chart4: null,
      chart5: null,
      chart6: null
    }
  },
  mounted () {
    var _this = this
    setTimeout(function () {
      _this.showv31 = true
    }, 1500)
    setTimeout(function () {
      _this.init()
      _this.loaddata()
    }, 2000)
  },
  methods: {
    init () {
      this.chart4 = echarts.init(document.getElementById('chart4'))
      this.chart5 = echarts.init(document.getElementById('chart5'))
      this.chart6 = echarts.init(document.getElementById('chart6'))
    },
    loaddata () {
      var _this = this
      this.$axios
        .get(
          this.$messageIP + '/cockpit/company_stat', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            options.option1.xAxis[0].data = res.data.res.x
            options.option1.series[0].data = res.data.res.y
            _this.chart4.setOption(options.option1)
          } else {}
        })
        .catch(function (error) {
          console.log(error)
          options.option1.xAxis[0].data = [
            '刑事侦查总队',
            '科技信息化处',
            '网络安全保卫总队',
            '警令部',
            '经济犯罪侦查总队',
            '技术侦察总队',
            '环境安全保卫总队',
            '交通巡逻警察总队',
            '治安管理总队',
            '局政治部'
          ]
          options.option1.series[0].data = [
            '894',
            '894',
            '484',
            '167',
            '89',
            '25',
            '13',
            '10',
            '6',
            '3'
          ]
          _this.chart4.setOption(options.option1)
        })
      let lastIndex = 0
      let currentIndex = 0
      setInterval(() => {
        this.chart4.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: lastIndex
        })
        this.chart4.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        this.chart4.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        lastIndex = currentIndex
        ++currentIndex
        if (currentIndex > 12) {
          currentIndex = 0
        }
      }, 2000)
      this.$axios
        .get(
          this.$messageIP + '/cockpit/apply_stat', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            var datas = {
              表授权: { percent: res.data.res.absq },
              消息订阅: { percent: res.data.res.xxdy },
              API授权: { percent: res.data.res.api }
            }
            _this.echartinit1(res.data.res, datas)
          } else {}
        })
        .catch(function (error) {
          console.log(error)
          var chartdata = { total: '4010', absq: '3775', xxdy: '109', api: '126' }
          var datas = {
            表授权: { percent: 3775 },
            消息订阅: { percent: 109 },
            API授权: { percent: 126 }
          }
          _this.echartinit1(chartdata, datas)
        })
      this.$axios
        .get(
          this.$messageIP + '/cockpit/branch_stat', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            options.option3.xAxis[0].data = res.data.res.x
            options.option3.series[0].data = res.data.res.y
            options.option3.series[1].data = [
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0],
              res.data.res.y[0]
            ]
            options.option3.yAxis[0].max = res.data.res.y[0]
            _this.chart6.setOption(options.option3)
          } else {}
        })
        .catch(function (error) {
          console.log(error)
          options.option3.xAxis[0].data = [
            '南岸区',
            '渝中区',
            '九龙坡区',
            '开州区',
            '高新技术产业开发区',
            '江北区',
            '北碚区',
            '渝北区',
            '两江新区',
            '垫江县'
          ]
          options.option3.series[0].data = [
            '427',
            '279',
            '176',
            '159',
            '113',
            '73',
            '71',
            '44',
            '39',
            '24'
          ]
          options.option3.series[1].data = [
            '427',
            '427',
            '427',
            '427',
            '427',
            '427',
            '427',
            '427',
            '427',
            '427'
          ]
          options.option3.yAxis[0].max = 427
          _this.chart6.setOption(options.option3)
        })
      let lastIndex2 = 0
      let currentIndex2 = 0
      setInterval(() => {
        this.chart6.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: lastIndex2
        })
        this.chart6.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex2
        })
        this.chart6.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex2
        })
        lastIndex2 = currentIndex2
        ++currentIndex2
        if (currentIndex2 > 12) {
          currentIndex2 = 0
        }
      }, 2000)
      window.addEventListener('resize', function () {
        _this.chart4.resize()
      })
      window.addEventListener('resize', function () {
        _this.chart6.resize()
      })
    },
    echartinit1 (chartdata, datas) {
      var option2 = {
        color: ['#16CEB9', '#2D99FF', '#FA7391'],
        legend: {
          orient: 'vertical',
          x: '60%',
          y: 'center',
          icon: 'circle',
          data: ['表授权', '消息订阅', 'API授权'],
          textStyle: {
            color: '#FFFFFF',
            fontSize: 12
          },
          formatter: function (name) {
            return `{title|${name}}{percent|${datas[name].percent}}{unit|}`
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
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: '{b}:{d}%'
        },
        title: [{
          text: '{name|' + '总量' + '}\n{val|' + chartdata.total + '}',
          x: '29%',
          y: 'center',
          textAlign: 'center',
          textStyle: {
            rich: {
              name: {
                fontSize: 14,
                fontWeight: 'normal',
                color: '#fff',
                padding: [10, 0]
              },
              val: {
                fontSize: 22,
                fontWeight: 'bold',
                color: '#F76E3E'
              }
            }
          }
        }],
        series: [
          {
            name: '表授权',
            type: 'pie',
            radius: ['70%', '80%'],
            center: ['30%', '55%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            tooltip: {
              show: true,
              extraCssText: 'background: rgba(22,206,185,0.16);border: 1px solid #16CEB9;'
            },
            data: [
              { value: parseInt(chartdata.absq), name: '表授权', itemStyle: { color: '#16CEB9' } },
              {
                value: (parseInt(chartdata.total) - parseInt(chartdata.absq)),
                tooltip: {
                  show: false
                },
                itemStyle: { color: '#20242B' },
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          },
          {
            name: '消息订阅',
            type: 'pie',
            radius: ['55%', '65%'],
            center: ['30%', '55%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            tooltip: {
              show: true,
              extraCssText: 'background: rgba(22,206,185,0.16);border: 1px solid #16CEB9;'
            },
            data: [
              { value: parseInt(chartdata.xxdy), name: '消息订阅', itemStyle: { color: '#2D99FF' } },
              {
                value: (parseInt(chartdata.total) - parseInt(chartdata.xxdy)),
                tooltip: {
                  show: false
                },
                itemStyle: { color: '#20242B' },
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          },
          {
            name: 'API授权',
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['30%', '55%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            tooltip: {
              show: true,
              extraCssText: 'background: rgba(22,206,185,0.16);border: 1px solid #16CEB9;'
            },
            data: [
              { value: parseInt(chartdata.api), name: 'API授权', itemStyle: { color: '#FA7391' } },
              {
                value: (parseInt(chartdata.total) - parseInt(chartdata.api)),
                tooltip: {
                  show: false
                },
                itemStyle: { color: '#20242B' },
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      }
      this.chart5.setOption(option2)
      var _this = this
      window.addEventListener('resize', function () {
        _this.chart5.resize()
      })
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.v31 {
  width: 20vw;
  bottom: 57px;
  position: absolute;
  left: 75vw;
  top: 77px;
  .brimg{
    width: 20vw;
  }
  .rightname {
    width: 20vw;
    height: 7vh;
    background-image: url("../../assets/backgroundtop.png");
    background-size: 100% 100%;
    font-size: 20px;
    color: #ffd1c2;
    text-align: center;
    line-height: 7vh;
    font-family: PingFangSC-Regular;
    letter-spacing: 3px;
  }
  .righttop,
  .rightmid,
  .rightbottom {
    width: 20vw;
    background-image: url("../../assets/bgcontent.png");
    background-size: 100% 100%;
    margin-top: 5px;
    padding-top: 9px;
    text-align: left;
    .biaoti {
      width: 10.5vw;
      height: 2.5vh;
      font-size: 14px;
      color: #c3fff9;
      padding-left: 10px;
      background-image: url("../../assets/bgbiaoti.png");
      background-size: 100% 100%;
      margin-left: 11px;
      display: inline-block;
      line-height: 2.5vh;
    }
  }
  .righttop {
    height: 24.5vh;
  }
  .rightmid {
    height: 21vh;
  }
  .rightbottom {
    height: 26vh;
  }
  #chart4,
  #chart5,
  #chart6 {
    width: 95%;
  }
  #chart4 {
    height: 95%;
  }
  #chart5 {
    height: 85%;
  }
  #chart6 {
    height: 95%;
  }
}
</style>
