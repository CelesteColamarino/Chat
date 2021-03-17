import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ImgUpload from "../ImgUpload/ImgUpload";
import "./UploadModal.css";

const UploadModal = ({ sendingPicture }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = useState(null);

  const sendPicture = (imagen) => {
    setImage(imagen);
  };

  const handleClick = () => {
    setShow(false);
    sendingPicture(image);
  };

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
          <ImgUpload sendPicture={sendPicture} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Send Picture
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadModal;
