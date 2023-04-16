/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React from 'react';
// import './SearchBar.css';

function SearchBar({ searchQuery, handleSearchQueryChange }) {
  return (
    <div className = "container">
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search profiles"
      />
    </div>
    </div>
  );
}

export default SearchBar;
