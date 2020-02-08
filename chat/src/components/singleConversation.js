import React from "react";

const ConversationSingle = ({ profile }) => {
  return (
    <div>
      <img src={profile.profileImg} alt="profile" />
      <p>{profile.name}</p>
      <p>{profile.status}</p>
      <p>{profile.cohort}</p>
    </div>
  );
};

export default ConversationSingle;
