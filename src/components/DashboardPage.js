import React from 'react';
import NavBar from './NavBar';
import VehicleInfo from './VehicleInfo';

const DashboardPage = () => (
  <div>
    <NavBar />
    <div className='content-container'>
      <VehicleInfo />
    </div>
  </div>
);

export default DashboardPage;
