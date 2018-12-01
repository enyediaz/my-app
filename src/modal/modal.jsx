import React from 'react';

export function Modal (props) {
  return(
    props.isOn === true ?       
      <div className="modal">
        <div className="modal-content">
          <div>
            <span className="closeButton" onClick={props.handleClick}>&times;</span>
            <p>this is the modal</p>
          </div>
        </div>        
      </div>
    : 
      null
    
  )
}
