<script setup>
import * as echarts from 'echarts'
import rectangle from '@/assets/img/bigScreen/rectangle.png'
import ellipse from '@/assets/img/bigScreen/ellipse.png'
import Up from '@/assets/img/bigScreen/topArrow.png'
import { newStore } from '@/utils/spost/index.js'
import throttle from '@/utils/throttle.js'
const importGuestStore = reactive(newStore)
const setFontSize = inject('setFontSize')
let initSize = ref(setFontSize()) // 初始化字体大小
let myChart = ref(null)
const chartDom = shallowRef(null)
const options = ref({
  grid: {
    // 边距自行修改
    bottom: '0%',
    left: '5%',
    top: '5%',
    right: '5%',
    containLabel: true
  },
  title: [
    {
      text: '{title|全国第1}{val|环比0.22PP}{arrow|}',
      textStyle: {
        color: '#e28557',
        rich: {
          title: {
            fontSize: 10,
            padding: [3, 5, 3, 5],
            borderWidth: 1,
            borderColor: '#e28557',
            borderRadius: 3,
            backgroundColor: 'rgba(226, 133, 87, 0.3)'
          },
          val: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#fff',
            padding: [3, 5, 0, 10]
          },
          arrow: {
            width: 12,
            height: 12,
            backgroundColor: {
              image: Up
            }
          }
        }
      },
      left: '30%',
      top: '3%'
    },
    {
      text: '{title|全国第1}{val|环比0.22PP}{arrow|}',
      textStyle: {
        color: '#e28557',
        rich: {
          title: {
            padding: [3, 5, 3, 5],
            borderWidth: 1,
            borderColor: '#e28557',
            borderRadius: 3,
            backgroundColor: 'rgba(226, 133, 87, 0.3)'
          },
          val: {
            color: '#fff',
            fontWeight: 'bold',
            padding: [3, 5, 0, 10]
          },
          arrow: {
            backgroundColor: {
              image: Up
            }
          }
        }
      },
      left: '24%',
      top: '22.8%'
    },
    {
      text: '{title|全国第1}{val|环比0.22PP}{arrow|}',
      textStyle: {
        color: '#e28557',
        rich: {
          title: {
            padding: [3, 5, 2, 5],
            borderWidth: 1,
            borderColor: '#e28557',
            borderRadius: 3,
            backgroundColor: 'rgba(226, 133, 87, 0.3)'
          },
          val: {
            color: '#fff',
            fontWeight: 'bold',
            padding: [3, 5, 0, 10]
          },
          arrow: {
            backgroundColor: {
              image: Up
            }
          }
        }
      },
      left: '30%',
      top: '41.5%'
    },
    {
      text: '{title|全国第1}{val|环比0.22PP}{arrow|}',
      textStyle: {
        color: '#e28557',
        rich: {
          title: {
            fontSize: 10,
            padding: [3, 5, 3, 5],
            borderWidth: 1,
            borderColor: '#e28557',
            borderRadius: 3,
            backgroundColor: 'rgba(226, 133, 87, 0.3)'
          },
          val: {
            fontSize: 12,
            color: '#fff',
            fontWeight: 'bold',
            padding: [3, 5, 0, 10]
          },
          arrow: {
            backgroundColor: {
              image: Up
            }
          }
        }
      },
      left: '35%',
      top: '60.5%'
    },
    {
      text: '{title|全国第1}{val|环比0.22PP}{arrow|}',
      textStyle: {
        color: '#e28557',
        rich: {
          title: {
            fontSize: 10,
            padding: [3, 5, 3, 5],
            borderWidth: 1,
            borderColor: '#e28557',
            borderRadius: 3,
            backgroundColor: 'rgba(226, 133, 87, 0.3)'
          },
          val: {
            fontSize: 12,
            color: '#fff',
            fontWeight: 'bold',
            padding: [3, 5, 0, 10]
          },
          arrow: {
            backgroundColor: {
              image: Up
            }
          }
        }
      },
      left: '20%',
      top: '79.5%'
    }
  ],
  tooltip: {
    show: false,
    // backgroundColor: '#003565',
    // borderColor: '#3786ea',
    // borderWidth: 1,
    // padding: 5,
    // confine: true,
    // formatter: formatterTooltip
  },
  xAxis: {
    mix: 0,
    max: 1,
    type: 'value',
    show: false,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: [
    {
      type: 'category',
      triggerEvent: true,
      inverse: true,
      axisLabel: {
        inside: true,
        verticalAlign: 'bottom',
        lineHeight: 25,
        margin: 0,
        padding: [2, 0, 5, 0],
        formatter(value) {
          return `{img|} {a|${value}}`
        },
        rich: {
          a: {
            fontSize: 11,
            color: '#3fbbfd'
          },
          img: {
            width: 2,
            height: 15,
            backgroundColor: {
              image: rectangle
            }
          }
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: [
        {
          value: '要客靶向执行率'
        },
        {
          value: '要客工作台'
        },
        {
          value: '营销线索转化率'
        },
        {
          value: '商机售前支撑及时率'
        },
        {
          value: '优标必投'
        }
      ]
    },
    {
      type: 'category',
      triggerEvent: true,
      inverse: true,
      axisLabel: {
        inside: true,
        verticalAlign: 'bottom',
        lineHeight: 25,
        margin: 0,
        color: '#FAC71D',
        fontWeight: 'bold',
        padding: [2, 0, 5, 0]
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: []
    }
  ],
  series: [
    {
      type: 'bar',
      data: [],
      tooltip: {
        show: true
      },
      barWidth: 8,
      showBackground: true,
      backgroundStyle: {
        color: '#01418a',
        borderRadius: 40
      },
      itemStyle: {
        borderRadius: 40,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#002E76' // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: '#0073C2' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#00A9FF' // 0% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      },
      label: {
        show: true,
        position: 'insideRight',
        distance: -5,
        formatter: () => '{z|}{a|}',
        rich: {
          a: {
            widht: 16,
            height: 16,
            backgroundColor: {
              image: ellipse
            }
          }
        }
      }
    }
  ]
})

const handleSizeOptions = () => {
  for (let i = 0; i < 5; i++) {
    options.value.title[i].textStyle.rich.title.fontSize = initSize.value * 10
    options.value.title[i].textStyle.rich.title.borderWidth = initSize.value.value * 0.5
    options.value.title[i].textStyle.rich.title.borderRadius = initSize.value * 3
    options.value.title[i].textStyle.rich.title.padding = [initSize.value * 3, initSize.value * 3]
    options.value.title[i].textStyle.rich.val.fontSize = initSize.value * 12
    options.value.title[i].textStyle.rich.arrow.width = initSize.value * 12
    options.value.title[i].textStyle.rich.arrow.height = initSize.value * 12
    options.value.title[i].textStyle.rich.val.padding = [
      initSize.value * 3,
      initSize.value * 5,
      0,
      initSize.value * 10
    ]
  }

  options.value.yAxis[1].axisLabel.fontSize = initSize.value * 11
  options.value.yAxis[0].axisLabel.lineHeight = initSize.value * 25
  options.value.yAxis[1].axisLabel.lineHeight = initSize.value * 25
  options.value.yAxis[0].axisLabel.padding = [initSize.value * 2, 0, initSize.value * 5, 0]
  options.value.yAxis[1].axisLabel.padding = [initSize.value * 2, 0, initSize.value * 5, 0]
  options.value.yAxis[0].axisLabel.rich.a.fontSize = initSize.value * 11
  options.value.yAxis[0].axisLabel.rich.a.padding = [initSize.value * 2, 0, initSize.value * 5, 0]
  options.value.yAxis[0].axisLabel.rich.img.width = initSize.value * 2
  options.value.yAxis[0].axisLabel.rich.img.height = initSize.value * 15
  options.value.series[0].barWidth = initSize.value * 8
  options.value.series[0].backgroundStyle.borderRadius = initSize.value * 40
  options.value.series[0].itemStyle.borderRadius = initSize.value * 40
  options.value.series[0].label.distance = initSize.value * -5
  options.value.series[0].label.rich.a.width = initSize.value * 15
  options.value.series[0].label.rich.a.height = initSize.value * 15
}

const getImportGuestData = async () => {
  importGuestStore.p = true
  importGuestStore.o = false
  // 模拟等待2s
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            name: '要客靶向执行率',
            value: 0.42
          },
          {
            name: '要客工作台',
            value: 0.62
          },
          {
            name: '营销线索转化率',
            value: 0.12
          },
          {
            name: '商机售前支撑及时率',
            value: 0.82
          },
          {
            name: '优标必投',
            value: 0.52
          }
        ]
      })
    }, 1000)
  })
  if (res.data.length > 0) {
    importGuestStore.p = false
    importGuestStore.o = true
    handleOptions(res)
  } else {
    importGuestStore.p = false
    importGuestStore.o = false
  }
}

getImportGuestData()

const handleOptions = (res) => {
  // 对接数据
  options.value.series[0].data = res.data
  handleSizeOptions()
  initChart()
}

const initChart = () => {
  nextTick(() => {
    if (chartDom.value) {
      chartDom.value.dispose()
    }
    chartDom.value = echarts.init(myChart.value)
    chartDom.value.setOption(options.value, true)
  })
}

const resizeHandle = () => {
  if (chartDom.value) {
    initSize.value = setFontSize()
    handleSizeOptions()
    chartDom.value.setOption(options.value, true)
    chartDom.value.resize()
  }
}

onMounted(() => {
  window.addEventListener('resize', throttle(resizeHandle, 200))
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', throttle(resizeHandle, 200))
})
</script>

<template>
  <div class="container">
    <div class="title">
      <span>要客精耕提份额</span>
    </div>
    <div v-if="importGuestStore.p" v-loading="true" element-loading-text="拼命加载中"
      element-loading-background="rgba(0, 0, 0, 0)" class="loadingMask">
    </div>
    <div v-else-if="importGuestStore.o" ref="myChart" class="myChart"></div>
    <div v-else class="errorMask">加载失败</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  .title {
    width: 100%;
    height: 8%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    background-image: url(@/assets/img/bigScreen/titleBg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;

    span {
      margin-left: 10%;
      font-size: 16px;
      background-image: linear-gradient(to bottom, #FFFFFF, #E0EEFF, #ABCFFF, #7CB4FF, #539DFF);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  .myChart {
    width: 100%;
    height: 92%;
    animation: leftToRight 0.5s ease-in-out;

    @keyframes leftToRight {
      0% {
        transform: translateX(-65%);
      }

      100% {
        transform: translateX(0%);
      }
    }
  }

  .loadingMask {
    width: 100%;
    height: 100%;
  }

  .errorMask {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 16px;
    color: #01f4f7;
  }
}
</style>