import { Bell, ChevronDown, User } from 'lucide-react';

export const TopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[hsl(210,90%,50%)] text-xl font-bold">RecruitPro</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <User size={20} className="text-gray-600" />
            <span className="text-gray-700">John Doe</span>
            <ChevronDown size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}; 