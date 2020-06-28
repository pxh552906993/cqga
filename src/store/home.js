import axios from 'axios'
// collection.js
const state = {
  IP: window.location.host === '77.1.34.12:8089' ? 'http://77.1.34.12:8089' : 'http://localhost:80',
  collects: [], // 初始化一个colects数组
  homeData: {
    js: '“智学”是市局“十智”工程其中之一，主要目标是通过移动警务终端与电脑端的应用，提升基层警员的大数据技能，将智慧公安的能力“惠”至一线，并打造警务经验众创众筹的新模式，构建公安业务体系智慧宝库，推动公安大数据形成“学”、“研”、“用”一体化的良性发展。包括“智学自创”应用、移动端“智学”APP',
    cg: [{
      z_name: '智·学',
      bool: true,
      introduce: '创新大数据学习模式，通过移动警务终端，向全警创新提供引导式学习、交互式学习、碎片化学习能力，实现随时学、随心学、按需学，全方位“滴灌”大数据知识。'
    }, {
      z_name: '智·创',
      bool: false,
      introduce: '实现“零代码”自创公安业务模型，以简单拖拽方式即可完成大数据建模，打造业务与技术的深度融合，让民警“玩转数据、提升技能”。'
    }, {
      z_name: '智·用',
      bool: false,
      introduce: '模型超市。“众筹”全警自创业务模型，形成服务全警实战的大数据模型孵化中心大数据交流学习平台。集需求发布、疑问解答、经验分享为一体，打造全警大数据交流集散地 '
    }],
    content: ''
  }
}
const getters = {
  renderCollects (state) { // 承载变化的collects
    return state.collects
  }
}
const mutations = {
  pushCollects (state, items) { // 如何变化collects,插入items
    state.collects.push(items)
  },
  getDatas (state, items) {
    axios
      .get(
        state.IP + '/tenwisdow/wisdow_xq', {
          params: {
            type: items
          }
        })
      .then(function (res) {
        if (res.data.code === '200') {
          state.homeData.js = res.data.js
          state.homeData.cg = res.data.cg
          if (state.homeData.cg !== []) {
            state.homeData.cg.forEach(function (item, index, arr) {
              item.bool = false
            })
          }
          mutations.lTitleChange(state, 0)
        } else {}
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  lTitleChange (state, k) {
    console.log(state)
    state.homeData.content = ''
    state.homeData.cg.forEach(function (item, index, arr) {
      if (index === k) {
        item.bool = true
        state.homeData.content = item.introduce
      } else {
        item.bool = false
      }
    })
  }
}
const actions = {
  invokePushItems (context, item) { // 触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit('pushCollects', item)
  },
  invokeGetDatas (context, item) {
    context.commit('getDatas', item)
  },
  invokelTitleChange (context, item) {
    context.commit('lTitleChange', item)
  }
}
export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
