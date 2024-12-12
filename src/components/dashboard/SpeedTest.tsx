import React from 'react';
import { motion } from 'framer-motion';

interface SpeedTestProps {
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  isRunning?: boolean;
  onStartTest?: () => void;
  onStopTest?: () => void;
}

const SpeedTest: React.FC<SpeedTestProps> = ({
  downloadSpeed,
  uploadSpeed,
  ping,
  isRunning = false,
  onStartTest,
  onStopTest,
}) => {
  const maxSpeed = 750; // Maximum speed on the gauge
  const speedPercentage = (uploadSpeed / maxSpeed) * 100;
  const speedMarkers = [0, 10, 50, 100, 200, 300, 500, 750] as const;

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <button className="p-2 rounded bg-surface-dark">
          <svg className="w-6 h-6 text-text-primary" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <h2 className="font-orbitron text-xl">Speed test</h2>
        <div className="w-6" /> {/* Spacer for alignment */}
      </div>

      <div className="text-center text-text-secondary">
        Test your internet speed
      </div>

      <div className="relative aspect-square">
        {/* Gauge Background */}
        <div className="absolute inset-0 rounded-full border-4 border-surface-dark opacity-30" />
        
        {/* Speed Gauge */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 180deg, 
              ${uploadSpeed > 0 ? 'rgba(0, 255, 255, 0.3)' : 'transparent'} 0%, 
              ${uploadSpeed > 0 ? 'rgba(255, 0, 255, 0.3)' : 'transparent'} ${speedPercentage}%, 
              transparent ${speedPercentage}%, 
              transparent 100%
            )`,
            borderRadius: '100%',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-orbitron text-text-primary mb-2">
            {uploadSpeed.toFixed(1)}
          </div>
          <div className="text-text-secondary font-tech">
            Mbps
          </div>
        </div>

        {/* Speed Markers */}
        <div className="absolute inset-0">
          {speedMarkers.map((speed, index) => (
            <div
              key={speed}
              className="absolute w-1 h-3 bg-surface-dark transform -translate-x-1/2"
              style={{
                left: '50%',
                top: '10%',
                transform: `rotate(${(index * 45) - 90}deg) translateY(-150px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4 text-center">
          <div className="text-text-secondary text-sm mb-1">Download</div>
          <div className="font-tech text-brand-primary">{downloadSpeed.toFixed(1)} Mbps</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-text-secondary text-sm mb-1">Ping</div>
          <div className="font-tech text-brand-yellow">{ping.toFixed(1)} ms</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-text-secondary text-sm mb-1">Upload</div>
          <div className="font-tech text-brand-secondary">{uploadSpeed.toFixed(1)} Mbps</div>
        </div>
      </div>

      <button
        onClick={isRunning ? onStopTest : onStartTest}
        className="glass-button-primary w-full py-3 font-orbitron"
      >
        {isRunning ? 'STOP TEST' : 'START TEST'}
      </button>
    </div>
  );
};

export default SpeedTest; 