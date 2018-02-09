/*
 * @Author: yanxiaodi
 * @Date: 2018-02-09 20:50:03
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-09 22:29:15
 */
// tslint:disable

import * as React from 'react'
import { Provider } from 'react-redux'

const createLoading = require('dva-loading') // Typescript 无法找到 .d.ts 文件时, 使用这个方法

import {
  ConnectedRouter,
  routerReducer as routing,
  routerMiddleware,
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const { create } = require('dva-core')

const dvaCore = (options: any) => {
  const history = options.history || createHistory()

  const patchHistory = (history: any) => {
    const oldListen = history.listen
    history.listen = (callback: any) => {
      callback(history.location)
      return oldListen.call(history, callback)
    }
    return history
  }

  const createOpts = {
    initialReducer: {
      routing,
    },
    setupMiddlewares(middlewares: any) {
      return [
        routerMiddleware(history),
        ...middlewares,
      ]
    },
    setupApp(app: any) {
      app._history = patchHistory(history)
    },
  }

  const dvaCore = create(options, createOpts)

  options.models.forEach(function (model: any): any {
    return dvaCore.model(model)
  })
  dvaCore.start()
  const store = dvaCore._store

  dvaCore.start = (container: any): any => () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {container}
      </ConnectedRouter>
    </Provider>
  )
  dvaCore.getStore = () => store


  dvaCore.use(createLoading())

  return dvaCore
}

export default dvaCore
