import React from 'react'

export function Button(props) {
  return (
    <button id="modalButton" className="button" onClick={props.handleClick} title="push me">
      <p>button</p>
    </button>
  )
}