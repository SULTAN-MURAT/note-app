import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterNotes } from "../redux/noteSlice";

function Header() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    dispatch(filterNotes(searchText));
  }, [searchText,dispatch]);

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="header">
      <h1>Notes App</h1>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInput}
        />
      </div>
    </header>
  );
}

export default Header;
