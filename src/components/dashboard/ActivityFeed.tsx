import React from 'react';
import { UserCircleIcon, BriefcaseIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

interface Activity {
  id: number;
  type: 'candidate' | 'job' | 'notification';
  title: string;
  description: string;
  timestamp: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'candidate',
    title: 'New Application',
    description: 'John Doe applied for Senior Developer position',
    timestamp: '5 minutes ago',
  },
  {
    id: 2,
    type: 'job',
    title: 'Job Posted',
    description: 'New position: UX Designer role is now live',
    timestamp: '1 hour ago',
  },
  {
    id: 3,
    type: 'notification',
    title: 'Interview Scheduled',
    description: 'Interview with Sarah Smith for Product Manager role',
    timestamp: '2 hours ago',
  },
  {
    id: 4,
    type: 'candidate',
    title: 'Application Updated',
    description: 'Mike Johnson updated their portfolio',
    timestamp: '3 hours ago',
  },
  {
    id: 5,
    type: 'notification',
    title: 'Follow-up Reminder',
    description: 'Remember to follow up with candidates from last week',
    timestamp: '5 hours ago',
  },
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'candidate':
      return <UserCircleIcon className="w-6 h-6 text-blue-600" />;
    case 'job':
      return <BriefcaseIcon className="w-6 h-6 text-green-600" />;
    case 'notification':
      return <ChatBubbleLeftIcon className="w-6 h-6 text-purple-600" />;
  }
};

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <div className="mt-4 max-h-[600px] overflow-y-auto">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 py-4 border-b border-gray-100 last:border-0"
            >
              <div className="flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed; 