import React, { useState, useEffect } from "react";
import ConversationSingle from "./SingleConversation";

const ConversationList = props => {
  const [conversationList, setConversationList] = useState([]);
  return (
    <div>
      {conversationList.map((l, idx) => (
        <ConversationSingle key={idx} profile={l} />
      ))}
    </div>
  );
};

export default ConversationList;
