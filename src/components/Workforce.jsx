import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';

const Workforce = () => {
  const [activeTab, setActiveTab] = useState('Employee Management');

  const tabs = [
    'Employee Management',
    'Payroll Management',
    'Attendance',
    'Job Hiring',
    'Post Job Hiring',
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

        {activeTab === 'Employee Management' && (
          <div className="data-table">
            <h2 className="section-title">Employee Management</h2>
            <h3>Employee Management</h3>
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

        {activeTab === 'Payroll Management' && (
          <div>
            <h2 className="section-title">Payroll Management</h2>
            <h3>Payroll Management</h3>
            <p>Manage office supplies such as papers, pens, printers, and furniture.</p>
          </div>
        )}

        {activeTab === 'Attendance' && (
          <div>
            <h2 className="section-title">Attendance</h2>
            <h3>Attendance</h3>
            <p>Track outgoing and incoming deliveries for projects.</p>
          </div>
        )}

        {activeTab === 'Job Hiring' && (
          <div>
            <h2 className="section-title">Job Hiring</h2>
            <h3>Job Hiring</h3>
            <p>View vehicle usage, fuel consumption, and maintenance reports.</p>
          </div>
        )}

        {activeTab === 'Post Job Hiring' && (
          <div>
            <h2 className="section-title">Post Job Hiring</h2>
            <h3>Job Post Hiring</h3>
            <p>Monitor materials that are expected to arrive soon.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Workforce;
