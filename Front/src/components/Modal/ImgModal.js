import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ImgUpload from "../ImgUpload/ImgUpload";
import "./ImgModal.css";

const ImgModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <i class="fas fa-camera-retro"></i>
      </Button>

      <Modal
        dialogClassName="mainmodal"
        show={show}
        size={"lg"}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbody">
          <ImgUpload />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send Picture
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImgModal;
