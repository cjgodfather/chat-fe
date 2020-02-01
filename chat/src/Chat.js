import React, { useState, useEffect } from "react";

const Chat = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [incomingMsg, setIncomingMsg] = useState("");

  const sendMessage = e => {
    e.preventDefault();
    socket.emit("message", message);
  };

  socket.on("send message", msg => {
    setIncomingMsg(msg);
  });

  return (
    <div>
      <div>{incomingMsg}</div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          name="message"
          onChange={e => {
            setMessage(e.target.value);
          }}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
