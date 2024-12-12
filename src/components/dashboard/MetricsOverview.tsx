import React from 'react';
import { UserGroupIcon, BriefcaseIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, trend }) => (
  <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-[1.02]">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        {trend && (
          <p className={`mt-2 text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </p>
        )}
      </div>
      <div className="p-3 bg-blue-50 rounded-full">
        {icon}
      </div>
    </div>
  </div>
);

const MetricsOverview: React.FC = () => {
  const metrics = [
    {
      title: 'Total Active Candidates',
      value: '1,234',
      icon: <UserGroupIcon className="w-6 h-6 text-blue-600" />,
      trend: { value: 12, isPositive: true },
    },
    {
      title: 'Total Open Roles',
      value: '45',
      icon: <BriefcaseIcon className="w-6 h-6 text-blue-600" />,
      trend: { value: 5, isPositive: true },
    },
    {
      title: 'Follow-Ups Pending',
      value: '28',
      icon: <ClockIcon className="w-6 h-6 text-blue-600" />,
      trend: { value: 3, isPositive: false },
    },
    {
      title: 'Upcoming Interviews',
      value: '15',
      icon: <CalendarIcon className="w-6 h-6 text-blue-600" />,
      trend: { value: 8, isPositive: true },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsOverview; 