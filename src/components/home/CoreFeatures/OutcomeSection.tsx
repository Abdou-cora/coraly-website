import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Award, Eye } from 'lucide-react';

const OutcomeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-12 lg:p-16">
        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          {t('coreFeatures.outcome.title')}{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {t('coreFeatures.outcome.highlight')}
          </span>
        </h3>
        
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="text-gray-600 font-medium mb-2">
                {t('coreFeatures.outcome.month1')}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                8 {t('coreFeatures.outcome.listings')}
              </div>
              <div className="text-xl text-gray-600">
                AED 240K {t('coreFeatures.outcome.revenue')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-purple-600 font-medium mb-2">
                {t('coreFeatures.outcome.month6')}
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">
                24 {t('coreFeatures.outcome.listings')}
              </div>
              <div className="text-xl text-purple-600">
                AED 720K {t('coreFeatures.outcome.revenue')}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="text-lg font-semibold text-purple-600">
              {t('coreFeatures.outcome.coralyEffect')}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button type="button" aria-label="start Growth"  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center">
            <Award className="w-6 h-6" />
            {t('coreFeatures.outcome.startGrowth')}
          </button>
          <button type="button" aria-label="see Case Studies" className="text-purple-600 hover:text-purple-700 px-10 py-5 rounded-full text-xl font-semibold border-2 border-purple-200 hover:border-purple-300 transition-all duration-200 flex items-center gap-3 justify-center">
            <Eye className="w-6 h-6" />
            {t('coreFeatures.outcome.seeCaseStudies')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSection;