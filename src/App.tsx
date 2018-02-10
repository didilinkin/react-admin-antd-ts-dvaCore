/*
 * @Author: yanxiaodi
 * @Date: 2018-02-09 21:06:51
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-10 14:20:19
 */
// tslint:disable

import * as React from 'react'
import { message } from 'antd'
import { createLogger } from 'redux-logger'

import dvaCore from './dvaCore'
import rootModel from './models'

import RootRouter from './routes'

const app = dvaCore({
  models: [...rootModel],
  onError(e: any) {
    message.error(e.message) // console.log('onError', e)
  },
  onAction: createLogger(),
})

const App = app.start(<RootRouter />)

export default App
