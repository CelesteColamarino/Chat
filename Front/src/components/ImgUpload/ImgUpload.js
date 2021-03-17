import React, { useRef, useEffect, useState } from "react";
import LoadFile from "./LoadFile/LoadFile";
import Tag from "./Tag/Tag";

import "./ImgUpload.css";

const ImgUpload = ({ sendPicture }) => {
  const canvas = useRef(null);
  const canvasimg = useRef(null);

  const [ctxImg, setCtxImg] = useState({});
  const [ctx, setCtx] = useState({});
  const [mouseDown, setMouseDown] = useState(false);
  const [start, setStart] = useState([]);
  const [finish, setFinish] = useState([]);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [loading, setLoading] = useState(true);
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
      sendPicture(canvasimg.current.toDataURL("image/png"));
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

    setHeight(null);
    setWidth(null);
    setTag("");
    sendPicture(canvasimg.current.toDataURL("image/png"));
  };

  return (
    <React.Fragment>
      {loading ? <LoadFile handleImage={handleImage} /> : null}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          padding: "30px",
        }}
      >
        {height ? (
          <Tag handleTag={handleTag} setTag={setTag} tag={tag} />
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
