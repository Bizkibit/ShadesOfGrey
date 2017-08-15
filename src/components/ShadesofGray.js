import React from 'react'
import { Square } from './Square'

export let ShadesofGray = function(props) {

  let style = {
    display: 'flex',
    alignItems: 'center',
  }

  let {progression} = props
  let total = new Array(progression)

  return (
    <div style = {style}>
      <Square opacity={1} />
      <Square opacity={0.9} />
      <Square opacity={0.8} />
      <Square opacity={0.7} />
      <Square opacity={0.6} />
      <Square opacity={0.4} />
      <Square opacity={0.3} />
      <Square opacity={0.2} />
      <Square opacity={0.1} />
    </div>
  )
}
