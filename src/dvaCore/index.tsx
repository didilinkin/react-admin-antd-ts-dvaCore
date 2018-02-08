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

import {
  ConnectedRouter,
  routerReducer as routing,
  routerMiddleware,
} from 'react-router-redux' // push

import createHistory from 'history/createBrowserHistory'
// import { Route } from 'react-router-dom'

// import Count from '../modules/count'

const { create } = require('dva-core')

// 配置 dvaCore
const dvaCore = (options: any) => {
  // Create a history of your choosing (we're using a browser history in this case)
  const history = options.history || createHistory()

  function patchHistory(history: any) {
    const oldListen = history.listen;
    history.listen = (callback: any) => {
      callback(history.location)
      return oldListen.call(history, callback)
    };
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
      ];
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

      { /* ConnectedRouter will use the store from Provider automatically */ }
      {/* <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Count}/>
        </div>
      </ConnectedRouter> */}
    </Provider>
  )

  dvaCore.getStore = () => store

  return dvaCore
}

export default dvaCore
