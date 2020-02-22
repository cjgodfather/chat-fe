import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import io from "socket.io-client";
import axios from "axios";
import SearchPage from "./pages/SearchFriend";
import FriendList from "./pages/FriendsList";

import "./App.css";

function App() {
  const [friendId, setFriendId] = useState("");
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const response = await axios.get(`http://localhost:5000/api/auth`);
    setFriends(response.data.users);
  };

  const clickFriend = id => {
    console.log(id);
    setFriendId(id);
  };

  useEffect(() => {
    getFriends();
  }, []);

  const socket = io(`http://localhost:5000/chat`);
  socket.on("welcome back", () => {
    console.log(`welcome back`);
  });

  return (
    <div className="App">
      <Chat socket={socket} friendId={friendId} />
      <SearchPage />
      <FriendList friends={friends} clickFriend={clickFriend} />
    </div>
  );
}

export default App;
