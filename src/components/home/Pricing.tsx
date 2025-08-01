import React, { useState } from 'react';
import { Check, Star, Calculator, TrendingUp, Users, Crown, Shield, Building, Zap, Target, BarChart3 } from 'lucide-react';

export default function  Pricing (){

  const [monthlyListings, setMonthlyListings] = useState(25);
  const [isAgencyView, setIsAgencyView] = useState(false);

  const calculateROI = (listings: number) => {
    const hoursSaved = listings * 5; // 5 hours saved per listing
    const hourlyRate = 200; // AED per hour for agent time
    const additionalRevenue = hoursSaved * hourlyRate;
    return {
      hoursSaved,
      additionalRevenue: Math.round(additionalRevenue)
    };
  };

  const getRecommendedPlan = (listings: number, isAgency: boolean) => {
    if (isAgency) {
      if (listings <= 200) return "Team Workspace";
      if (listings <= 500) return "Agency Pro";
      if (listings <= 1200) return "Market Leader";
      return "Enterprise";
    } else {
      if (listings <= 20) return "Solo Agent";
      if (listings <= 60) return "Growth Agent";
      return "Top Producer";
    }
  };

  const roi = calculateROI(monthlyListings);
  const recommendedPlan = getRecommendedPlan(monthlyListings, isAgencyView);

  const individualPlans = [
    {
      name: "Solo Agent",
      badge: "Perfect for New Agents",
      price: "299",
      subtitle: "Up to 20 listings monthly",
      features: [
        "20 AI listing creations/month",
        "200 photo enhancements/month",
        "30 AI property descriptions/month",
        "10 room staging generations/month",
        "5 style transfers/month",
        "3 portal publishing destinations",
        "Basic WhatsApp lead qualification (50 chats/month)",
        "Email & chat support"
      ],
      included: [
        "Professional listing creation",
        "Basic photo enhancement",
        "Multi-portal publishing",
        "CRM integration"
      ],
      roiIndicator: "Typically saves 10+ hours weekly",
      cta: "Start 30-Day Free Trial",
      popular: false,
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Growth Agent",
      badge: "Most Popular",
      price: "599",
      subtitle: "Up to 60 listings monthly",
      features: [
        "60 AI listing creations/month",
        "600 photo enhancements/month",
        "100 AI property descriptions/month",
        "30 room staging generations/month",
        "20 style transfers/month",
        "15 room remodeling visualizations/month",
        "10 2D to 3D floor plan conversions/month",
        "8 AI listing videos/month",
        "6 portal publishing destinations",
        "Advanced WhatsApp automation (200 chats/month)",
        "Social media post generation (50/month)",
        "Priority support"
      ],
      included: [
        "Everything in Solo Agent +",
        "Advanced AI features",
        "Video creation",
        "3D floor plans",
        "Custom branding",
        "Advanced analytics"
      ],
      roiIndicator: "Typically saves 20+ hours weekly",
      cta: "Start 30-Day Free Trial",
      popular: true,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      callout: "Most agents upgrade here within 60 days"
    },
    {
      name: "Top Producer",
      badge: "For High-Volume Agents",
      price: "999",
      subtitle: "Up to 120 listings monthly",
      features: [
        "120 AI listing creations/month",
        "Unlimited photo enhancements",
        "Unlimited AI property descriptions",
        "Unlimited room staging & style transfers",
        "50 room remodeling visualizations/month",
        "30 2D to 3D floor plan conversions/month",
        "25 AI listing videos/month",
        "15 AI motion graphics/month",
        "Unlimited portal publishing",
        "Advanced lead qualification (unlimited)",
        "Unlimited social media content",
        "White-label branding options",
        "Phone + priority support",
        "Dedicated account manager"
      ],
      included: [
        "Everything in Growth Agent +",
        "Unlimited core features",
        "AI motion graphics",
        "White-label branding",
        "Premium support",
        "Account manager"
      ],
      roiIndicator: "Typically saves 25+ hours weekly",
      cta: "Start 30-Day Free Trial",
      popular: false,
      icon: <Crown className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      callout: "Preferred by luxury specialists"
    }
  ];

  const agencyPlans = [
    {
      name: "Team Workspace",
      badge: "Perfect for Small Teams",
      price: "1,299",
      subtitle: "Up to 200 listings monthly (shared)",
      features: [
        "200 AI listing creations/month (team shared)",
        "1,500 photo enhancements/month (team shared)",
        "300 AI property descriptions/month",
        "100 room staging generations/month",
        "50 style transfers/month",
        "40 room remodeling visualizations/month",
        "25 2D to 3D floor plan conversions/month",
        "20 AI listing videos/month",
        "Unlimited portal publishing",
        "Team lead distribution automation",
        "Shared asset library",
        "Team performance analytics",
        "Unlimited team members (no per-seat charges)",
        "Team collaboration tools",
        "Shared branding templates"
      ],
      teamFeatures: [
        "Unlimited user accounts",
        "Team collaboration tools",
        "Shared contact database",
        "Lead distribution automation",
        "Team performance dashboards",
        "Unified branding"
      ],
      target: "Perfect for 2-8 agent teams",
      cta: "Start Team Trial",
      popular: false,
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      callout: "60% cheaper than per-agent CRMs"
    },
    {
      name: "Agency Pro",
      badge: "Most Popular for Agencies",
      price: "2,499",
      subtitle: "Up to 500 listings monthly (shared)",
      features: [
        "500 AI listing creations/month (team shared)",
        "4,000 photo enhancements/month (team shared)",
        "800 AI property descriptions/month",
        "250 room staging generations/month",
        "150 style transfers/month",
        "100 room remodeling visualizations/month",
        "60 2D to 3D floor plan conversions/month",
        "50 AI listing videos/month",
        "25 AI motion graphics/month",
        "Everything in Team Workspace +",
        "Advanced team analytics & reporting",
        "Custom user roles & permissions",
        "Agency-wide branding consistency",
        "Advanced lead scoring & routing",
        "Dedicated agency success manager",
        "Custom onboarding & training",
        "Priority processing for all requests"
      ],
      advancedFeatures: [
        "Advanced analytics suite",
        "Custom user permissions",
        "Agency branding control",
        "Success manager included",
        "Priority processing",
        "Custom training"
      ],
      target: "Perfect for 8-20 agent agencies",
      cta: "Schedule Demo",
      popular: true,
      icon: <Building className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      callout: "Used by leading agencies across Dubai"
    },
    {
      name: "Market Leader",
      badge: "For Large Agencies",
      price: "4,999",
      subtitle: "Up to 1,200 listings monthly (shared)",
      features: [
        "1,200 AI listing creations/month (team shared)",
        "Unlimited photo enhancements",
        "Unlimited AI property descriptions",
        "Unlimited room staging & style transfers",
        "300 room remodeling visualizations/month",
        "150 2D to 3D floor plan conversions/month",
        "100 AI listing videos/month",
        "60 AI motion graphics/month",
        "Everything in Agency Pro +",
        "White-label platform options",
        "Custom integrations & API access",
        "Advanced security & compliance",
        "Multiple office locations support",
        "Custom reporting & analytics",
        "Dedicated technical support",
        "Custom feature development",
        "Training & certification programs"
      ],
      enterpriseFeatures: [
        "White-label options",
        "API access",
        "Custom integrations",
        "Multi-location support",
        "Custom development",
        "Enterprise security"
      ],
      target: "Perfect for 20+ agent agencies",
      cta: "Contact Sales",
      popular: false,
      icon: <Crown className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      callout: "Scales with your agency growth"
    }
  ];

  const enterpriseInfo = {
    name: "Enterprise",
    badge: "Custom Solutions",
    price: "Custom Pricing",
    subtitle: "Unlimited usage + custom development",
    features: [
      "Unlimited everything across all AI features",
      "Custom feature development",
      "Dedicated infrastructure",
      "White-label platform with your branding",
      "Custom integrations",
      "Enterprise-grade security & compliance",
      "Global multi-location support",
      "24/7 dedicated support",
      "Custom SLA agreements",
      "Training & certification programs",
      "Franchise management tools",
      "Advanced API access"
    ],
    customSolutions: [
      "Franchise operations",
      "International expansion",
      "Custom AI development",
      "Dedicated infrastructure",
      "Enterprise SLA",
      "Global support"
    ],
    starting: "Starting at AED 8,000/month",
    cta: "Contact Enterprise Sales"
  };

  const currentPlans = isAgencyView ? agencyPlans : individualPlans;

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 lg:p-12 mb-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8" />
              <h2 className="text-2xl lg:text-3xl font-bold">How many listings do you handle monthly?</h2>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto">
              <div className="mb-6">
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={monthlyListings}
                  onChange={(e) => setMonthlyListings(parseInt(e.target.value))}
                  className="w-full h-3 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm mt-2 text-white/80">
                  <span>5</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100+</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{monthlyListings} listings</div>
                <div className="text-xl mb-4">
                  You could save <span className="font-bold text-yellow-300">{roi.hoursSaved} hours</span> and earn <span className="font-bold text-yellow-300">AED {roi.additionalRevenue.toLocaleString()} extra</span> monthly
                </div>
                <div className="bg-white/30 rounded-xl p-4">
                  <div className="text-lg font-semibold">
                    Recommended: <span className="text-yellow-300">{recommendedPlan}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pay for Results,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Not Software Access
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose your plan based on what you actually use - listings, AI features, and team size.
          </p>

          <div className="inline-flex items-center bg-white rounded-full p-2 shadow-lg border-2 border-gray-100">
            <button
              onClick={() => setIsAgencyView(false)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                !isAgencyView 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Individual Agents
            </button>
            <button
              onClick={() => setIsAgencyView(true)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isAgencyView 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Teams & Agencies
            </button>
          </div>
        </div> */}

        {/* Pricing Cards */}
        {/* <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {currentPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
              plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} text-white mb-4`}>
                    {plan.icon}
                  </div>
                  
                  {!plan.popular && (
                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                      {plan.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-1">AED {plan.price}</div>
                    <div className="text-gray-600">/month</div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="font-semibold text-purple-600 text-lg">{plan.subtitle}</div>
                  </div>

                  {plan.callout && (
                    <div className="text-sm text-purple-600 font-medium mb-4">
                      {plan.callout}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-600" />
                    Core Features
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.slice(0, 6).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-600" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {(plan.included || plan.teamFeatures || plan.advancedFeatures || plan.enterpriseFeatures || []).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.roiIndicator && (
                  <div className="bg-green-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-green-700">
                      <BarChart3 className="w-4 h-4" />
                      <span className="font-semibold text-sm">{plan.roiIndicator}</span>
                    </div>
                  </div>
                )}

                {plan.target && (
                  <div className="text-center text-sm text-gray-600 mb-6">
                    {plan.target}
                  </div>
                )}

                <div className="space-y-3">
                  <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg transform hover:scale-105' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Enterprise Section (for Agencies only) */}
        {isAgencyView && (
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 mb-12 text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex p-3 rounded-xl bg-white/20 text-white mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {enterpriseInfo.badge}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{enterpriseInfo.name}</h3>
                  <p className="text-xl text-gray-300 mb-4">{enterpriseInfo.subtitle}</p>
                  <p className="text-gray-300 mb-6">{enterpriseInfo.starting}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3">Core Features</h4>
                      <ul className="space-y-2">
                        {enterpriseInfo.features.slice(0, 6).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Custom Solutions</h4>
                      <ul className="space-y-2">
                        {enterpriseInfo.customSolutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-4">Ready to Scale?</h4>
                    <p className="text-gray-300 mb-6">
                      Custom solutions for agencies managing 15+ agents or handling 500+ listings monthly.
                    </p>
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full lg:w-auto">
                      {enterpriseInfo.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Elements */}
        {/* <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center gap-3 justify-center">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">30-day free trial</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">No setup fees</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Results in your first week or money back</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

