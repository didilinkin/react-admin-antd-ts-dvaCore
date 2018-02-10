/*
 * @Author: yanxiaodi
 * @Date: 2018-02-09 23:01:58
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-10 10:55:36
 */
// tslint:disable

import * as React from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter,
  routerReducer as routing,
  routerMiddleware,
} from 'react-router-redux'

const { create } = require('dva-core')
const createLoading = require('dva-loading') // Typescript 无法找到 .d.ts 文件
const reduxUnhandledAction = require('redux-unhandled-action').default

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

  const callback = (action: any) => {
    console.error(`${action} didn't lead to creation of a new state object`)
  } // 开发过程中，若 Action 未使 State 发生变化则发出警告

  const createOpts = {
    initialReducer: {
      routing,
    },
    setupMiddlewares(middlewares: any) {
      return [
        routerMiddleware(history),
        reduxUnhandledAction(callback),
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

  // console.dir(dvaCore)
  return dvaCore
}

export default dvaCore
