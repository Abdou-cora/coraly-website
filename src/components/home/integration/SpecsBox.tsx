import { Shield, Users, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SpecsBox() {

  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border border-purple-100">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <Shield className="w-6 h-6 text-purple-600" />
          <div>
            <div className="font-bold text-gray-900">{t("CRMIntegration.security")}</div>
            <div className="text-sm text-gray-600">{t("CRMIntegration.encryption")}</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Users className="w-6 h-6 text-purple-600" />
          <div>
            <div className="font-bold text-gray-900">{t("CRMIntegration.support")}</div>
            <div className="text-sm text-gray-600">
              {t("CRMIntegration.integrationSpecialist")}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Settings className="w-6 h-6 text-purple-600" />
          <div>
            <div className="font-bold text-gray-900">
              {t("CRMIntegration.customMappingTitle")}
            </div>
            <div className="text-sm text-gray-600">{t("CRMIntegration.uniqueCRM")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}