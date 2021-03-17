import React from "react";
import { Card, Button } from "react-bootstrap";
import "./LoadFile.css";

const LoadFile = ({ handleImage }) => {
  return (
    <Card className="uploadCard text-center">
      <Card.Img className="uploadImg" variant="top" src="/images/upload2.svg" />
      <Card.Body>
        <Button className="uploadBtn" variant="primary">
          <input
            className="inputUp"
            onChange={handleImage}
            type="file"
            name="imageLoader"
          />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LoadFile;
