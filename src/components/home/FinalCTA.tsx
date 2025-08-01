import React from 'react';
import { Check, Shield, Clock, TrendingUp } from 'lucide-react';
import StartFreeButton from '../StartFreeButton';

export default function FinalCTA() {

  const guarantees = [
    { icon: <Clock className="w-5 h-5" />, text: "30-day free trial" },
    { icon: <Shield className="w-5 h-5" />, text: "No setup fees" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Cancel anytime" },
    { icon: <Check className="w-5 h-5" />, text: "Results in your first week or money back" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Real Estate Business?
        </h2>

        <p className="text-xl lg:text-2xl text-white/90 mb-8">
          Join the agents who've stopped working harder and started working smarter.
        </p>

        {/* Guarantees */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 text-white">
              {guarantee.icon}
              <span className="text-sm font-medium">{guarantee.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <StartFreeButton className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            text=" Start My Free Transformation" />
          <StartFreeButton className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            text="Schedule Personal Demo" />
        </div>

        {/* Success Visualization */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">23hrs</div>
              <div className="text-sm opacity-90">Saved Weekly</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-sm opacity-90">More Listings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">47%</div>
              <div className="text-sm opacity-90">Faster Closings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
