/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 00:47:39
 * @Last Modified by:   yanxiaodi
 * @Last Modified time: 2018-02-05 00:47:39
 */
/* tslint:disable */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
