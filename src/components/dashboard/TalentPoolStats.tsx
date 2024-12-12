import React from 'react';
import { motion } from 'framer-motion';

interface TalentPoolStatsProps {
  totalCandidates: number;
  activeEngagements: number;
  responseRate: number;
  updatedProfiles: number;
}

const TalentPoolStats: React.FC<TalentPoolStatsProps> = ({
  totalCandidates,
  activeEngagements,
  responseRate,
  updatedProfiles,
}) => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-orbitron text-xl text-text-primary">Talent Pool Metrics</h2>
        <motion.div
          className="w-2 h-2 rounded-full bg-brand-accent"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Total Candidates */}
        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Total Candidates</div>
          <div className="flex items-baseline gap-2">
            <div className="font-tech text-brand-primary text-3xl">
              {totalCandidates.toLocaleString()}
            </div>
            <div className="text-brand-primary/50 text-sm">profiles</div>
          </div>
        </div>

        {/* Active Engagements */}
        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Active Engagements</div>
          <div className="flex items-baseline gap-2">
            <div className="font-tech text-brand-secondary text-3xl">
              {activeEngagements.toLocaleString()}
            </div>
            <div className="text-brand-secondary/50 text-sm">ongoing</div>
          </div>
        </div>

        {/* Response Rate */}
        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Response Rate</div>
          <div className="flex items-baseline gap-2">
            <div className="font-tech text-brand-accent text-3xl">
              {responseRate}%
            </div>
            <div className="text-brand-accent/50 text-sm">avg</div>
          </div>
        </div>

        {/* Updated Profiles */}
        <div className="glass-card bg-surface-darker p-4">
          <div className="text-text-secondary text-sm mb-2">Updated Profiles</div>
          <div className="flex items-baseline gap-2">
            <div className="font-tech text-brand-yellow text-3xl">
              {updatedProfiles.toLocaleString()}
            </div>
            <div className="text-brand-yellow/50 text-sm">this week</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Pool Health</span>
          <span className="text-brand-primary">{Math.round((updatedProfiles / totalCandidates) * 100)}%</span>
        </div>
        <div className="h-2 bg-surface-dark rounded overflow-hidden">
          <motion.div
            className="h-full bg-gradient-cyber"
            initial={{ width: 0 }}
            animate={{ width: `${(updatedProfiles / totalCandidates) * 100}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TalentPoolStats; 