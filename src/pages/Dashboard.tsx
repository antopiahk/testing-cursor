import React from 'react';
import MetricsOverview from '../components/dashboard/MetricsOverview';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import QuickAccessCards from '../components/dashboard/QuickAccessCards';
import TalentPoolGraph from '../components/dashboard/TalentPoolGraph';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-5 gap-4">
          {/* Left Section: Metrics and Activity Feed */}
          <div className="col-span-3 flex flex-col space-y-4">
            <MetricsOverview />
            <ActivityFeed />
          </div>
          
          {/* Right Section: Graph and Quick Access */}
          <div className="col-span-2 flex flex-col space-y-4">
            <TalentPoolGraph />
            <QuickAccessCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 