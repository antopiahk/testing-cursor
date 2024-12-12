import React from 'react';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const TopNav: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-dark-lighter/50 backdrop-blur-md border-b border-dark-lighter z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Recruit</span>
            <span className="text-2xl font-bold text-slate-100">Flow</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-lg w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 bg-dark/50 border border-dark-lighter rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent sm:text-sm transition-all"
                  placeholder="Search candidates, jobs, or applications..."
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-primary relative transition-colors">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-accent ring-2 ring-dark" />
            </button>

            {/* Profile dropdown */}
            <div className="relative flex items-center space-x-3">
              <div className="bg-dark-lighter rounded-full p-1 ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
                <UserCircleIcon className="h-8 w-8 text-slate-300" />
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