/*
 * @Author: yanxiaodi
 * @Date: 2018-02-05 01:23:42
 * @Last Modified by: yanxiaodi
 * @Last Modified time: 2018-02-05 02:06:30
 * @Description count route
 */
/* tslint:disable */

import * as React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

const Count = connect(({ countModel }: any) => ({
  countModel
}))(function(props: any) {
  return (
    <div>
      <h2>计数器</h2>
      <h2>{ props.countModel }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'countModel/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'countModel/minus'})}}>-</button>

      <br />

      {/* <Link to="/"> 回 '首页' </Link> */}
    </div>
  )
})

export default Count
