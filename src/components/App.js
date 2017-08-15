import React from 'react'
import {Square} from './Square'

let style = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '200px',
  marginLeft: '300px'
}

export let App = function(props) {
  return(
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
