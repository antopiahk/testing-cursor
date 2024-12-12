import React from 'react';
import { motion } from 'framer-motion';

interface AIAgentStatusProps {
  activeOutreach: number;
  messagesProcessed: number;
  pendingResponses: number;
  successfulMatches: number;
  isActive: boolean;
}

const AIAgentStatus: React.FC<AIAgentStatusProps> = ({
  activeOutreach,
  messagesProcessed,
  pendingResponses,
  successfulMatches,
  isActive,
}) => {
  return (
    <div className="glass-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-orbitron text-xl text-text-primary">AI Agent Status</h2>
          <div className="flex items-center gap-2 mt-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-brand-accent"
              animate={{ opacity: isActive ? [1, 0.5, 1] : 0.3 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className={`text-sm font-tech ${isActive ? 'text-brand-accent' : 'text-text-muted'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        {/* Agent Activity Visualization */}
        <div className="flex space-x-1">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-8 bg-brand-primary"
              initial={{ scaleY: 0.3 }}
              animate={{ scaleY: isActive ? [0.3, 1, 0.3] : 0.3 }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Active Outreach</div>
          <div className="font-tech text-brand-primary text-2xl">
            {activeOutreach}
          </div>
          <div className="text-text-muted text-xs mt-1">campaigns running</div>
        </div>

        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Messages</div>
          <div className="font-tech text-brand-secondary text-2xl">
            {messagesProcessed}
          </div>
          <div className="text-text-muted text-xs mt-1">processed today</div>
        </div>

        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Pending</div>
          <div className="font-tech text-brand-yellow text-2xl">
            {pendingResponses}
          </div>
          <div className="text-text-muted text-xs mt-1">awaiting response</div>
        </div>

        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Matches</div>
          <div className="font-tech text-brand-accent text-2xl">
            {successfulMatches}
          </div>
          <div className="text-text-muted text-xs mt-1">successful today</div>
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="mt-6">
        <div className="text-text-secondary text-sm mb-3">Recent Activity</div>
        <div className="space-y-2">
          {[
            { time: '2m ago', action: 'Matched 3 candidates with Job #1234' },
            { time: '5m ago', action: 'Sent 15 follow-up messages' },
            { time: '12m ago', action: 'Updated 8 candidate profiles' },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm"
            >
              <div className="text-text-muted font-tech">{activity.time}</div>
              <div className="text-text-secondary">{activity.action}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAgentStatus; 