/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileList from './components/ProfileList';
import profilesData from './data/profilesData';
import './SearchBar.css';
import './index.css';
import './ProfileList.css';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProfiles = profilesData.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange} />
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
}

export default App;
