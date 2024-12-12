import { 
  Home, Search, Users, Archive, Clock, Briefcase, Calendar, BarChart2, 
  HelpCircle, MessageSquare, Settings 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center space-x-3 px-4 py-2.5 rounded-lg
      ${isActive ? 'bg-[hsl(210,90%,50%)] text-white' : 'text-gray-600 hover:bg-gray-100'}
    `}
  >
    <Icon size={20} />
    <span className="font-medium">{children}</span>
  </NavLink>
);

const NavGroup = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="space-y-1">
    {title && <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">{title}</h3>}
    {children}
  </div>
);

export const SideNav = () => {
  return (
    <nav className="fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="py-4 flex flex-col h-full">
        <NavGroup>
          <NavItem to="/" icon={Home}>Home</NavItem>
          <NavItem to="/candidate-search" icon={Search}>Candidate Search</NavItem>
        </NavGroup>

        <NavGroup title="Talent Pool">
          <NavItem to="/active-talent" icon={Users}>Active Talent</NavItem>
          <NavItem to="/archived-talent" icon={Archive}>Archived Talent</NavItem>
          <NavItem to="/follow-ups" icon={Clock}>Follow-Ups</NavItem>
        </NavGroup>

        <NavGroup title="Job Management">
          <NavItem to="/open-roles" icon={Briefcase}>Open Roles</NavItem>
          <NavItem to="/interviews" icon={Calendar}>Scheduled Interviews</NavItem>
          <NavItem to="/reports" icon={BarChart2}>Reports</NavItem>
        </NavGroup>

        <NavGroup title="Help">
          <NavItem to="/faq" icon={HelpCircle}>FAQ</NavItem>
          <NavItem to="/support" icon={MessageSquare}>Contact Support</NavItem>
        </NavGroup>

        <div className="mt-auto">
          <NavGroup>
            <NavItem to="/admin" icon={Settings}>Admin</NavItem>
          </NavGroup>
        </div>
      </div>
    </nav>
  );
}; 