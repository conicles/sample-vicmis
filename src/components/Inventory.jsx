import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('Construction Material Inventory');

  const tabs = [
    'Construction Material Inventory',
    'Office Material Inventory',
    'Delivery',
    'Car Reports',
    'Incoming Shipments',
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

        {activeTab === 'Construction Material Inventory' && (
          <div className="data-table">
            <h2 className="section-title">Inventory</h2>
            <h3>Construction Material Inventory</h3>
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

        {activeTab === 'Office Material Inventory' && (
          <div>
            <h2 className="section-title">Office Material Inventory</h2>
            <h3>Office Material Inventory</h3>
            <p>Manage office supplies such as papers, pens, printers, and furniture.</p>
          </div>
        )}

        {activeTab === 'Delivery' && (
          <div>
            <h2 className="section-title">Delivery</h2>
            <h3>Delivery</h3>
            <p>Track outgoing and incoming deliveries for projects.</p>
          </div>
        )}

        {activeTab === 'Car Reports' && (
          <div>
            <h2 className="section-title">Car Reports</h2>
            <h3>Car Reports</h3>
            <p>View vehicle usage, fuel consumption, and maintenance reports.</p>
          </div>
        )}

        {activeTab === 'Incoming Shipments' && (
          <div>
            <h2 className="section-title">Incoming Shipments</h2>
            <h3>Incoming Shipment</h3>
            <p>Monitor materials that are expected to arrive soon.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Inventory;
