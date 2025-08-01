import { useTranslation } from 'react-i18next';
import { Clock, Users, Target, BarChart3, CheckCircle } from 'lucide-react';


export default function BeforeAfterComparison() {

  const { t } = useTranslation();

  const oldWayFeatures = [
    { icon: Clock, text: t('coreFeatures.oldWay.hoursPerListing') },
    { icon: Users, text: t('coreFeatures.oldWay.missingLeads') },
    { icon: Target, text: t('coreFeatures.oldWay.manualUploads') },
    { icon: BarChart3, text: t('coreFeatures.oldWay.workingNights') }
  ];

  const coralyWayFeatures = [
    { text: t('coreFeatures.coralyWay.quickListing') },
    { text: t('coreFeatures.coralyWay.alwaysCapture') },
    { text: t('coreFeatures.coralyWay.oneClickPublish') },
    { text: t('coreFeatures.coralyWay.homeBy6') }
  ];

  return (
    <div className="mb-20">
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <img
            src="/images/Hero Photo.webp"
            alt="Coraly AI Real Estate Platform"
            className="w-full h-auto object-cover"
            onError={(e: any) => {
              console.log('Image failed to load:', e.target.src);
              e.target.src = "/images/staging_coraly_branded.webp";
            }}
          />
        </div>

        <div className="absolute -bottom-6 left-0 sm:left-1 md:left-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-xl shadow-lg">
          <div className="text-sm font-bold">Before: Manual Work</div>
          <div className="text-xs opacity-90">{t("coreFeatures.oldWay.hoursEffort")}</div>
        </div>

        <div className="absolute -bottom-6 right-0 sm:right-1 md:right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg">
          <div className="text-sm font-bold">After: AI-Powered</div>
          <div className="text-xs opacity-90">15 {t("coreFeatures.coralyWay.5seconds")}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            {t('coreFeatures.oldWay.title')}
          </h3>
          <div className="space-y-3">
            {oldWayFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-red-600">
                <feature.icon className="w-5 h-5" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            {t('coreFeatures.coralyWay.title')}
          </h3>
          <div className="space-y-3">
            {coralyWayFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
