import React from 'react';
import {
  DocumentPlusIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onClick: () => void;
  color: string;
}

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  onClick,
  color,
}) => (
  <div className={`bg-white rounded-lg shadow p-6 border-l-4 ${color}`}>
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className={`p-3 bg-opacity-10 rounded-full ${color.replace('border-', 'bg-')}`}>
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <button
      onClick={onClick}
      className={`mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-white transition-colors ${color.replace('border-', 'bg-')} hover:bg-opacity-90`}
    >
      <span>{buttonText}</span>
      <ArrowRightIcon className="w-4 h-4" />
    </button>
  </div>
);

const QuickAccessCards: React.FC = () => {
  const cards = [
    {
      title: 'New Job Post',
      description: 'Create and publish a new job posting',
      icon: <DocumentPlusIcon className="w-6 h-6 text-blue-600" />,
      buttonText: 'Create Post',
      onClick: () => console.log('Create new job post'),
      color: 'border-blue-600',
    },
    {
      title: 'View Reports',
      description: 'Access recruitment analytics and insights',
      icon: <ChartBarIcon className="w-6 h-6 text-green-600" />,
      buttonText: 'View Reports',
      onClick: () => console.log('View reports'),
      color: 'border-green-600',
    },
    {
      title: 'Schedule Interviews',
      description: 'Manage and schedule candidate interviews',
      icon: <CalendarIcon className="w-6 h-6 text-purple-600" />,
      buttonText: 'Schedule',
      onClick: () => console.log('Schedule interview'),
      color: 'border-purple-600',
    },
  ];

  return (
    <div className="space-y-4">
      {cards.map((card, index) => (
        <QuickAccessCard key={index} {...card} />
      ))}
    </div>
  );
};

export default QuickAccessCards; 