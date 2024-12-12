import React from 'react';
import TopNav from '../navigation/TopNav';
import SideNav from '../navigation/SideNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark text-slate-100">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/2 via-dark to-accent/2 pointer-events-none" />
      <TopNav />
      <SideNav />
      <main className="pl-64 pt-16 relative">
        <div className="p-6 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 