import React from "react";
import "./modal.css";
import { Button, Modal, FormGroup, FormControl } from "react-bootstrap";
function ModalWindow({
  modalIsOn,
  toggleModal,
  value,
  onChange,
  onSubmit,
  clearModal
}) {
  return (
    modalIsOn && (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormGroup controlId="formControlsTextarea">
              <FormControl
              rows={10}
              cols={80}
                componentClass="textarea"
                placeholder="textarea"
                type="text"
                value={value}
                onChange={onChange}
              />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={onSubmit}>Submit</Button>
            <Button onClick={clearModal}>Clear</Button>
            <Button onClick={toggleModal} bsStyle="danger">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  );
}

export default ModalWindow
