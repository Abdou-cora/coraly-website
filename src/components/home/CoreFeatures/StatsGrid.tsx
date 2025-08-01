import React from 'react';

interface StatItem {
  value: string;
  label: string;
  color: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className={`text-center p-4 ${stat.color} rounded-xl`}>
          <div className="text-2xl font-bold mb-1">{stat.value}</div>
          <div className="text-xs">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;