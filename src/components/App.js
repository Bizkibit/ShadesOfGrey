import React from 'react'
import { ShadesofGray } from './ShadesofGray'

let style = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '200px',
  marginLeft: '300px'
}

export let App = function(props) {
  return(
    <div style = {style}>
      <ShadesofGray progression={9} />
    </div>
  )
}
