// components/integration/CRMIntegration.tsx
import SectionHeader from "./SectionHeader";
import IntegrationFlow from "./IntegrationFlow";
import BenefitsGrid from "./BenefitsGrid";
import SpecsBox from "./SpecsBox";
import CTASection from "./CTASection";
import { crmLogos } from "../../../data/CRM";
import { LogoCarousel } from "../LogoCarousel";
import { useTranslation } from "react-i18next";


export default function CRMIntegration() {

  const duplicatedLogos = [...crmLogos, ...crmLogos];
  const { t } = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <IntegrationFlow />

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t("CRMIntegration.worksWith")}
          </h3>
          <LogoCarousel logos={duplicatedLogos} />
        </div>

        <BenefitsGrid />
        <SpecsBox />
        <CTASection />
      </div>
    </section>
  );
};
