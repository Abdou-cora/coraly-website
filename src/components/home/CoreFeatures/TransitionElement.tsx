import React from 'react';
import { ArrowDown } from 'lucide-react';

interface TransitionElementProps {
  text: string;
}

const TransitionElement: React.FC<TransitionElementProps> = ({ text }) => {
  return (
    <div className="text-center mt-16">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-full text-gray-700 font-medium">
        <span>{text}</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
};

export default TransitionElement;