/*
 * @Author: yanxiaodi
 * @Date: 2018-02-10 14:22:47
 * @Last Modified by:   yanxiaodi
 * @Last Modified time: 2018-02-10 14:22:47
 */
/* tslint:disable */

import * as React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import configRoutes from './configRoutes'

const RouteView = ({ route }: any) => <Switch> { renderRoutes(route.routes) } </Switch>
const RootRoutes = () => renderRoutes([{ component: RouteView, routes: configRoutes }])

export default RootRoutes
