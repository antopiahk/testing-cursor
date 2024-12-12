import React from 'react';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const TopNav: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Recruit</span>
            <span className="text-2xl font-bold text-gray-900">Flow</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-lg w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search candidates, jobs, or applications..."
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </button>

            {/* Profile dropdown */}
            <div className="relative flex items-center space-x-3">
              <UserCircleIcon className="h-8 w-8 text-gray-400" />
              <span className="hidden sm:block text-sm font-medium text-gray-700">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav; 