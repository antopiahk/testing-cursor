import { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [userName] = useState('John Doe');

  // Mock data for charts with new theme colors
  const talentPoolData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'New Candidates',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: '#45dfa4',
    }]
  };

  const engagementData = {
    labels: ['Responded', 'Interested', 'No Reply'],
    datasets: [{
      data: [30, 50, 20],
      backgroundColor: ['#45dfa4', '#ffafd3', '#ff7eb9'],
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#94a3b8'
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(69, 223, 164, 0.1)'
        },
        ticks: {
          color: '#94a3b8'
        }
      },
      y: {
        grid: {
          color: 'rgba(69, 223, 164, 0.1)'
        },
        ticks: {
          color: '#94a3b8'
        }
      }
    }
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <header className="mb-8">
        <div className="bg-dark-lighter/50 backdrop-blur-md border border-dark-lighter p-4 rounded-xl shadow-lg">
          <p className="text-lg text-primary">You have 5 candidates ready for interviews this week.</p>
        </div>
      </header>

      {/* KPI Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <KPICard
          title="Active Candidates"
          value="124"
          change="+12%"
          isPositive={true}
        />
        <KPICard
          title="Scheduled Interviews"
          value="28"
          change="+5"
          isPositive={true}
        />
        <KPICard
          title="Open Roles"
          value="15"
          progress={60}
        />
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-dark-lighter/50 backdrop-blur-md border border-dark-lighter p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-slate-100">Upcoming Interviews</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-dark-lighter">
                    <th className="text-left py-2 text-slate-400">Candidate</th>
                    <th className="text-left py-2 text-slate-400">Role</th>
                    <th className="text-left py-2 text-slate-400">Date</th>
                    <th className="text-left py-2 text-slate-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <InterviewRow
                    candidate="Sarah Johnson"
                    role="Frontend Developer"
                    date="Dec 15, 2023"
                    status="Confirmed"
                  />
                  <InterviewRow
                    candidate="Mike Smith"
                    role="Product Manager"
                    date="Dec 16, 2023"
                    status="Pending"
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-dark-lighter/50 backdrop-blur-md border border-dark-lighter p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-slate-100">Talent Pool Insights</h2>
            <Bar data={talentPoolData} options={chartOptions} />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-dark-lighter/50 backdrop-blur-md border border-dark-lighter p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-slate-100">Candidate Engagement</h2>
            <Pie data={engagementData} options={{ 
              ...chartOptions,
              plugins: {
                legend: {
                  position: 'bottom' as const,
                  labels: {
                    color: '#94a3b8'
                  }
                }
              }
            }} />
          </div>
          <div className="bg-dark-lighter/50 backdrop-blur-md border border-dark-lighter p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-slate-100">Pending Tasks</h2>
            <ul className="space-y-3">
              <TaskItem text="Send follow-up emails to 3 candidates" priority="high" />
              <TaskItem text="Review 5 new applications" priority="medium" />
              <TaskItem text="Update job descriptions" priority="low" />
            </ul>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <footer className="fixed bottom-0 left-64 right-0 bg-dark-lighter/50 backdrop-blur-md border-t border-dark-lighter p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button className="bg-gradient-to-r from-primary to-primary-light text-dark px-4 py-2 rounded-xl hover:from-primary-light hover:to-primary transition-all shadow-lg shadow-primary/20">
            Add New Role
          </button>
          <button className="bg-dark text-slate-100 px-4 py-2 rounded-xl hover:bg-dark-lighter transition-all ring-1 ring-primary/20 hover:ring-primary/40">
            Send Bulk Messages
          </button>
          <button className="bg-dark text-slate-100 px-4 py-2 rounded-xl hover:bg-dark-lighter transition-all ring-1 ring-primary/20 hover:ring-primary/40">
            View Reports
          </button>
        </div>
      </footer>
    </div>
  );
};

// Component for KPI Cards
const KPICard = ({ title, value, change, isPositive, progress }: {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  progress?: number;
}) => {
  return (
    <div className="bg-dark-lighter/50 backdrop-blur-md border border-dark-lighter p-6 rounded-xl shadow-lg">
      <h3 className="text-slate-400 text-sm mb-2">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-slate-100">{value}</span>
        {change && (
          <span className={`text-sm ${isPositive ? 'text-primary' : 'text-accent'}`}>
            {change}
          </span>
        )}
      </div>
      {progress !== undefined && (
        <div className="mt-4">
          <div className="w-full bg-dark rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Component for Interview Table Rows
const InterviewRow = ({ candidate, role, date, status }: {
  candidate: string;
  role: string;
  date: string;
  status: string;
}) => {
  return (
    <tr className="border-b border-dark-lighter">
      <td className="py-2 text-slate-100">{candidate}</td>
      <td className="py-2 text-slate-100">{role}</td>
      <td className="py-2 text-slate-400">{date}</td>
      <td className="py-2">
        <span className={`px-2 py-1 rounded-xl text-sm ${
          status === 'Confirmed' 
            ? 'bg-primary/10 text-primary ring-1 ring-primary/20' 
            : 'bg-accent/10 text-accent ring-1 ring-accent/20'
        }`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

// Component for Task Items
const TaskItem = ({ text, priority }: { text: string; priority: 'high' | 'medium' | 'low' }) => {
  const priorityColors = {
    high: 'bg-accent/10 text-accent ring-1 ring-accent/20',
    medium: 'bg-primary/10 text-primary ring-1 ring-primary/20',
    low: 'bg-slate-400/10 text-slate-400 ring-1 ring-slate-400/20'
  };

  return (
    <div className="flex items-center justify-between p-3 bg-dark/50 rounded-xl">
      <span className="text-slate-100">{text}</span>
      <span className={`px-2 py-1 rounded-xl text-sm ${priorityColors[priority]}`}>
        {priority}
      </span>
    </div>
  );
};

export default Dashboard; 