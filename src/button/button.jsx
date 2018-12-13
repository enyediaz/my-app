import React from "react";
import './button.css'
import { Button } from "react-bootstrap";
function OpenModalButton({ toggleModal }) {
  return (
    <Button
      className="modalButton"
      bsStyle="info"
      bsSize="large"
      onClick={toggleModal}
      title="push me"
    >
      Open Modal
    </Button>
  );
}

export default OpenModalButton