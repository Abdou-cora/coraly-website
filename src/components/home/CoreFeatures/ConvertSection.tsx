import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, ArrowRight, Play, Smartphone, Star } from 'lucide-react';

interface ConvertSectionProps {
  onDemoClick: () => void;
}

const ConvertSection: React.FC<ConvertSectionProps> = ({ onDemoClick }) => {
  const { t } = useTranslation();

  const stats = [
    { value: "30 sec", label: t('coreFeatures.convert.responseTime') },
    { value: "60%", label: t('coreFeatures.convert.moreQualifiedLeads') },
    { value: "24/7", label: t('coreFeatures.convert.availability') }
  ];

  const benefits = [
    t('coreFeatures.convert.benefits.quickResponse'),
    t('coreFeatures.convert.benefits.moreLeads'),
    t('coreFeatures.convert.benefits.autoBooking')
  ];

  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
            <div className="bg-green-600 text-white p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">Hassan Al-Mahmoud</div>
                  <div className="text-xs opacity-90">🟢 Online • 2:47 AM</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 space-y-4 min-h-[320px]">
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] shadow-sm">
                  <p className="text-sm">Hi, is the Emirates Hills villa still available? Budget is 4M AED.</p>
                  <p className="text-xs text-gray-500 mt-1">2:47 AM</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-green-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-[85%]">
                  <p className="text-sm">Yes! Perfect match. 5BR villa, 4.2M AED. Can I book you a viewing this Saturday?</p>
                  <p className="text-xs opacity-80 mt-1">2:48 AM</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] shadow-sm">
                  <p className="text-sm">Yes, Saturday works!</p>
                  <p className="text-xs text-gray-500 mt-1">2:49 AM</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-green-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-[85%]">
                  <p className="text-sm">✅ Booked! Saturday 2 PM<br/>📧 Details sent to your email<br/>Agent will call you at 9 AM tomorrow</p>
                  <p className="text-xs opacity-80 mt-1">2:49 AM</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-t border-gray-200 p-4">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-700 mb-2">
                  🌙 {t('coreFeatures.convert.whileSleeping')}
                </div>
                <div className="space-y-1 text-xs text-blue-600">
                  <div>✅ {t('coreFeatures.convert.leadQualified')}</div>
                  <div>✅ {t('coreFeatures.convert.agentNotified')}</div>
                  <div>💰 {t('coreFeatures.convert.potentialDeal')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold">30 sec</div>
            <div className="text-sm opacity-90">{t('coreFeatures.convert.responseTime')}</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('coreFeatures.convert.title')}
          </h3>
          
          <p className="text-xl text-purple-600 font-semibold mb-8">
            {t('coreFeatures.convert.subtitle')}
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-1">{stat.value}</div>
                <div className="text-xs text-purple-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">⚡</div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 font-medium mb-3">
              {t('coreFeatures.convert.testimonial.quote')}
            </blockquote>
            <cite className="text-sm text-gray-600">
              {t('coreFeatures.convert.testimonial.author')}
            </cite>
          </div>

          <button 
            onClick={onDemoClick}
            type="button" aria-label="CTA"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Play className="w-6 h-6" />
            {t('coreFeatures.convert.cta')}
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConvertSection;