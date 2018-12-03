import React from 'react'
export function Button(props) {
  return (
    <button id="modalButton" className="button" bsStyle="primary" onClick={props.handleClick} title="push me">
      <p>button</p>
    </button>
  )
}
