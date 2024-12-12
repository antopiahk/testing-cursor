import React from 'react';
import MetricsOverview from '../components/dashboard/MetricsOverview';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import QuickAccessCards from '../components/dashboard/QuickAccessCards';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Metrics Overview Section */}
        <MetricsOverview />
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
          
          {/* Quick Access Cards */}
          <div className="lg:col-span-1">
            <QuickAccessCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 