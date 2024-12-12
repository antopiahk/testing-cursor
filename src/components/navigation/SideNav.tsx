import React from 'react';
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ClockIcon,
  CalendarIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  current: boolean;
}

const navigation: NavItem[] = [
  { name: 'Dashboard', icon: <HomeIcon className="h-6 w-6" />, current: true },
  { name: 'Candidates', icon: <UserGroupIcon className="h-6 w-6" />, current: false },
  { name: 'Jobs', icon: <BriefcaseIcon className="h-6 w-6" />, current: false },
  { name: 'Follow-ups', icon: <ClockIcon className="h-6 w-6" />, current: false },
  { name: 'Interviews', icon: <CalendarIcon className="h-6 w-6" />, current: false },
  { name: 'Reports', icon: <ChartBarIcon className="h-6 w-6" />, current: false },
];

const secondaryNavigation: NavItem[] = [
  { name: 'Help', icon: <QuestionMarkCircleIcon className="h-6 w-6" />, current: false },
  { name: 'Support', icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />, current: false },
  { name: 'Settings', icon: <Cog6ToothIcon className="h-6 w-6" />, current: false },
];

const SideNav: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0">
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Main Navigation */}
        <nav className="flex-1 px-4 space-y-1 pt-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`
                group flex items-center px-2 py-2 text-sm font-medium rounded-md
                ${item.current
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
            >
              <div className={`
                mr-3
                ${item.current ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}
              `}>
                {item.icon}
              </div>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Secondary Navigation */}
        <div className="flex-shrink-0 border-t border-gray-200">
          <nav className="px-4 space-y-1 py-4">
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
              >
                <div className="mr-3 text-gray-400 group-hover:text-gray-500">
                  {item.icon}
                </div>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNav; 