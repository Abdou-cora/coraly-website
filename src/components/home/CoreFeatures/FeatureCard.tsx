import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  stats: Array<{ value: string; label: string }>;
  benefits: string[];
  ctaText: any;
  onCtaClick: () => void;
  gradientColors: string;
  statsColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  stats,
  benefits,
  ctaText,
  onCtaClick,
  gradientColors,
  statsColor
}) => {
  return (
    <div>
      <div className={`inline-flex p-4 rounded-2xl ${gradientColors} text-white mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h3>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`text-center p-4 ${statsColor} rounded-xl`}>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700 font-medium">{benefit}</span>
          </div>
        ))}
      </div>

      <button 
      type="button" aria-label="CTA"
        onClick={onCtaClick}
        className={`inline-flex items-center gap-3 ${gradientColors} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
      >
        {ctaText}
      </button>
    </div>
  );
};

export default FeatureCard;