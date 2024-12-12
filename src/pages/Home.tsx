import * as React from 'react';
import { BarChart, Users, DollarSign, TrendingUp } from 'lucide-react';

const stats = [
  { name: 'Total Revenue', value: '$45,231', icon: DollarSign, change: '+20.1%', changeType: 'positive' },
  { name: 'Active Users', value: '2,345', icon: Users, change: '+15.1%', changeType: 'positive' },
  { name: 'Conversion Rate', value: '3.6%', icon: TrendingUp, change: '-2.4%', changeType: 'negative' },
  { name: 'Avg. Order Value', value: '$35.50', icon: BarChart, change: '+12.5%', changeType: 'positive' },
];

const Home: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="h-96 flex items-center justify-center text-gray-500">
            Chart or activity feed would go here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
