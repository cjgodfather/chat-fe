import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendList = props => {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const response = await axios.get(`http://localhost:5000/api/auth`);
    setFriends(response.data.users);
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      <ul>
        {friends.map(f => (
          <li>{f.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
