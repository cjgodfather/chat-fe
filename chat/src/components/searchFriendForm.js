import React, { useState } from "react";

const SearchFriendForm = props => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Find or start a conversation"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchFriendForm;
