import React, { useState, useEffect, useRef } from 'react';
import { Zap, MessageCircle, Share2, BarChart3, Play, ArrowRight, Clock, CheckCircle, TrendingUp, Eye, Users, Star } from 'lucide-react';

export default function  Features (){
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stagingProgress, setStagingProgress] = useState(0);
  const [publishingStep, setPublishingStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Staging demo animation
  useEffect(() => {
    if (activeDemo === 'staging') {
      const timer = setInterval(() => {
        setStagingProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 8;
        });
      }, 100);
      return () => clearInterval(timer);
    } else {
      setStagingProgress(0);
    }
  }, [activeDemo]);

  // Publishing demo animation
  useEffect(() => {
    if (activeDemo === 'publishing') {
      const steps = [0, 1, 2, 3, 4, 5, 6];
      let currentStep = 0;
      const timer = setInterval(() => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          setPublishingStep(currentStep);
        } else {
          clearInterval(timer);
        }
      }, 800);
      return () => clearInterval(timer);
    } else {
      setPublishingStep(0);
    }
  }, [activeDemo]);

  const portals = [
    { name: 'PropertyFinder', color: 'bg-blue-500' },
    { name: 'Bayut', color: 'bg-green-500' },
    { name: 'Dubizzle', color: 'bg-orange-500' },
    { name: 'JamesEdition', color: 'bg-purple-500' },
    { name: 'Your Website', color: 'bg-pink-500' },
    { name: 'Social Media', color: 'bg-cyan-500' }
  ];

  const features = [
    {
      id: 'staging',
      icon: <Zap className="w-8 h-8" />,
      title: "From Empty Room to Dream Home in Seconds",
      subtitle: "Professional staging that makes buyers say 'I can see myself living here'",
      description: "Transform any room in under 15 seconds with AI staging that rivals professional designers. Perfect lighting, furniture placement, and color enhancement that makes properties irresistible.",
      benefits: [
        "Transform any room in under 15 seconds",
        "40+ furniture styles and themes",
        "Perfect lighting and color enhancement",
        "Works with any photo quality"
      ],
      metrics: [
        { label: "Properties typically sell faster", value: "With staging" },
        { label: "Typical staging cost savings", value: "AED 3,000+" },
        { label: "Time saved per listing", value: "2-3 hrs" }
      ],
      testimonial: {
        quote: "Properties typically sell faster with professional AI staging",
        author: "Sarah M., Dubai Properties",
        rating: 5
      },
      cta: "Try This Magic",
      image: "/images/staging_coraly_branded.webp",
      color: "from-blue-500 to-cyan-500",
      demoType: "staging"
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Your AI Assistant Never Misses a Lead",
      subtitle: "24/7 lead qualification that turns midnight inquiries into morning appointments",
      description: "Your AI assistant responds within 30 seconds, qualifies prospects with intelligent questions, and books appointments automatically. It's like having the perfect assistant who never takes a day off.",
      benefits: [
        "Responds within 30 seconds, any time of day",
        "Qualifies leads with intelligent questions",
        "Books appointments automatically",
        "Handles multiple languages (EN, AR, FR)"
      ],
      metrics: [
        { label: "More leads captured outside business hours", value: "Significantly" },
        { label: "Turn more inquiries into appointments", value: "Improved" },
        { label: "Weekly time saved on follow-up", value: "15+ hrs" }
      ],
      testimonial: {
        quote: "Turn more inquiries into qualified appointments with 24/7 AI assistance",
        author: "Ahmed K., Abu Dhabi",
        rating: 5
      },
      cta: "See Live Conversation",
      image: "/images/coraly watsapp.webp",
      color: "from-green-500 to-emerald-500",
      demoType: "whatsapp"
    },
    {
      id: 'publishing',
      icon: <Share2 className="w-8 h-8" />,
      title: "Maximize Exposure Across 100+ Global Portals",
      subtitle: "While competitors upload manually to each site, you're already getting calls",
      description: "Instant publishing to 100+ major portals with automatic formatting for each platform. Real-time sync of price and availability changes with optimized descriptions for each portal's audience.",
      benefits: [
        "Instant publishing to 100+ major portals",
        "Automatic formatting for each platform",
        "Real-time sync of price and availability changes",
        "Optimized descriptions for each portal's audience"
      ],
      metrics: [
        { label: "Maximize exposure across portals", value: "100+" },
        { label: "Time saved vs manual uploads", value: "4+ hrs" },
        { label: "Global reach potential", value: "50M+ searchers" }
      ],
      testimonial: {
        quote: "Maximize exposure across 100+ global portals",
        author: "Maria S., Dubai",
        rating: 5
      },
      cta: "Watch It Happen",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-pink-500",
      demoType: "publishing"
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      title: "See Exactly What's Working (And What's Not)",
      subtitle: "Data-driven insights that turn good agents into top producers",
      description: "Real-time performance tracking across all portals with lead source analysis and ROI calculation. Compare your metrics vs. industry averages and see your time savings grow month over month.",
      benefits: [
        "Real-time performance tracking across all portals",
        "Lead source analysis and optimization",
        "ROI calculator showing time and money saved",
        "Competitive benchmarking vs. industry averages"
      ],
      metrics: [
        { label: "More efficient listing management", value: "Significantly" },
        { label: "Performance vs industry average", value: "Above average" },
        { label: "Monthly time saved vs manual processes", value: "25+ hrs" }
      ],
      testimonial: {
        quote: "Finally know which marketing actually works",
        author: "James M., London",
        rating: 5
      },
      cta: "Explore Live Dashboard",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-orange-500 to-red-500",
      demoType: "analytics"
    }
  ];

  const renderDemo = (feature: any) => {
    if (activeDemo !== feature.id) return null;

    switch (feature.demoType) {
      case 'staging':
        return (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            <div className="bg-white rounded-xl p-6 max-w-md mx-4">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-900 mb-2">AI Staging in Progress</h4>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${stagingProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{stagingProgress}% complete</p>
              </div>
              {stagingProgress === 100 && (
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-green-600 font-semibold">Transformation Complete!</p>
                  <button
                  type="button" aria-label="Close Demo" 
                    onClick={() => setActiveDemo(null)}
                    className="mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-200"
                  >
                    Close Demo
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'whatsapp':
        return (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            <div className="bg-white rounded-xl p-4 max-w-sm mx-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Coraly AI - Online</span>
                </div>
                <p className="text-xs text-gray-600">Responding to lead in real-time...</p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="bg-blue-500 text-white p-2 rounded-lg text-sm max-w-[80%]">
                  Hi! I saw your villa listing. Is it available?
                </div>
                <div className="bg-gray-100 p-2 rounded-lg text-sm max-w-[80%] ml-auto">
                  Yes! It's a stunning 5-bedroom with pool. Are you looking to buy or invest?
                </div>
                <div className="bg-blue-500 text-white p-2 rounded-lg text-sm max-w-[80%]">
                  Buy. What's the price?
                </div>
                <div className="bg-gray-100 p-2 rounded-lg text-sm max-w-[80%] ml-auto">
                  AED 4.2M. I can arrange a viewing. What's your budget range?
                </div>
              </div>
              <button 
              type="button" aria-label="Close Demo"
                onClick={() => setActiveDemo(null)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-200"
              >
                Close Demo
              </button>
            </div>
          </div>
        );

      case 'publishing':
        return (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            <div className="bg-white rounded-xl p-6 max-w-lg mx-4">
              <div className="text-center mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Publishing to All Portals</h4>
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Share2 className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {portals.map((portal, index) => (
                  <div 
                    key={portal.name}
                    className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-300 ${
                      publishingStep > index 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${
                      publishingStep > index ? 'bg-green-500' : portal.color
                    }`}></div>
                    <span className="text-sm font-medium">{portal.name}</span>
                    {publishingStep > index && (
                      <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                    )}
                  </div>
                ))}
              </div>

              {publishingStep >= portals.length && (
                <div className="text-center">
                  <div className="bg-green-100 rounded-lg p-4 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-green-700 font-semibold">Published Successfully!</p>
                    <p className="text-sm text-green-600">Live on {portals.length} portals in 8 seconds</p>
                  </div>
                  <button 
                  type="button" aria-label="Close Demo"
                    onClick={() => setActiveDemo(null)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-200"
                  >
                    Close Demo
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            <div className="bg-white rounded-xl p-6 max-w-md mx-4">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-900 mb-4">Live Dashboard Preview</h4>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">47</div>
                    <div className="text-xs text-blue-600">Views/Listing</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">129</div>
                    <div className="text-xs text-green-600">Active Inquiries</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Performance vs Industry</span>
                    <TrendingUp className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-lg font-bold text-purple-600">Above average</div>
                </div>

                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium mb-1">Time Saved This Month</div>
                  <div className="text-xl font-bold text-orange-600">31 hours</div>
                </div>
              </div>

              <button 
              type="button" aria-label="Close Demo"
                onClick={() => setActiveDemo(null)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-200"
              >
                Close Demo
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} id="features" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            See Why Agents Call This{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              'Unfair'
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While competitors struggle with manual work, you're closing deals with AI-powered efficiency
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-purple-600 font-semibold mb-6">
                  {feature.subtitle}
                </p>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {feature.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(feature.testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 font-medium mb-3">
                    "{feature.testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm text-gray-600">— {feature.testimonial.author}</cite>
                </div>

                {/* CTA */}
                <button 
                type="button" aria-label="CTA"
                  onClick={() => setActiveDemo(feature.id)}
                  className={`inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold bg-gradient-to-r ${feature.color} hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg`}
                >
                  <Play className="w-5 h-5" />
                  {feature.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-10`}></div>
                    
                    {/* Interactive overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <button 
                      type="button" aria-label="Play"
                        onClick={() => setActiveDemo(feature.id)}
                        className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white"
                      >
                        <Play className="w-8 h-8 text-gray-900" />
                      </button>
                    </div>
                  </div>

                  {/* Usage indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    <Users className="w-4 h-4 inline mr-1" />
                    200+ agents use this daily
                  </div>

                  {/* Demo overlay */}
                  {renderDemo(feature)}
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">{feature.metrics[0].value}</div>
                  <div className="text-sm opacity-90">{feature.metrics[0].label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Make Your Competition Jealous?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join 200+ agents who've stopped working harder and started working smarter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" aria-label="Start Free Trial" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Free Trial
              </button>
              <button type="button" aria-label="Schedule Demo" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto">
            *Results based on user reports and may vary depending on market conditions, 
            property type, and individual usage. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};

