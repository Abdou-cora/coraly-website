import { ArrowLeft, ArrowRight, Database, Settings, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';



export default function IntegrationFlow() {

  const { t } = useTranslation();
  
  const integrationFlow = [
    {
      title: t("CRMIntegration.yourCRM"),
      icon: <Database className="w-8 h-8" />,
      description: t("CRMIntegration.keepUsing"),
    },
    {
      title: t("CRMIntegration.aiEnhancement"),
      icon: <Zap className="w-8 h-8" />,
      description: t("CRMIntegration.aiProcesses"),
    },
    {
      title: t("CRMIntegration.globalPublishing"),
      icon: <Settings className="w-8 h-8" />,
      description: t("CRMIntegration.distribute"),
    },
    {
      title: t("CRMIntegration.leadsBack"),
      icon: <Users className="w-8 h-8" />,
      description: t("CRMIntegration.qualifiedLeads"),
    },
  ];
  
  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
        {integrationFlow.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 rtl:text-right ltr:text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 rtl:text-right ltr:text-center">
                {step.description}
              </p>
            </div>
            {index < integrationFlow.length - 1 && (
              <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 z-10 rtl:-left-3 rtl:lg:-left-4 ltr:-right-3 ltr:lg:-right-4">
                <div className="rtl:block ltr:hidden">
                  <ArrowLeft className="w-6 h-6 text-purple-500" />
                </div>
                <div className="ltr:block rtl:hidden">
                  <ArrowRight className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
