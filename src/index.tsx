/* tslint:disable */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import Count from './count'
import Root from './routes'

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

// Model
const app = dva({
  models: [Count],
  onError(e: any) {
    console.log('onError', e)
  },
})

const App = app.start(<Root />)

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
