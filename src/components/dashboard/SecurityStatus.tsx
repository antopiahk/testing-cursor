import React from 'react';
import { motion } from 'framer-motion';

interface SecurityStatusProps {
  defenseLevel: number;
  maxDefense: number;
  coordinates: string;
  securityId: string;
  onStartNow?: () => void;
}

const SecurityStatus: React.FC<SecurityStatusProps> = ({
  defenseLevel,
  maxDefense,
  coordinates,
  securityId,
  onStartNow,
}) => {
  const defensePercentage = (defenseLevel / maxDefense) * 100;
  const gridLayers = [0.25, 0.5, 0.75, 1] as const;
  const defenseLines = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <div className="glass-card p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="font-tech text-4xl text-brand-primary">
            {defenseLevel}
            <span className="text-text-secondary text-lg">/{maxDefense}</span>
          </div>
          <div className="text-text-secondary text-sm">
            PRIMARY DEFENSE
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded bg-surface-dark">
            <div className="w-4 h-1 bg-text-primary rounded" />
          </button>
          <button className="p-2 rounded bg-surface-dark">
            <div className="w-4 h-4 border-2 border-text-primary rounded" />
          </button>
        </div>
      </div>

      {/* Defense Visualization */}
      <div className="relative">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative w-full aspect-square">
            {/* Circular Grid */}
            {gridLayers.map((scale) => (
              <div
                key={scale}
                className="absolute inset-0 border-2 border-surface-dark rounded-full"
                style={{ transform: `scale(${scale})` }}
              />
            ))}

            {/* Defense Lines */}
            {defenseLines.map((rotation) => (
              <motion.div
                key={rotation}
                className="absolute top-1/2 left-1/2 w-1 h-full origin-bottom"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-t from-brand-primary/30 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: Math.random() }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: rotation / 360,
                  }}
                />
              </motion.div>
            ))}

            {/* Defense Arc */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(0, 255, 255, 0.1)"
                strokeWidth="2"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#00FFFF"
                strokeWidth="2"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * defensePercentage) / 100}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Coordinates */}
        <div className="absolute bottom-4 left-4 font-tech text-sm text-text-muted">
          {coordinates}
        </div>
        <div className="absolute bottom-4 right-4 font-tech text-sm text-text-muted">
          ID F-{securityId}
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onStartNow}
        className="glass-button-primary w-full py-3 font-orbitron"
      >
        START NOW
      </button>
    </div>
  );
};

export default SecurityStatus; 