import React from 'react';

export default function TrustBuilder() {
  return (
    <div className="mt-12 text-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Still Have Questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Book a 15-minute call with our team. We'll show you exactly how Coraly works with your current setup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button type="button" aria-label="Schedule Free Demo" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Schedule Free Demo
          </button>
          <button type="button" aria-label="View Success Stories" className="text-purple-600 hover:text-purple-700 px-8 py-3 rounded-full font-semibold border-2 border-purple-200 hover:border-purple-300 transition-all duration-200">
            View Success Stories
          </button>
        </div>
      </div>
    </div>
  );
}
