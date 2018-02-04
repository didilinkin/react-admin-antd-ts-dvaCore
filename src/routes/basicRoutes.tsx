/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 01:24:32
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-05 02:04:58
 */
// import * as React from 'react'
// import { Link } from 'react-router-dom'
import Count from '../modules/count'

// const Home = () => (
//   <div>
//     <h2>首页</h2>

//     <Link to="/count"> 去往 '计数器' </Link>
//   </div>
// )

const basicRoutes = [
  // {
  //   path: '/',
  //   component: Home,
  // },
  {
    path: '/count',
    component: Count,
  }
]

export default basicRoutes
