import React, { useState } from "react";
import ImgModal from "../Modal/ImgModal";
import { Button } from "react-bootstrap";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage, sendingPicture }) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <div className="buttonCont">
        <ImgModal sendingPicture={sendingPicture} />
      </div>
      <div className="buttonCont">
        <Button onClick={sendMessage}>
          <i class="fas fa-paper-plane"></i>
        </Button>
      </div>
    </form>
  );
};

export default Input;
