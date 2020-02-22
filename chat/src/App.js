import React from "react";
import Chat from "./Chat";
import io from "socket.io-client";
import SearchPage from "./pages/SearchFriend";
import FriendList from "./pages/FriendsList";

import "./App.css";

function App() {
  const socket = io(`http://localhost:5000/chat`);
  socket.on("welcome back", () => {
    console.log(`welcome back`);
  });
  return (
    <div className="App">
      <Chat socket={socket} />
      <SearchPage />
      <FriendList />
    </div>
  );
}

export default App;
