
import echarts from 'echarts'
export default {
  option1: {
    color: ['#F76E3E'],
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '5%',
      containLabel: true,
      z: 22
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}：{c}'
    },
    xAxis: [
      {
        type: 'category',
        gridIndex: 0,
        data: [],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          interval: 0,
          rotate: 40,
          color: '#ffffff',
          fontSize: 10
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        gridIndex: 0,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#ffffff'
        }
      }
    ],
    series: [
      {
        name: '合格率',
        type: 'pictorialBar',
        stack: '总量',
        symbol: 'fixed',
        symbolSize: [15, 5],
        symbolMargin: 2,
        symbolRepeat: 'repeat',
        symbolBoundingData: 300,
        z: -10,
        itemStyle: {
          normal: {
            color: '#EE521B'
          }
        },
        data: [],
        zlevel: 11
      }
    ]
  },
  option2: {
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
        return `{title|${name}}`
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
      text: '{name|' + '总量' + '}\n{val|' + '131' + '}',
      x: '30%',
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
          { value: 80, name: '表授权', itemStyle: { color: '#16CEB9' } },
          {
            value: 20,
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
          { value: 18, name: '消息订阅', itemStyle: { color: '#2D99FF' } },
          {
            value: 72,
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
          { value: 2, name: 'API授权', itemStyle: { color: '#FA7391' } },
          {
            value: 98,
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
  },
  option3: {
    color: ['#2D99FF'],
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '5%',
      containLabel: true,
      z: 22
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}：{c}'
    },
    xAxis: [
      {
        type: 'category',
        gridIndex: 0,
        data: [],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          interval: 0,
          rotate: 40,
          color: '#ffffff',
          fontSize: 12
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        gridIndex: 0,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        min: 0,
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#ffffff'
        }
      }
    ],
    series: [
      {
        name: '合格率',
        type: 'bar',
        barWidth: '8',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#59F4FF' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#2D99FF' // 100% 处的颜色
            }], false)
          }
        },
        data: [],
        zlevel: 11
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: '8',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barGap: '-100%',
        data: [],
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        zlevel: 9
      }
    ]
  }
}
