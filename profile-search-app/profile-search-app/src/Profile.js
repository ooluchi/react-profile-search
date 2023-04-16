/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <div className="details">
        <h2>{user.name}</h2>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

export default Profile;
