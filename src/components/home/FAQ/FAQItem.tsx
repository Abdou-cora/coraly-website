import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FAQAnswer from './FAQAnswer';

interface Props {
  question: string;
  answer: string;
  highlights: string[];
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, highlights, isOpen, onClick }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <button
      type="button" aria-label="question"
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
        onClick={onClick}
      >
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4 group-hover:text-purple-600 transition-colors">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-purple-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
          )}
        </div>
      </button>

      {isOpen && <FAQAnswer answer={answer} highlights={highlights} />}
    </div>
  );
}
