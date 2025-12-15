import React from 'react';
// Assuming you have placed 'john-doe.jpg' inside src/assets/
import ProfilePic from '../assets/profilepic.png'; 

const Header = () => {
  
  return (
    <header className="header">
      <div className="top-row">
        <h1 className="welcome-message">Welcome! **John Doe**</h1>
        <div className="user-profile">
          <span className="notification-icon">🔔</span>
          <img
            src={ProfilePic}
            alt="User Profile"
            className="profile-pic"
          />
        </div>
      </div>
      
    </header>
  );
};

export default Header;