import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, Edit3, Globe, Shield, Zap, Target, MessageSquare, X } from 'lucide-react';
import StartFreeButton from '../components/StartFreeButton';

const AICopywriting = () => {
  const [typingText, setTypingText] = useState('');
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const fullText = "Luxury 3-bedroom apartment with panoramic city views, premium finishes, and world-class amenities in the heart of downtown.";
  const bullets = [
    "✨ Floor-to-ceiling windows with stunning skyline views",
    "🏢 Prime downtown location with easy access to business district",
    "🚗 Secure underground parking and 24/7 concierge service",
    "🏊 Rooftop pool, fitness center, and residents' lounge"
  ];

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      feature: "Tone Control",
      benefit: "Choose Formal / Lifestyle / Investor",
      icon: <Target className="w-6 h-6" />,
      description: "Adapt your listing's voice to match your target audience perfectly"
    },
    {
      feature: "SEO Keywords",
      benefit: "Automatic inclusion for portal ranking",
      icon: <Zap className="w-6 h-6" />,
      description: "Boost your listing's visibility with optimized search terms"
    },
    {
      feature: "Multilingual",
      benefit: "8 languages auto‑translated",
      icon: <Globe className="w-6 h-6" />,
      description: "Reach international buyers with accurate translations"
    },
    {
      feature: "Compliance Check",
      benefit: "No housing act or discriminatory terms",
      icon: <Shield className="w-6 h-6" />,
      description: "Stay compliant with fair housing regulations automatically"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Compelling listing copy, written by AI, approved by you.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                From feature‑rich headlines to emotive storytelling – Coraly writes words that convert browsers into buyers.
              </p>
              <button type="button" data-popup="signup" aria-label="Generate Copy Now" className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Generate Copy Now
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Animated Typing Demo */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-white rounded-2xl p-6 text-gray-900">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                    <Edit3 className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-gray-900">AI Generated Copy</h3>
                    <div className="ml-auto bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      Live
                    </div>
                  </div>

                  {/* Typing Headline */}
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {typingText}
                      <span className="animate-pulse">|</span>
                    </h4>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2">
                    {bullets.map((bullet, index) => (
                      <div
                        key={index}
                        className={`text-gray-700 transition-all duration-500 ${typingText.length >= fullText.length
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                          }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>

                  {/* Generation Stats */}
                  <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                    <span>Generated in 3.2 seconds</span>
                    <span className="text-purple-600 font-semibold">SEO Optimized ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Smart Copywriting Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered writing tools that create compelling, compliant, and converting property descriptions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Feature</h4>
                        <p className="text-purple-600 font-semibold">{item.feature}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Benefit</h4>
                        <p className="text-gray-700">{item.benefit}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-side Copy Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See the Difference AI Makes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare typical manual copy with AI-generated descriptions that sell
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Manual Copy */}
            <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                  <X className="text-white" />
                  Manual Copy
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  3 Bedroom Apartment for Sale
                </h3>
                <div className="text-gray-600 space-y-2">
                  <p>Nice apartment with 3 bedrooms and 2 bathrooms.</p>
                  <p>Good location in downtown area.</p>
                  <p>Has parking space.</p>
                  <p>Call for more details.</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Written in 15 minutes</span>
                    <span className="text-red-600">❌ Not SEO optimized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Copy */}
            <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                  ✨ AI-Generated Copy
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Stunning Downtown Penthouse with Panoramic City Views
                </h3>
                <div className="text-gray-700 space-y-3 leading-relaxed">
                  <p>✨ <strong>Discover luxury living</strong> in this breathtaking 3-bedroom, 2-bathroom penthouse featuring floor-to-ceiling windows and unobstructed city skyline views.</p>
                  <p>🏢 <strong>Prime downtown location</strong> puts you steps away from the business district, fine dining, and cultural attractions.</p>
                  <p>🚗 <strong>Convenience included:</strong> Secure underground parking, 24/7 concierge, and rooftop amenities.</p>
                  <p>💎 <strong>Move-in ready</strong> with premium finishes and modern appliances throughout.</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Generated in 8 seconds</span>
                    <span className="text-green-600">✅ SEO optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviewer Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="flex items-center gap-6">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Sarah Chen"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
                  "The AI copy is so good, my clients think I hired a professional copywriter. Inquiries increased 60% since I started using Coraly's writing features."
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">Sarah Chen</div>
                  <div className="text-gray-600">Senior Agent, Dubai Properties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Support Showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Reach Global Buyers in Their Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatically translate your listings into 60 languages with cultural context
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <img src="/icons/english.png" alt="UK Flag" className="w-8 h-6 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">English</div>
                <div className="text-sm text-gray-600">Original</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <img src="/icons/arabic.png" alt="🇦🇪 Flag" className="w-8 h-6 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">العربية</div>
                <div className="text-sm text-gray-600">Arabic</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <img src="/icons/frensh.png" alt="FR Flag" className="w-8 h-6 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Français</div>
                <div className="text-sm text-gray-600">French</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <img src="/icons/german.png" alt="🇩🇪 Flag" className="w-8 h-6 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Deutsch</div>
                <div className="text-sm text-gray-600">German</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">+ Spanish, Italian, Russian, Mandarin</p>
              <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                <Globe className="w-5 h-5" />
                All translations maintain cultural context and real estate terminology
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Copy That Converts?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of agents already using Coraly to create compelling property descriptions that drive more inquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              text="Generate Copy Now" />
            <StartFreeButton className="text-purple-600 hover:text-purple-700 px-10 py-4 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
              text=" See More Examples" />
             
          </div>
        </div>
      </section>
    </>
  );
};

export default AICopywriting;