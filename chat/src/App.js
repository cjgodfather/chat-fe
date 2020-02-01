import React from "react";
import io from "socket.io-client";

import "./App.css";

function App() {
  const socket = io(`http://localhost:8000`);
  socket.on("welcome back", () => {
    console.log(`welcome back`);
  });
  return <div className="App"></div>;
}

export default App;
