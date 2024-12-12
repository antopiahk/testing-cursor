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
      borderRadius: 4,
    }]
  };

  const engagementData = {
    labels: ['Responded', 'Interested', 'No Reply'],
    datasets: [{
      data: [30, 50, 20],
      backgroundColor: ['#45dfa4', '#ffafd3', '#94a3b8'],
      borderWidth: 0,
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#94a3b8',
          font: {
            size: 12,
            family: 'Inter, system-ui, sans-serif'
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(69, 223, 164, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12,
            family: 'Inter, system-ui, sans-serif'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(69, 223, 164, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#94a3b8',
          font: {
            size: 12,
            family: 'Inter, system-ui, sans-serif'
          }
        }
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <header>
        <div className="bg-dark-lighter/80 backdrop-blur-md border border-dark-lighter p-4 rounded-lg shadow-sm">
          <p className="text-lg text-primary font-medium">Welcome back, {userName}</p>
          <p className="text-sm text-slate-400 mt-1">You have 5 candidates ready for interviews this week.</p>
        </div>
      </header>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-dark-lighter/80 backdrop-blur-md border border-dark-lighter p-5 rounded-lg shadow-sm">
            <h2 className="text-base font-medium text-slate-100 mb-4">Upcoming Interviews</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-dark-lighter">
                    <th className="text-left py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Candidate</th>
                    <th className="text-left py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Role</th>
                    <th className="text-left py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Date</th>
                    <th className="text-left py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-lighter">
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
          <div className="bg-dark-lighter/80 backdrop-blur-md border border-dark-lighter p-5 rounded-lg shadow-sm">
            <h2 className="text-base font-medium text-slate-100 mb-4">Talent Pool Insights</h2>
            <Bar data={talentPoolData} options={chartOptions} />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-dark-lighter/80 backdrop-blur-md border border-dark-lighter p-5 rounded-lg shadow-sm">
            <h2 className="text-base font-medium text-slate-100 mb-4">Candidate Engagement</h2>
            <div className="p-4">
              <Pie data={engagementData} options={{ 
                ...chartOptions,
                plugins: {
                  legend: {
                    position: 'bottom' as const,
                    labels: {
                      color: '#94a3b8',
                      font: {
                        size: 12,
                        family: 'Inter, system-ui, sans-serif'
                      },
                      padding: 16
                    }
                  }
                }
              }} />
            </div>
          </div>
          <div className="bg-dark-lighter/80 backdrop-blur-md border border-dark-lighter p-5 rounded-lg shadow-sm">
            <h2 className="text-base font-medium text-slate-100 mb-4">Pending Tasks</h2>
            <div className="space-y-2">
              <TaskItem text="Send follow-up emails to 3 candidates" priority="high" />
              <TaskItem text="Review 5 new applications" priority="medium" />
              <TaskItem text="Update job descriptions" priority="low" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <footer className="fixed bottom-0 left-64 right-0 bg-dark-lighter/90 backdrop-blur-md border-t border-dark-lighter p-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center">
          <button className="bg-primary hover:bg-primary-dark text-dark font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">
            Add New Role
          </button>
          <div className="flex gap-4">
            <button className="bg-dark hover:bg-dark-lighter text-slate-100 px-4 py-2 rounded-lg transition-colors ring-1 ring-dark-lighter">
              Send Messages
            </button>
            <button className="bg-dark hover:bg-dark-lighter text-slate-100 px-4 py-2 rounded-lg transition-colors ring-1 ring-dark-lighter">
              View Reports
            </button>
          </div>
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
    <div className="bg-dark-lighter/80 backdrop-blur-md border border-dark-lighter p-5 rounded-lg shadow-sm">
      <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">{title}</h3>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold text-slate-100">{value}</span>
        {change && (
          <span className={`text-sm font-medium ${isPositive ? 'text-primary' : 'text-accent'}`}>
            {change}
          </span>
        )}
      </div>
      {progress !== undefined && (
        <div className="mt-4">
          <div className="w-full bg-dark rounded-full h-1.5">
            <div
              className="bg-primary h-1.5 rounded-full transition-all"
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
    <tr>
      <td className="py-3 text-sm text-slate-100">{candidate}</td>
      <td className="py-3 text-sm text-slate-100">{role}</td>
      <td className="py-3 text-sm text-slate-400">{date}</td>
      <td className="py-3">
        <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
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
    <div className="flex items-center justify-between p-3 bg-dark/50 rounded-lg">
      <span className="text-sm text-slate-100">{text}</span>
      <span className={`px-2 py-1 rounded-md text-xs font-medium ${priorityColors[priority]}`}>
        {priority}
      </span>
    </div>
  );
};

export default Dashboard; 