import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';



export default function BenefitsGrid() {

  const { t } = useTranslation();

  const leftBenefits = [t("CRMIntegration.biDirectional"), t("CRMIntegration.noMigration"), t("CRMIntegration.realTime")];
  const rightBenefits = [t("CRMIntegration.customMapping"), t("CRMIntegration.apiAccess"), t("CRMIntegration.setupTime")];


  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">	{t("CRMIntegration.seamlessIntegration")}</h3>
        <div className="space-y-4">
          {leftBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">	{t("CRMIntegration.advancedFeatures")}</h3>
        <div className="space-y-4">
          {rightBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}