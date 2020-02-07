import React from "react";

const ConversationSingle = props => {
  return (
    <div>
      <img src={props.profileImg} alt="profile" />
      <p>{props.name}</p>
    </div>
  );
};

export default ConversationSingle;
