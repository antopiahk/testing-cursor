import React from 'react';
import { motion } from 'framer-motion';

interface JobMatch {
  jobId: string;
  title: string;
  matchedCandidates: number;
  responseRate: number;
  status: 'active' | 'paused' | 'completed';
}

interface JobMatchingProps {
  activeJobs: JobMatch[];
  totalMatches: number;
  averageResponseRate: number;
}

const JobMatching: React.FC<JobMatchingProps> = ({
  activeJobs,
  totalMatches,
  averageResponseRate,
}) => {
  return (
    <div className="glass-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-orbitron text-xl text-text-primary">Job Matching</h2>
          <div className="text-text-secondary text-sm mt-1">
            Active recruitment campaigns
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-text-secondary text-sm">Total Matches</div>
            <div className="font-tech text-brand-primary text-xl">{totalMatches}</div>
          </div>
          <div className="text-right">
            <div className="text-text-secondary text-sm">Avg Response</div>
            <div className="font-tech text-brand-accent text-xl">{averageResponseRate}%</div>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {activeJobs.map((job) => (
          <div key={job.jobId} className="glass-card bg-surface-darker p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-tech text-text-primary">{job.title}</div>
                <div className="text-text-muted text-sm">#{job.jobId}</div>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: job.status === 'active' ? '#39FF14' : 
                                   job.status === 'paused' ? '#FFE700' : '#FF00FF'
                  }}
                  animate={{ opacity: job.status === 'active' ? [1, 0.5, 1] : 1 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-text-secondary text-sm capitalize">{job.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-text-secondary text-sm mb-1">Matched Candidates</div>
                <div className="font-tech text-brand-primary text-lg">
                  {job.matchedCandidates}
                </div>
              </div>
              <div>
                <div className="text-text-secondary text-sm mb-1">Response Rate</div>
                <div className="font-tech text-brand-accent text-lg">
                  {job.responseRate}%
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="h-1 bg-surface-dark rounded overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-cyber"
                  initial={{ width: 0 }}
                  animate={{ width: `${job.responseRate}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button className="glass-button w-full mt-4 py-3 font-orbitron">
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          New Job Campaign
        </div>
      </button>
    </div>
  );
};

export default JobMatching; 