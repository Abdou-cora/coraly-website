import React, { useState } from 'react';
import FAQItem from './FAQItem';
import TrustBuilder from './TrustBuilder';


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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Top Agents Ask</span> Before Switching
          </h2>
          <p className="text-xl text-gray-600">
            Real concerns from successful agents who made the switch
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              {...faq}
            />
          ))}
        </div>

        <TrustBuilder />
      </div>
    </section>
  );
}
