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
  { name: 'Dashboard', icon: <HomeIcon className="h-5 w-5" />, current: true },
  { name: 'Candidates', icon: <UserGroupIcon className="h-5 w-5" />, current: false },
  { name: 'Jobs', icon: <BriefcaseIcon className="h-5 w-5" />, current: false },
  { name: 'Follow-ups', icon: <ClockIcon className="h-5 w-5" />, current: false },
  { name: 'Interviews', icon: <CalendarIcon className="h-5 w-5" />, current: false },
  { name: 'Reports', icon: <ChartBarIcon className="h-5 w-5" />, current: false },
];

const secondaryNavigation: NavItem[] = [
  { name: 'Help', icon: <QuestionMarkCircleIcon className="h-5 w-5" />, current: false },
  { name: 'Support', icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />, current: false },
  { name: 'Settings', icon: <Cog6ToothIcon className="h-5 w-5" />, current: false },
];

const SideNav: React.FC = () => {
  return (
    <div className="w-64 bg-dark-lighter/80 shadow-lg shadow-dark-darker/5 backdrop-blur-md border-r border-dark-lighter fixed left-0 top-16 bottom-0">
      <div className="flex flex-col h-full">
        {/* Main Navigation */}
        <nav className="flex-1 px-3 space-y-0.5 pt-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`
                group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all
                ${item.current
                  ? 'bg-primary/10 text-primary shadow-sm'
                  : 'text-slate-400 hover:bg-dark/50 hover:text-slate-100'
                }
              `}
            >
              <div className={`
                mr-3 transition-colors
                ${item.current ? 'text-primary' : 'text-slate-400 group-hover:text-slate-100'}
              `}>
                {item.icon}
              </div>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Secondary Navigation */}
        <div className="flex-shrink-0 border-t border-dark-lighter">
          <nav className="px-3 space-y-0.5 py-4">
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group flex items-center px-3 py-2 text-sm font-medium text-slate-400 rounded-lg hover:bg-dark/50 hover:text-slate-100 transition-all"
              >
                <div className="mr-3 text-slate-400 group-hover:text-slate-100 transition-colors">
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