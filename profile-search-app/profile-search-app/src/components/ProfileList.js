/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React from 'react';
// import './ProfileList.css';

function ProfileList({ profiles }) {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div className="profile-card" key={profile.id}>
          <img src={profile.avatar} alt={`${profile.name} avatar`} />
          <div className="profile-info">
            <h3>{profile.name}</h3>
            <p>{profile.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
