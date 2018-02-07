/*
 * @Author: yanxiaodi
 * @Date: 2018-02-04 18:56:21
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-05 02:01:11
 * @Description root route
 */
/* tslint:disable */

import * as React from 'react'
// import { renderRoutes } from 'react-router-config'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
} from 'react-router-dom'

// import configRoutes from './configRoutes'

// const RouteView = ({ route }: any) => (
//   <Switch> { renderRoutes(route.routes) } </Switch>
// )

// const rootRoutes = [{
//   component: RouteView,
//   routes: configRoutes,
// }]

// class RootRouter extends React.Component {
//   // getChildContext
//   render () {
//     return (
//       <Router>
//         { renderRoutes(rootRoutes) }
//       </Router>
//     )
//   }
// }

// export default RootRouter

const ParamsExample = () => (
  <Router>
    <div>
      <h2>账号</h2>
      <ul>
        <li><Link to="/react-router">React Router</Link></li>
        <li><Link to="/leoashin">LeoAshin</Link></li>
        <li><Link to="/justjavac">justjavac</Link></li>
        <li><Link to="/reacttraining">React Training</Link></li>
      </ul>

      <Route path="/:id" component={Child}/>
    </div>
  </Router>
)

const Child = ({ match }: any) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default ParamsExample
