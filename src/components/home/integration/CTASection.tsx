import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import StartFreeButton from '../../StartFreeButton';

export default function CTASection() {

  const { t } = useTranslation();
  const { lng } = useParams();

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">
        {t("CRMIntegration.readyToConnect")}
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
       
        <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          text={t("CRMIntegration.seeDemo")} />
      </div>
    </div>
  );
}
