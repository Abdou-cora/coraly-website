import { useTranslation } from "react-i18next";

export default function SectionHeader() {

  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {t("CRMIntegration.integratesWith")}{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {t("CRMIntegration.yourWorkflow")}
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {t("CRMIntegration.keepUsingCRM")}
      </p>
    </div>
  )
}