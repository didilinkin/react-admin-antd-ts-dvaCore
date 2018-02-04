/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 00:50:17
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-05 00:50:38
 * @Description setting dva-core
 */
// tslint:disable

import * as React from 'react'
import { Provider } from 'react-redux'

const { create } = require('dva-core')

// 配置 dvaCore
const dvaCore = (options: any) => {
  const dvaCore = create(options)

  options.models.forEach(function (model: any): any {
    return dvaCore.model(model)
  })

  dvaCore.start()

  const store = dvaCore._store

  dvaCore.start = (container: any): any => () => (
    <Provider store={store}>
      {container}
    </Provider>
  )

  dvaCore.getStore = () => store

  return dvaCore
}

export default dvaCore
