/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 01:24:32
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-10 15:19:19
 */
import * as React from 'react'
import { Link } from 'react-router-dom'

import Count from '../modules/count'

const Home = () => (
  <div>
    <h2> Home </h2>

    <br />
    <br />

    <Link to="/"> 跳向 '/' ( 测试 静态路由 ) </Link>
  </div>
)

const basicRoutes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/', // 缺省配置
    component: Count,
  },
]

export default basicRoutes
