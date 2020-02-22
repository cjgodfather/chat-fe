import React from "react";

const FriendList = ({ friends, clickFriend }) => {
  return (
    <div>
      <ul>
        {friends &&
          friends.map(f => (
            <li key={f._id} onClick={() => clickFriend(f._id)}>
              {f.username}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FriendList;
