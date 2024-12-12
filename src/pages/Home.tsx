import React, { useState, useEffect } from 'react';
import TalentPoolStats from '../components/dashboard/TalentPoolStats';
import AIAgentStatus from '../components/dashboard/AIAgentStatus';
import JobMatching from '../components/dashboard/JobMatching';

const Home: React.FC = () => {
  // Simulated data
  const [talentPoolData] = useState({
    totalCandidates: 12547,
    activeEngagements: 342,
    responseRate: 78,
    updatedProfiles: 8934,
  });

  const [agentData] = useState({
    activeOutreach: 15,
    messagesProcessed: 234,
    pendingResponses: 47,
    successfulMatches: 28,
    isActive: true,
  });

  const [jobData] = useState({
    activeJobs: [
      {
        jobId: 'JD1234',
        title: 'Senior Software Engineer',
        matchedCandidates: 24,
        responseRate: 85,
        status: 'active' as const,
      },
      {
        jobId: 'JD1235',
        title: 'Product Manager',
        matchedCandidates: 18,
        responseRate: 62,
        status: 'paused' as const,
      },
      {
        jobId: 'JD1236',
        title: 'UX Designer',
        matchedCandidates: 31,
        responseRate: 73,
        status: 'active' as const,
      },
    ],
    totalMatches: 73,
    averageResponseRate: 74,
  });

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="font-orbitron text-3xl text-text-primary">RecruitFlow AI</h1>
        <p className="text-text-secondary mt-2">
          AI-powered recruitment automation dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <TalentPoolStats {...talentPoolData} />
        <AIAgentStatus {...agentData} />
        <JobMatching {...jobData} />
      </div>
    </div>
  );
};

export default Home;
