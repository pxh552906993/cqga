const shangyun = require('../../../assets/shangyun.png')
export default {
  option1: {
    tooltip: {
      trigger: 'axis',
      formatter: '{b}上云量: {c} '
    },
    grid: {
      top: '10%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        fontSize: 12,
        interval: 0,
        textStyle: {
          color: '#ffffff'
        }
      },
      data: []
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#18192E'
        }
      },
      axisLabel: {
        show: true,
        fontSize: 12,
        interval: 0,
        textStyle: {
          color: '#ffffff'
        }
      },
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'line',
        symbol: 'none',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(255,186,64,.1)' // 0% 处的颜色
              },
              {
                offset: 0,
                color: 'rgba(255,186,64,1)' // 100% 处的颜色
              }
            ]
          }
        },
        lineStyle: {
          width: 2,
          color: '#FFBA40 ' // 改变折线颜色
        }
      }
    ]
  },
  option2: {
    color: ['#3FF4FA'],
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
          normal: {}
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
  },
  option3: {
    color: ['#00E8EF', '#2D99FF', '#2D6AFF', '#00EFB7'],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%<br />数量：{c}'
    },
    graphic: {
      elements: [
        {
          type: 'image',
          style: {
            image: shangyun,
            width: 80,
            height: 80
          },
          left: '20%',
          top: '27%'
        }
      ]
    },
    legend: {
      orient: 'vertical',
      // icon:'circle',
      itemWidth: 10,
      itemHeight: 10,
      top: '10%',
      right: '10%',
      itemGap: 10,
      // formatter: "{b}: {d}%<br />数量：{c}",
      data: ['社会智能安防', '市域卡口', '轨交站点', '街面'],
      textStyle: {
        color: '#ffffff',
        fontSize: 12
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        center: ['30%', '50%'],
        label: {
          normal: {
            show: false,
            position: 'inside',
            formatter: '{text|{d}%}\n{value|{b}}',
            rich: {
              text: {
                color: '#fff',
                fontSize: 14,
                align: 'center',
                verticalAlign: 'middle',
                padding: 0
              },
              value: {
                color: '#C6E5FF',
                fontSize: 12,
                align: 'center',
                verticalAlign: 'middle'
              }
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: 46
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '社会智能安防' },
          { value: 310, name: '市域卡口' },
          { value: 234, name: '轨交站点' },
          { value: 135, name: '街面' }
        ]
      }
    ]
  }
}
