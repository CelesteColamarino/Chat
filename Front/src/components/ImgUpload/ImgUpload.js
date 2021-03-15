import React, { useRef, useEffect, useState } from "react";
import Upload from "./Upload/Upload";
import { Button, InputGroup, FormControl } from "react-bootstrap";

import "./ImgUpload.css";

const ImgUpload = () => {
  const canvas = useRef(null);
  const canvasimg = useRef(null);

  const [start, setStart] = useState([]);
  const [finish, setFinish] = useState([]);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [ctxImg, setCtxImg] = useState({});
  const [ctx, setCtx] = useState({});
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState({});
  const [tag, setTag] = useState("");

  useEffect(() => {
    setCtxImg(canvasimg.current.getContext("2d"));
    setCtx(canvas.current.getContext("2d"));
  }, []);

  const handleImage = (e) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        ctxImg.drawImage(img, 0, 0, 500, 500);
        setLoading(false);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFinish([]);
    setMouseDown(true);
    setStart([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMouseDown(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!mouseDown) {
      return;
    }

    setFinish([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.strokeStyle = "black";

    const startx = start[0];
    const starty = start[1];
    const width = finish[0] - start[0];
    const height = finish[1] - start[1];

    ctx.strokeRect(startx, starty, width, height);

    setWidth(finish[0] - start[0]);
    setHeight(finish[1] - start[1]);
  };

  const handleTag = (e) => {
    ctxImg.strokeRect(start[0], start[1], width, height);

    if (tag) {
      ctxImg.font = "20px roboto";
      ctxImg.fillText(tag, finish[0], finish[1]);
    }
    let imageData = ctxImg.getImageData(0, 0, 500, 500);

    setImage(imageData);
    setHeight(null);
    setWidth(null);
    setTag("");
  };

  return (
    <React.Fragment>
      {loading ? <Upload handleImage={handleImage} /> : null}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          padding: "30px",
        }}
      >
        {height ? (
          <InputGroup
            className="mb-3"
            style={{ zIndex: "3", position: "absolute" }}
          >
            <FormControl
              placeholder="Choose a tag's name"
              aria-label="Choose a tag's name"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setTag(e.target.value);
              }}
              value={tag}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={handleTag}>
                <i class="fas fa-user-tag"></i>Tag
              </Button>
            </InputGroup.Append>
          </InputGroup>
        ) : null}
        <canvas
          ref={canvasimg}
          height="500"
          width="500"
          style={{ position: "absolute", left: "0", top: "0", zIndex: "0" }}
        ></canvas>
        <canvas
          ref={canvas}
          height="500"
          width="500"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ position: "absolute", left: "0", top: "0", zIndex: "1" }}
        ></canvas>
      </div>
    </React.Fragment>
  );
};

export default ImgUpload;
