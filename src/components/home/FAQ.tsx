import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, MessageCircle } from 'lucide-react';
import StartFreeButton from '../StartFreeButton';

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      question: "Will this mess up my current CRM system?",
      answer: "No. Coraly enhances your existing CRM by automatically updating it with qualified leads and property information. Your current workflow stays the same, just 10x faster.",
      highlights: ["enhances your existing CRM", "10x faster"]
    },
    {
      question: "What if my clients notice it's AI-generated?",
      answer: "Our AI is trained on million-dollar listings. Your content will look more professional than ever. Most agents tell us their clients compliment their 'new marketing team.'",
      highlights: ["trained on million-dollar listings", "more professional than ever"]
    },
    {
      question: "How fast will I see results?",
      answer: "Day 1: Your listings look professional. Week 1: Save 15+ hours. Month 1: Book 40% more viewings. Month 3: Close 2-3 extra deals minimum.",
      highlights: ["Day 1", "Week 1", "Month 1", "Month 3"]
    },
    {
      question: "What happens to my existing listings?",
      answer: "We can enhance your current active listings immediately. Upload your existing photos and we'll create professional descriptions, virtual staging, and marketing materials in minutes.",
      highlights: ["enhance your current active listings", "in minutes"]
    },
    {
      question: "Do I need to learn new software?",
      answer: "If you can send a WhatsApp message, you can use Coraly. Our interface is designed for busy agents, not tech experts. Most agents are fully productive within their first day.",
      highlights: ["send a WhatsApp message", "fully productive within their first day"]
    },
    {
      question: "What if I want to cancel?",
      answer: "No contracts, no cancellation fees. You can pause or cancel anytime from your dashboard. We're confident you'll love the results, but the choice is always yours.",
      highlights: ["No contracts", "no cancellation fees", "cancel anytime"]
    }
  ];

  const renderAnswerWithHighlights = (answer: string, highlights: string[]) => {
    let highlightedAnswer = answer;

    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      highlightedAnswer = highlightedAnswer.replace(
        regex,
        `<span class="text-purple-600 font-semibold">$1</span>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedAnswer }} />;
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Top Agents Ask
            </span>{' '}
            Before Switching
          </h2>
          <p className="text-xl text-gray-600">
            Real concerns from successful agents who made the switch
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <button
                type="button" aria-label="question"
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4 group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8">
                  <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <div className="flex items-start gap-3 mb-4">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {renderAnswerWithHighlights(faq.answer, faq.highlights)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-purple-600 font-medium">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Still concerned? </span>
                      <button
                        type="button" aria-label="Chat with our team" className="text-sm underline hover:text-purple-700 transition-colors">
                        Chat with our team
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Builder */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a 15-minute call with our team. We'll show you exactly how Coraly works with your current setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                text="Schedule Free Demo" />
              <a
                href="#testimonials"
                className="text-purple-600 hover:text-purple-700 px-8 py-3 rounded-full font-semibold border-2 border-purple-200 hover:border-purple-300 transition-all duration-200"
              >
                View Success Stories
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

