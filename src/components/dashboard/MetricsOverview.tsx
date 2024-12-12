import React from 'react';
import { UserGroupIcon, BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';

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
  <div className="bg-white rounded-lg shadow p-5">
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        {trend && (
          <p className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </p>
        )}
      </div>
      <div className="p-3 bg-blue-50 rounded-lg">
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
      title: 'Upcoming Interviews',
      value: '15',
      icon: <CalendarIcon className="w-6 h-6 text-blue-600" />,
      trend: { value: 8, isPositive: true },
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsOverview; 