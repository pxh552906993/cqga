<template>
  <div class="v11">
    <!-- <img src="../img/hline.png" alt="" /> -->
    <el-collapse-transition>
      <div v-show="showv11">
        <img src="../../../assets/shiju2/br.png" style="margin-left: 2vw;">
        <div class="leftnum">
          <div class="topnumcss">
            <img class="itemnum_c" src="../../../assets/shiju2/icon.png" alt="" />
            <div class="itemnumf">
              <div class="itemname">总表数/张</div>
              <div class="itemnum">{{topnum.total_b}}</div>
            </div>
          </div>
          <div class="topnumcss">
            <img class="itemnum_c" src="../../../assets/shiju2/icon.png" alt="" />
            <div class="itemnumf">
              <div class="itemname">数据总量/T</div>
              <div class="itemnum">{{topnum.total_s}}</div>
            </div>
          </div>
          <div class="topnumcss">
            <img class="itemnum_c" src="../../../assets/shiju2/icon.png" alt="" />
            <div class="itemnumf">
              <div class="itemname">非结构化数据/张</div>
              <div class="itemnum">{{topnum.unstru_b}}</div>
            </div>
          </div>
          <div class="topnumcss">
            <img class="itemnum_c" src="../../../assets/shiju2/icon.png" alt="" />
            <div class="itemnumf">
              <div class="itemname">非结构化数据总量/T</div>
              <div class="itemnum">{{topnum.unstru_s}}</div>
            </div>
          </div>
        </div>
        <div class="leftmid1">
          <span class="biaoti">上云数量趋势分析</span>
          <ul class="years">
            <li
              v-for="(item, index) in yearM"
              :class="isactive == index ? 'yearsitemsel' : 'yearsitem'"
              @click="changeyear(index)"  :key="index"
            >
              {{ item }}
            </li>
          </ul>
          <div id="chart1"></div>
          <div id="chart1_font">
            <span style="float: left;margin-left:10px">2018-03</span>
            <span style="float: right;margin-right:10px">2020-06</span>
          </div>
        </div>
        <div class="leftmid2">
          <span class="biaoti">各内部单位上云统计</span>
          <div id="chart2"></div>
        </div>
        <div class="leftbottom">
          <img src="../../../assets/shiju2/icon4.png" style="margin: 0 10px -5px 3vw;">
          <span class="biaoti">运维监控</span>
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
        </div>
      </div>
    </el-collapse-transition>
    <!-- <div class="leftbottom">
      <span class="biaoti" style="width: 7.8vw">上云率</span>
      <span class="biaoti" style="width: 7.8vw">完好率</span>
      <div id="chart3"></div>
    </div> -->
    <!-- <img class="brimg" src="../../assets/hline.png" alt="" /> -->
  </div>
</template>
<script>
import options from './option.js'
import echarts from 'echarts'
export default {
  components: {
  },
  data () {
    return {
      showv11: false,
      topnum: { total_b: '11173', total_s: '537.28T', unstru_b: '65', unstru_s: '490.23T' },
      isactive: 2,
      yearM: ['年'],
      chart1: null,
      chart2: null,
      chart3: null,
      data2: { id: '1', qbrw: '13771', wcrw: '13037', wwcrw: '197', sbrw: '479' }
    }
  },
  mounted () {
    console.log(window.location.host, 'hhhhhhhhot')
    var _this = this
    setTimeout(function () {
      _this.showv11 = true
    }, 1500)
    setTimeout(function () {
      _this.init()
      _this.loaddata()
    }, 2000)
  },
  methods: {
    changeyear (index) {
      this.isactive = index
    },
    init () {
      this.chart1 = echarts.init(document.getElementById('chart1'))
      this.chart2 = echarts.init(document.getElementById('chart2'))
      // this.chart3 = echarts.init(document.getElementById('chart3'))
    },
    loaddata () {
      const _this = this
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
          this.$messageIP + '/cockpit/stati', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            _this.topnum = res.data.res
          } else {}
        })
        .catch(function (error) {
          console.log(error)
        })
      // 导入数据
      this.$axios
        .get(
          this.$messageIP + '/cockpit/number', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            options.option1.xAxis.data = res.data.res.x
            options.option1.series[0].data = res.data.res.y
            _this.chart1.setOption(options.option1)
          } else {}
        })
        .catch(function (error) {
          console.log(error)
          options.option1.xAxis.data = ['2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01']
          options.option1.series[0].data = ['18', '153', '2094', '2176', '1492', '99', '93', '359', '625', '428', '390', '9', '11', '1136', '574', '352', '178', '134', '24', '38', '24', '141', '501']
          _this.chart1.setOption(options.option1)
        })
      // let lastIndex = 0
      // let currentIndex = 0
      // setInterval(() => {
      //   this.chart1.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: lastIndex
      //   })
      //   this.chart1.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      //   this.chart1.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: currentIndex
      //   })
      //   lastIndex = currentIndex
      //   ++currentIndex
      //   if (currentIndex > 12) {
      //     currentIndex = 0
      //   }
      // }, 2000)
      window.addEventListener('resize', function () {
        _this.chart1.resize()
      })
      this.$axios
        .get(
          this.$messageIP + '/cockpit/rank', {
            params: {
            }
          })
        .then(function (res) {
          if (res.data.code === '200') {
            options.option2.xAxis[0].data = res.data.res.x
            options.option2.series[0].data = res.data.res.y
            options.option2.series[1].data = [
              res.data.res.y[0],
              res.data.res.y[0],
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
            options.option2.yAxis[0].max = res.data.res.y[0]
            _this.chart2.setOption(options.option2)
          } else {}
        })
        .catch(function (error) {
          console.log(error)
          options.option2.xAxis[0].data = [
            '治安',
            '警综',
            '交巡警',
            '监管',
            '刑警',
            '情报信息中心',
            '经侦',
            '禁毒',
            '出入境',
            '警令部',
            '政治部',
            '网安',
            '法制'
          ]
          options.option2.series[0].data = [
            '1495',
            '599',
            '439',
            '356',
            '309',
            '136',
            '87',
            '61',
            '9',
            '6',
            '6',
            '5',
            '5'
          ]
          options.option2.series[1].data = [
            '1495',
            '1495',
            '1495',
            '1495',
            '1495',
            '1495',
            '1495',
            '1495',
            '1495',
            '1495',
            '1495',
            '1495'
          ]
          options.option2.yAxis[0].max = 1495
          _this.chart2.setOption(options.option2)
        })

      let lastIndex2 = 0
      let currentIndex2 = 0
      setInterval(() => {
        this.chart2.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: lastIndex2
        })
        this.chart2.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex2
        })
        this.chart2.dispatchAction({
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
        _this.chart2.resize()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.v11 {
  width: 20vw;
  bottom: 57px;
  position: absolute;
  left: 1vw;
  top: 8vh;
  .brimg{
    width: 20vw;
  }
  .leftname {
    width: 20vw;
    height: 7vh;
    background-image: url("../../../assets/backgroundtop.png");
    background-size: 100% 100%;
    font-size: 20px;
    color: #ffd1c2;
    text-align: center;
    line-height: 7vh;
    font-family: PingFangSC-Regular;
    letter-spacing: 3px;
  }
  .leftnum {
    width: 20.5vw;
    height: 17vh;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-image: url("../../../assets/shiju2/left1.png");
    background-size: 100% 100%;
    .topnumcss {
      width: 45%;
      height: 5vh;
      background-size: 100% 100%;
      display: flex;
      .itemnumf{
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .itemnum {
        width: 100%;
        text-align: left;
        font-family: DINAlternate-Bold;
        font-size: 24px;
        color: #00D6DF;
        line-height: 3vh;
      }
      .itemname {
        width: 100%;
        text-align: left;
        font-size: 12px;
        color: #b6fae8;
        font-family: PingFangSC-Regular;
      }
      .itemnum_c {
        width: 3.3vw;
        height: 3.3vw;
      }
    }
  }
  .leftmid1,
  .leftmid2{
    width: 20.5vw;
    background-image: url("../../../assets/shiju2/left2.png");
    background-size: 100% 100%;
    margin-top: 5px;
    padding-top: 9px;
    text-align: left;
    .biaoti {
      width: 8.4vw;
      height: 2.7vh;
      font-size: 14px;
      color: #c3fff9;
      text-align: center;
      background-image: url("../../../assets/shiju2/biaoti.png");
      background-size: 100% 100%;
      margin-left: 11px;
      display: inline-block;
      line-height: 2.5vh;
    }
  }
  .leftbottom {
    width: 26.1vw;
    background-image: url("../../../assets/shiju2/left3.png");
    background-size: 100% 100%;
    margin-top: 5px;
    padding-top: 9px;
    text-align: left;
    .biaoti {
      transform: scaleX(-1);
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 1.33px;
    }
    .wk{
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 1.5vh;
      .xwk{
        width: 40%;
        height: 6vh;
        background-image:url('../../../assets/shiju2/fz.png');
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 5px;
        .xname{
            font-size:12px;
            font-family:PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:17px;
            padding-top: 5px;
        }
        .xcount{
            font-size:20px;
            font-family:PingFangSC;
            font-weight:400;
            color:#FF9B5B;
            line-height:18px;
        }
      }
    }
  }
  .leftmid1 {
    height: 24.2vh;
    .years {
      width: 8.5vw;
      height: 2.2vh;
      float: right;
      padding: 0;
      margin: 0;
      padding-top: 3px;
      .yearsitem,
      .yearsitemsel {
        width: 2vw;
        height: 2vh;
        float: right;
        list-style: none;
        border: 1px solid #00e8ef;
        margin-right: 10px;
        opacity: 0.5;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #c3fff9;
        text-align: center;
        cursor: pointer;
      }
      .yearsitemsel {
        background-color: #00e8ef;
        color: #ddd;
        opacity: 1;
      }
    }
  }
  .leftmid2 {
    height: 24.2vh;
  }
  .leftbottom {
    height: 18vh;
  }
  #chart1,
  #chart2,
  #chart3 {
    width: 100%;
  }
  #chart1 {
    height: 78%;
  }
  #chart2 {
    height: 95%;
  }
  #chart3 {
    height: 95%;
  }
  #chart1_font span{
  color: #fff;
  font-size: 14px
  }
}
</style>
