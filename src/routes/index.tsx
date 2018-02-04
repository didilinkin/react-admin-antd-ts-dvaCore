/*
 * @Author: yanxiaodi
 * @Date: 2018-02-04 18:56:21
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-04 20:24:18
 * @Description root route
 */
/* tslint:disable */
import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import configRoutes from './configRoutes'

const RouteView = ({ route }: any) => (
  <Switch> { renderRoutes(route.routes) } </Switch>
)

const rootRoutes = [{
  component: RouteView,
  routes: configRoutes,
}]

// export default rootRoutes

class Root extends React.Component {
  // getChildContext
  render () {
    return (
      <Router>
        { renderRoutes(rootRoutes) }
      </Router>
    )
  }
}

export default Root
