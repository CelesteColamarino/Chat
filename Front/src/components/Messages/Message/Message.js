import React from "react";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  const isImg = text.includes("data:image/png");

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        {isImg ? (
          <img src={text} style={{ maxWidth: "300px", maxHeight: "300px" }} />
        ) : (
          <p className="messageText colorWhite">{text}</p>
        )}
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        {isImg ? (
          <img src={text} style={{ maxWidth: "300px", maxHeight: "300px" }} />
        ) : (
          <p className="messageText colorDark">{text}</p>
        )}
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
