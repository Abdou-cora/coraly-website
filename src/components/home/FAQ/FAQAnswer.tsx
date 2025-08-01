import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

interface Props {
  answer: string;
  highlights: string[];
}

export default function FAQAnswer({ answer, highlights }: Props) {
  const renderHighlightedText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((hl) => {
      const regex = new RegExp(`(${hl})`, 'gi');
      result = result.replace(
        regex,
        `<span class="text-purple-600 font-semibold">$1</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="px-8 pb-8">
      <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
        <div className="flex items-start gap-3 mb-4">
          <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed text-lg">
            {renderHighlightedText(answer, highlights)}
          </p>
        </div>

        <div className="flex items-center gap-2 text-purple-600 font-medium">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Still concerned?</span>
          <button type="button" aria-label="Chat with our team" className="text-sm underline hover:text-purple-700 transition-colors">
            Chat with our team
          </button>
        </div>
      </div>
    </div>
  );
}
