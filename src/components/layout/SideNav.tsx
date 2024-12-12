import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Search,
  Map,
  GraduationCap,
  PenTool,
  Calendar,
  Brain,
  TrendingUp,
  MessageSquare,
  HelpCircle,
  Settings
} from 'lucide-react';

const navigation = {
  main: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'College Search', icon: Search, path: '/college-search' },
    { name: 'Roadmap', icon: Map, path: '/roadmap' },
  ],
  'Application Tools': [
    { name: 'Test Prep', icon: GraduationCap, path: '/test-prep' },
    { name: 'Essay Helper', icon: PenTool, path: '/essay-helper' },
    { name: 'Activities Planner', icon: Calendar, path: '/activities' },
  ],
  'Insights': [
    { name: 'AI Mentor', icon: Brain, path: '/ai-mentor' },
    { name: 'College Trends', icon: TrendingUp, path: '/trends' },
  ],
  'Help': [
    { name: 'Chat Assistant', icon: MessageSquare, path: '/chat' },
    { name: 'FAQs', icon: HelpCircle, path: '/faqs' },
  ],
  'Admin': [
    { name: 'Admin Panel', icon: Settings, path: '/admin' },
  ],
};

const NavItem: React.FC<{
  item: { name: string; icon: any; path: string };
  isActive: boolean;
}> = ({ item, isActive }) => {
  const Icon = item.icon;
  return (
    <Link
      to={item.path}
      className={`glass-nav-item ${isActive ? 'glass-nav-item-active' : ''}`}
    >
      <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-primary-600' : ''}`} />
      <span className="text-sm">{item.name}</span>
    </Link>
  );
};

const SideNav: React.FC = () => {
  const location = useLocation();

  return (
    <div className="hidden md:block fixed left-0 top-0 h-screen pt-24 px-4">
      <div className="glass-card w-64 h-[calc(100vh-6rem)] p-4">
        <div className="space-y-6">
          {Object.entries(navigation).map(([group, items]) => (
            <div key={group}>
              {group !== 'main' && (
                <h3 className="px-3 text-xs font-semibold uppercase tracking-wider opacity-70 mb-2">
                  {group}
                </h3>
              )}
              <div className="space-y-1">
                {items.map((item) => (
                  <NavItem
                    key={item.name}
                    item={item}
                    isActive={location.pathname === item.path}
                  />
                ))}
              </div>
              {group !== 'Admin' && <div className="glass-divider mt-6" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
