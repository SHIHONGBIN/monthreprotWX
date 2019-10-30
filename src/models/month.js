
// import { canvsHandle } from './../utils/canvas'
import fetch from './../utils/request'
import initData from './../utils/changeData'
import {querys} from './../services/example'
export default {

  namespace: 'month',

  state: {
    curPage:0, 
    totlePage:8,
    isOnload:false,
    ajaxData:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      window.onload = () => { 
        //获取数据
        dispatch({ type: 'getData' });
        //canvas
        // dispatch({type: 'runCanvas'})
      }; 
      //设置标题
      document.title = '10月份运营月报';
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    //加载获取数据
    *getData({ payload }, { call, put }) {
      var datas = ''
      //调用service接口
      yield  querys().then((data)=>datas = data.data.Result)
      //传值改变state里面的值
      yield put({ type: 'initData', payload:{datas:datas} });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    changeCurPage(state, action) {
      console.log(action)
      return { ...state, ...action.payload };
    },
    // runCanvas(state, action){
    //   canvsHandle()
    //   return {
    //     ...state
    //   }
    // },
      //初始化数据
    initData(state, action){
      const {datas} = action.payload
      var initDatas = initData(datas)
      return {
        ...state,
        ajaxData:initDatas,
        isOnload:true
      }
    },
  },

};
