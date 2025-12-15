import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Document from './components/Document';
import Project from './components/Project';
import Settings from './components/Settings';
import Workforce from './components/Workforce';
import Customer from './components/Customer';
import './App.css'; 
import Inventory from './components/Inventory';

// --- Empty Content Components for Clickable Pages ---
const PageContentWrapper = ({ title, description }) => (
  <div className="page-content-wrapper">
    <h2 className="section-title">{title}</h2>
    <p>{description}</p>
    <p style={{marginTop: '20px', color: '#888'}}>
      This page content is currently empty.
    </p>
  </div>
);

const DashboardContent = () => <PageContentWrapper title="Dashboard Content" description="A summary of key metrics and project status." />;

const App = () => {
  // State to track which menu item is currently active. Defaults to 'dashboard'.
  const [activeItem, setActiveItem] = useState('Dashboard');

  // Function to render the correct component based on the active state
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Project':
        return <Project />;
      case 'Inventory':
        return <Inventory />;
      case 'Workforce':
        return <Workforce />;
      case 'Documents':
        return <Document />;
      case 'Customer':
        return <Customer />;
      case 'Setting':
        return <Settings />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <main className="content-area">
        <Header />
        <div className="main-content-wrapper">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;