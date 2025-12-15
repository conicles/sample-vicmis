import React from 'react';
// Assuming you have placed 'vicmis-logo.png' inside src/assets/
import VicmisLogo from '../assets/logo.png'; 

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'Project', icon: '📝' },
    { name: 'Inventory', icon: '📦' },
    { name: 'Workforce', icon: '🧑‍🤝‍🧑' },
    { name: 'Documents', icon: '📑' },
    { name: 'Customer', icon: '👤' },
    { name: 'Setting', icon: '⚙️' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={VicmisLogo} alt="VICMIS Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }}/>
        VICMIS
      </div>
      <nav className="nav-menu">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={item.name === activeItem ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveItem(item.name)}
            >
              <span className="icon">{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;