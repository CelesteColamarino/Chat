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

      {isImg ? (
        <div className="messageBox backgroundPicture">
          <img
            alt="uploadedPicture"
            src={text}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      ) : (
        <div className="messageBox backgroundText">
          <p className="messageText colorWhite">{text}</p>
        </div>
      )}
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      {isImg ? (
        <div className="messageBox backgroundPicture">
          <img
            alt="uploadedPicture"
            src={text}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      ) : (
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{text}</p>
        </div>
      )}

      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
