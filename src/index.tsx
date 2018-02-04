/* tslint:disable */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import Count from './count'

const { create } = require('dva-core')

// 配置 dva
const dva = (options: any) => {
  const dva = create(options)

  options.models.forEach(function (model: any): any {
    return dva.model(model)
  })

  dva.start()

  const store = dva._store

  dva.start = (container: any): any => () => (
    <Provider store={store}>
      {container}
    </Provider>
  )

  dva.getStore = () => store

  return dva
}

// Router: 临时测试
// import Router from 'routes'
const Router = connect(({ count }: any) => ({
  count
}))(function(props: any) {
  return (
    <div>
      {/* <TestError /> */}
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
    </div>
  )
})

// Model
const app = dva({
  models: [Count],
  onError(e: any) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
