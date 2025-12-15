import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';

const Project = () => {
  const [activeTab, setActiveTab] = useState('Site Inspection');

  const tabs = [
    'Site Inspection',
    'Site Inspection Checklist',
    'Installer Monitoring',
    'Project Timeline',
    'Materials Monitoring',
  ];

  const headers = [
    'Material ID',
    'Material Name',
    'Category',
    'Quantity',
    'Status',
    'Action',
    'Description',
  ];

  return (
    <div className="inventory-section">
      
      {/* Yellow Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="table-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Quick search" />
        </div>
        <div className="action-buttons">
          <button className="add-button">+ Add Material</button>
          <button className="filter-button">Filter ⌄</button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">

        {activeTab === 'Site Inspection' && (
          <div className="data-table">
            <h2 className="section-title">Site Inspection</h2>
            <h3>Site Inspection</h3>
            <table>
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#7676</td>
                  <td>Wood</td>
                  <td>Vision Floor</td>
                  <td>100/100</td>
                  <td>In Stock</td>
                  <td>Edit</td>
                  <td>Lorem</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Site Inspection Checklist' && (
          <div>
            <h2 className="section-title">Site Inspection Checklist</h2>
            <h3>Site Inspection Checklist</h3>
            <p>Manage office supplies such as papers, pens, printers, and furniture.</p>
          </div>
        )}

        {activeTab === 'Installer Monitoring' && (
          <div>
            <h2 className="section-title">Installer Monitoring</h2>
            <h3>Installer Monitoring</h3>
            <p>Track outgoing and incoming deliveries for projects.</p>
          </div>
        )}

        {activeTab === 'Project Timeline' && (
          <div>
            <h2 className="section-title">Project Timeline</h2>
            <h3>Project Timeline</h3>
            <p>View vehicle usage, fuel consumption, and maintenance reports.</p>
          </div>
        )}

        {activeTab === 'Materials Monitoring' && (
          <div>
            <h2 className="section-title">Materials Monitoring</h2>
            <h3>Materials Monitoring</h3>
            <p>Monitor materials that are expected to arrive soon.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Project;
