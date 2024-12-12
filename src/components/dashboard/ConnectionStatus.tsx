import React from 'react';
import { motion } from 'framer-motion';

interface ConnectionStatusProps {
  isConnected: boolean;
  uploadSpeed: number;
  downloadSpeed: number;
  location: string;
  coordinates: string;
  ping: number;
  duration: string;
  onDisconnect?: () => void;
}

const ConnectionStatus: React.FC<ConnectionStatusProps> = ({
  isConnected,
  uploadSpeed,
  downloadSpeed,
  location,
  coordinates,
  ping,
  duration,
  onDisconnect,
}) => {
  const signalBars = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className="glass-card p-6 space-y-6">
      {/* Status Header */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-text-secondary text-sm mb-1">STATUS</div>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-brand-accent"
              animate={{ opacity: isConnected ? [1, 0.5, 1] : 0.3 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className={`font-tech ${isConnected ? 'text-brand-accent' : 'text-text-muted'}`}>
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
        <div className="font-orbitron text-3xl text-text-primary">
          {duration}
        </div>
      </div>

      {/* Speed Indicators */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-brand-primary" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            <span className="text-text-secondary text-sm">Upload</span>
          </div>
          <div className="font-tech text-brand-primary text-xl">
            {uploadSpeed.toFixed(1)} Mbps
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-brand-secondary" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            <span className="text-text-secondary text-sm">Download</span>
          </div>
          <div className="font-tech text-brand-secondary text-xl">
            {downloadSpeed.toFixed(1)} Mbps
          </div>
        </div>
      </div>

      {/* Disconnect Button */}
      <button
        onClick={onDisconnect}
        className="glass-button w-full py-3 bg-surface-dark border-brand-yellow/30 text-brand-yellow"
      >
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
          </svg>
          Disconnect
        </div>
      </button>

      {/* Location Info */}
      <div className="glass-card bg-surface-darker p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-text-secondary text-sm mb-1">
              {location}
            </div>
            <div className="font-tech text-text-muted text-xs">
              {coordinates}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-text-secondary text-sm">
              {ping.toFixed(1)} ms
            </div>
            <div className="flex space-x-1">
              {signalBars.map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-4 bg-brand-accent"
                  initial={{ scaleY: 0.3 }}
                  animate={{ scaleY: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionStatus; 