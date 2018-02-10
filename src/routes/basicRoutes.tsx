/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 01:24:32
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-10 14:23:37
 */
import * as React from 'react'
import Count from '../modules/count'

const Home = () => <h2> 首页 </h2>

const basicRoutes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    component: Count,
  }
]

export default basicRoutes
