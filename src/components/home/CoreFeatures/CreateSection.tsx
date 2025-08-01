import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, ArrowRight, Play } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface CreateSectionProps {
  onDemoClick: () => void;
}

const CreateSection: React.FC<CreateSectionProps> = ({ onDemoClick }) => {
  const { t } = useTranslation();

  const stats = [
    { value: "AED 3,000", label: t('coreFeatures.create.savedPerListing') },
    { value: "15 sec", label: t('coreFeatures.create.professionalStaging') },
    { value: "40%", label: t('coreFeatures.create.fasterSales') }
  ];

  const benefits = [
    t('coreFeatures.create.benefits.staging15Sec'),
    t('coreFeatures.create.benefits.furnitureStyles'),
    t('coreFeatures.create.benefits.lightingEnhancement'),
    t('coreFeatures.create.benefits.anyPhotoQuality')
  ];

  return (
    <div className="mb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src="/images/before image - empty living room.webp"
                  alt="Empty room before staging"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t('coreFeatures.create.before')}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/after image - Modern Style.webp"
                  alt="Staged room"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t('coreFeatures.create.after')}
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{t("coreFeatures.create.3Hours")} → {t("coreFeatures.create.15Seconds")}</div>
                <div className="text-sm text-gray-600">{t('coreFeatures.create.stagingTime')}</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
            <div className="text-2xl font-bold">AED 3,000</div>
            <div className="text-sm opacity-90">{t('coreFeatures.create.savedPerListing')}</div>
          </div>
        </div>

        {/* Content */}
        <FeatureCard
          icon={<Zap className="w-8 h-8" />}
          title={t('coreFeatures.create.title')}
          stats={stats.map(stat => ({ value: stat.value, label: stat.label }))}
          benefits={benefits}
          ctaText={
            <div className="flex items-center gap-3">
              <Play className="w-6 h-6" />
              {t('coreFeatures.create.cta')}
              <ArrowRight className="w-6 h-6" />
            </div>
          }
          onCtaClick={onDemoClick}
          gradientColors="bg-gradient-to-r from-blue-500 to-cyan-500"
          statsColor="bg-blue-50 text-blue-600"
        />
      </div>
    </div>
  );
};

export default CreateSection;