/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 01:23:42
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-10 15:14:18
 * @Description count route
 */
/* tslint:disable */

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Count = connect(({ countModel }: any) => ({
  countModel
}))(function(props: any) {
  return (
    <div>
      <h2>计数器</h2>
      <Link to="/home"> 跳向 '/home' ( 测试 静态路由 ) </Link>

      <br />
      <br />

      <h2>{ props.countModel.countNum }</h2>
      <h2>{ props.countModel.countStr }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'countModel/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'countModel/minus'})}}>-</button>
    </div>
  )
})

export default Count
