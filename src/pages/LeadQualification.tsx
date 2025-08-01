import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, MessageSquare, Clock, Calendar, Zap, Shield, Users, TrendingUp, Smartphone, Moon } from 'lucide-react';
import StartFreeButton from '../components/StartFreeButton';

const LeadQualification = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [chatMessages, setChatMessages] = useState<any>([]);

  const conversationFlow = [
    { time: "3:00 AM", sender: "lead", message: "Hi, interested in the villa listing", type: "incoming" },
    { time: "3:00 AM", sender: "ai", message: "Hello! Thanks for your interest. This is a beautiful 5BR villa with pool. What's your budget range?", type: "ai" },
    { time: "3:01 AM", sender: "lead", message: "Around AED 4-5M", type: "incoming" },
    { time: "3:01 AM", sender: "ai", message: "Perfect! This property is AED 4.2M. Are you looking to buy for investment or personal use?", type: "ai" },
    { time: "3:02 AM", sender: "lead", message: "Personal use, family home", type: "incoming" },
    { time: "3:02 AM", sender: "ai", message: "Excellent! It's perfect for families. When would you like to schedule a viewing? I have Saturday 2 PM available.", type: "ai" },
    { time: "3:03 AM", sender: "lead", message: "Saturday works!", type: "incoming" },
    { time: "3:03 AM", sender: "ai", message: "✅ Booked! Saturday 2 PM viewing confirmed. I'll send details to your email. Agent Ahmed will call you at 9 AM.", type: "ai" },
    { time: "3:04 AM", sender: "system", message: "🌙 Lead qualified & appointment booked while agent sleeps", type: "system" }
  ];

  const features = [
    {
      title: "Instant Response",
      subtitle: "<1 s",
      icon: <Zap className="w-6 h-6" />,
      description: "Respond to leads faster than humanly possible"
    },
    {
      title: "Smart Qualification",
      subtitle: "Budget · Timeframe",
      icon: <Users className="w-6 h-6" />,
      description: "Ask the right questions to identify serious buyers"
    },
    {
      title: "Calendar Integration",
      subtitle: "auto‑bookings",
      icon: <Calendar className="w-6 h-6" />,
      description: "Automatically schedule viewings in your calendar"
    },
    {
      title: "Nurture Sequences",
      subtitle: "drip follow‑ups",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Keep leads warm with automated follow-up messages"
    }
  ];

  // Auto-advance conversation
  useEffect(() => {
    if (currentStep < conversationFlow.length) {
      const timer = setTimeout(() => {
        setChatMessages((prev: any) => [...prev, conversationFlow[currentStep]]);
        setCurrentStep(prev => prev + 1);
      }, currentStep === 0 ? 1000 : 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, conversationFlow]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Never miss a lead – even when you sleep.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Coraly's conversational AI qualifies leads, books viewings, and nurtures prospects on WhatsApp, SMS, and email.
              </p>
              <button type="button" data-popup="signup" aria-label="See Lead Bot Demo" className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                See Lead Bot Demo
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Chat UI Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Phone Mockup */}
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
                  {/* WhatsApp Header */}
                  <div className="bg-green-600 text-white p-4 rounded-t-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <div className="font-semibold">Coraly AI Assistant</div>
                        <div className="text-xs opacity-90 flex items-center gap-1">
                          <Moon className="w-3 h-3" />
                          Active 24/7
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="bg-gray-100 p-4 h-80 overflow-y-auto rounded-b-2xl">
                    <div className="space-y-3">
                      {chatMessages.map((msg: any, index: number) => (
                        <div key={index} className={`${msg.type === 'system' ? 'text-center' :
                            msg.type === 'ai' ? 'flex justify-end' : 'flex justify-start'
                          }`}>
                          {msg.type === 'system' ? (
                            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                              {msg.message}
                            </div>
                          ) : (
                            <div className={`max-w-[85%] p-3 rounded-2xl ${msg.type === 'ai'
                                ? 'bg-green-500 text-white rounded-br-md'
                                : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                              }`}>
                              <p className="text-sm">{msg.message}</p>
                              <p className={`text-xs mt-1 ${msg.type === 'ai' ? 'opacity-80' : 'text-gray-500'
                                }`}>
                                {msg.time}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Night Time Indicator */}
                <div className="text-center mt-4 text-white/80">
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                    <Moon className="w-4 h-4" />
                    <span className="text-sm font-medium">3:00 AM - While you sleep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                  😰 The Problem
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Agents buried in late‑night messages
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Leads come in at all hours</p>
                    <p className="text-gray-600 text-sm">3 AM inquiries, weekend questions, holiday messages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Slow response = lost deals</p>
                    <p className="text-gray-600 text-sm">Buyers move on to responsive agents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Burnout from constant availability</p>
                    <p className="text-gray-600 text-sm">No work-life balance, always "on call"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                  ✨ The Solution
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                24/7 AI concierge
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instant response, any time</p>
                    <p className="text-gray-600 text-sm">AI responds in under 30 seconds, 24/7/365</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Smart qualification process</p>
                    <p className="text-gray-600 text-sm">Only qualified leads reach your phone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Automatic appointment booking</p>
                    <p className="text-gray-600 text-sm">Wake up to confirmed viewings in your calendar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI Lead Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive lead qualification and nurturing that works around the clock
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{feature.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Timeline Module */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works: From Lead to Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the complete journey from initial inquiry to booked viewing
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-500 rounded-full"></div>

            <div className="space-y-12">
              {/* Step 1: Lead Sent */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                    <div className="flex items-center gap-3 mb-2">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      <span className="font-bold text-gray-900">3:00 AM</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Lead Inquiry Received</h4>
                    <p className="text-gray-600">"Hi, interested in the villa listing"</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div className="flex-1"></div>
              </div>

              {/* Step 2: AI Qualifies */}
              <div className="flex items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                      <span className="font-bold text-gray-900">3:01 AM</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">AI Qualification</h4>
                    <p className="text-gray-600">Budget confirmed: AED 4-5M range</p>
                  </div>
                </div>
              </div>

              {/* Step 3: Appointment Set */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-gray-900">3:03 AM</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Viewing Booked</h4>
                    <p className="text-gray-600">Saturday 2 PM confirmed in calendar</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div className="flex-1"></div>
              </div>

              {/* Step 4: Agent Starts Day */}
              <div className="flex items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-orange-600" />
                      <span className="font-bold text-gray-900">8:00 AM</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Agent Notification</h4>
                    <p className="text-gray-600">Qualified lead summary & appointment details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              24/7 Lead Management Results
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">+72%</div>
              <div className="text-lg font-semibold opacity-90">response rate</div>
              <div className="text-sm opacity-75 mt-1">More leads get immediate attention</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">‑60%</div>
              <div className="text-lg font-semibold opacity-90">lead drop‑off</div>
              <div className="text-sm opacity-75 mt-1">Fewer prospects go cold</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">+38%</div>
              <div className="text-lg font-semibold opacity-90">viewings booked</div>
              <div className="text-sm opacity-75 mt-1">More qualified appointments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Channel Support */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Works Across All Communication Channels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet your leads where they are with consistent AI assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="bg-green-50 rounded-3xl p-8 text-center border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Most popular messaging platform in UAE and globally</p>
              <div className="text-green-600 font-semibold">✓ Instant messaging</div>
              <div className="text-green-600 font-semibold">✓ Media sharing</div>
              <div className="text-green-600 font-semibold">✓ Voice messages</div>
            </div>

            {/* SMS */}
            <div className="bg-blue-50 rounded-3xl p-8 text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SMS</h3>
              <p className="text-gray-600 mb-4">Universal reach to any mobile phone</p>
              <div className="text-blue-600 font-semibold">✓ 98% open rate</div>
              <div className="text-blue-600 font-semibold">✓ No app required</div>
              <div className="text-blue-600 font-semibold">✓ Instant delivery</div>
            </div>

            {/* Email */}
            <div className="bg-purple-50 rounded-3xl p-8 text-center border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-4">Professional communication for detailed follow-ups</p>
              <div className="text-purple-600 font-semibold">✓ Rich formatting</div>
              <div className="text-purple-600 font-semibold">✓ Document sharing</div>
              <div className="text-purple-600 font-semibold">✓ Automated sequences</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Never Miss Another Lead?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of agents already using Coraly's AI assistant to qualify leads and book appointments 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              text="See Lead Bot Demo" />
            <StartFreeButton  className="text-purple-600 hover:text-purple-700 px-10 py-4 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
              text="View Success Stories" />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadQualification;