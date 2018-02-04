/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 01:24:59
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-05 02:04:11
 * @Description set dvaCore => models routes
 */
// tslint:disable

import * as React from 'react'

import dvaCore from './dvaCore'
import rootModel from './models'
import RootRouter from './routes'

const app = dvaCore({
  models: [...rootModel],
  onError(e: any) {
    console.log('onError', e)
  },
})

console.dir(app)

const store = app._store.getState()

console.dir(store)

const App = app.start(<RootRouter />)

export default App
