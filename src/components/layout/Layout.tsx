import React from 'react';
import { TopNav } from './TopNav';
import { SideNav } from './SideNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark">
      <TopNav />
      <div className="pt-16 flex">
        <SideNav />
        <main className="flex-1 pl-64">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout; 