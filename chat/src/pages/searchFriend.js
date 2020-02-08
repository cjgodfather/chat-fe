import React from "react";
import SearchFriendForm from "../components/SearchFriendForm";
import ConversationList from "../components/ConversationList";

const SearchFriend = () => {
  return (
    <div>
      <SearchFriendForm />
      <ConversationList />
    </div>
  );
};

export default SearchFriend;
