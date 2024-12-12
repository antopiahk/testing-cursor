import * as React from 'react';
import { Bell, ChevronDown, GraduationCap } from 'lucide-react';

const TopNav: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="glass-card mx-4 mt-4 h-14">
        <div className="h-full px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="glass-button p-2 bg-primary-500/80">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">GradPath</span>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Notification button */}
            <button className="glass-button p-2 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent-pink rounded-full border-2 border-white/50"></span>
            </button>

            {/* User profile */}
            <button className="glass-button flex items-center space-x-3 py-2 px-3">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/20">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
