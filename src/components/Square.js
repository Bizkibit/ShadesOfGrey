import React from 'react'


export class Square extends React.Component {
  render() {

    let style = {
      backgroundColor: 'black',
      width: '100px',
      height: '100px',
      opacity: `${this.props.opacity}`
    }

    return (
      <div style={style}></div>
    )
  }
}
