import React from 'react';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const TopNav: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-dark-lighter/80 shadow-lg shadow-dark-darker/5 backdrop-blur-md border-b border-dark-lighter z-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-primary">Recruit</span>
            <span className="text-2xl font-bold tracking-tight text-slate-100">Flow</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-lg w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 bg-dark/80 border border-dark-lighter rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/30 sm:text-sm transition-all"
                  placeholder="Search candidates, jobs, or applications..."
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-primary relative transition-colors">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-5 w-5" />
              <span className="absolute top-1 right-1 block h-1.5 w-1.5 rounded-full bg-accent ring-2 ring-dark" />
            </button>

            {/* Profile dropdown */}
            <div className="relative flex items-center space-x-3">
              <div className="bg-dark-lighter rounded-lg p-1 ring-1 ring-dark-lighter hover:ring-primary/20 transition-all">
                <UserCircleIcon className="h-7 w-7 text-slate-300" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-slate-100">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav; 