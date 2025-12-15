import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';

const Customer = () => {
  const [activeTab, setActiveTab] = useState('Client Inquiries');

  const tabs = [
    'Client Inquiries',
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
      <h2 className="section-title">Construction Materials</h2>

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

        {activeTab === 'Client Inquiries' && (
          <div className="data-table">
            <h3>Client Inquiries</h3>
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

      </div>
    </div>
  );
};

export default Customer;
