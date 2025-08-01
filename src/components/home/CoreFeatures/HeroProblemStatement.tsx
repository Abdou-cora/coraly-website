import { useTranslation } from 'react-i18next';

export default function HeroProblemStatement() {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
        {t('coreFeatures.heroTitle')}{' '}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {t('coreFeatures.heroHighlight')}
        </span>
      </h2>
    </div>
  );
};
