import React, { useState, useEffect } from "react";

const Chat = ({ socket, friendId }) => {
  const [newMessage, setNewMessage] = useState("");
  const [incomingMsg, setIncomingMsg] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = e => {
    e.preventDefault();
    socket.emit("message", newMessage);
  };

  socket.on("send message", msg => {
    setIncomingMsg(msg);
  });

  useEffect(() => {
    console.log(`get chat history with friendId`);
  }, [friendId]);

  return (
    <div>
      <div>{chatHistory}</div>
      <div>{incomingMsg}</div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          name="message"
          onChange={e => {
            setNewMessage(e.target.value);
          }}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
