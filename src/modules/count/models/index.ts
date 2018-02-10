/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 00:51:04
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-10 15:19:22
 */
/* tslint:disable */

import * as SImmutable from 'seamless-immutable'

console.dir(SImmutable)

const initState = SImmutable({
  countStr: '初始值',
  countNum: 0,
})

const countModel = {
  namespace: 'countModel',
  state: initState,
  reducers: {
    add(state: any) {
      return state.merge({
        countStr: '增量',
        countNum: state.countNum + 1,
      })
    },
    minus(state: any) {
      return state.merge({
        countStr: '减量',
        countNum: state.countNum - 1,
      })
    },
  }
}

export default [
  countModel,
]
