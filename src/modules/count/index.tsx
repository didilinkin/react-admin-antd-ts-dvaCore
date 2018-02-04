/* tslint:disable */
import * as React from 'react'
import { connect } from 'react-redux'

const Count = connect(({ count }: any) => ({
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

export default Count
