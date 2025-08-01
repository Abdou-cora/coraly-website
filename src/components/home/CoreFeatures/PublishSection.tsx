import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ArrowRight, Play } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface PublishSectionProps {
  onDemoClick: () => void;
}

const PublishSection: React.FC<PublishSectionProps> = ({ onDemoClick }) => {
  const { t } = useTranslation();

  const stats = [
    { value: "340%", label: t('coreFeatures.publish.moreViews') },
    { value: "100+", label: t('coreFeatures.publish.portalsInSec') },
    { value: "50M+", label: t('coreFeatures.publish.monthlySearchers') }
  ];

  const benefits = [
    t('coreFeatures.publish.benefits.instantPublishing'),
    t('coreFeatures.publish.benefits.autoOptimization'),
    t('coreFeatures.publish.benefits.realTimeSync'),
    t('coreFeatures.publish.benefits.reachSearchers')
  ];

  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <FeatureCard
          icon={<Globe className="w-8 h-8" />}
          title={t('coreFeatures.publish.title')}
          stats={stats.map(stat => ({ value: stat.value, label: stat.label }))}
          benefits={benefits}
          ctaText={
            <div className="flex items-center gap-3">
              <Play className="w-6 h-6" />
              {t('coreFeatures.publish.cta')}
              <ArrowRight className="w-6 h-6" />
            </div>
          }
          onCtaClick={onDemoClick}
          gradientColors="bg-gradient-to-r from-green-500 to-emerald-500"
          statsColor="bg-green-50 text-green-600"
        />

        {/* Visual */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white shadow-lg">
                <div className="text-xl font-bold">Dubai Villa - AED 4.2M</div>
                <div className="text-sm opacity-90">5 Bed • Pool • Garden</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="h-6 flex items-center justify-center mb-2">
                  <img 
                    src="/icons/logo-property-finder.svg" 
                    alt="PropertyFinder"
                    className="max-h-4 max-w-full object-contain"
                  />
                </div>
                <div className="text-xs font-medium text-gray-700">PropertyFinder</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="h-6 flex items-center justify-center mb-2">
                  <img 
                    src="/icons/bayut_logo_2x_20072020.png" 
                    alt="Bayut"
                    className="max-h-4 max-w-full object-contain"
                  />
                </div>
                <div className="text-xs font-medium text-gray-700">Bayut</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="h-6 flex items-center justify-center mb-2">
                    <img src="/icons/dubizzle_logo.png"
                    alt="Dubizzle"
                    className='max-h-4 max-w-full object-contain'
                    />
                </div>
                <div className="text-xs font-medium text-gray-700">Dubizzle</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="h-6 flex items-center justify-center mb-2">
                   <img src="/icons/Rightmove_logo.png"  alt="Rightmove"
                    className='max-h-4 max-w-full object-contain'
                    />
                  </div>
                <div className="text-xs font-medium text-gray-700">Rightmove</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="h-6 flex items-center justify-center mb-2">
                  <img 
                    src="/icons/Zoopla-logo-Purple-RGBPNG.png" 
                    alt="Zoopla"
                    className="max-h-4 max-w-full object-contain"
                  />
                </div>
                <div className="text-xs font-medium text-gray-700">Zoopla</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="h-6 flex items-center justify-center mb-2">
                  <div className="px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-xs font-bold">
                    Your Site
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-700">Your Website</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-blue-600 mb-2">
                {t('coreFeatures.publish.globalReach')}
              </div>
              <div className="text-sm text-blue-600">
                {t('coreFeatures.publish.inquiriesFrom')}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold">10 sec</div>
            <div className="text-sm opacity-90">{t('coreFeatures.publish.publishingTime')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishSection;