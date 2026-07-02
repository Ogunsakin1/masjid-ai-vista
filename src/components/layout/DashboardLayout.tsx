import React from 'react';
import Sidebar from '../shared/Sidebar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow p-4 md:p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
