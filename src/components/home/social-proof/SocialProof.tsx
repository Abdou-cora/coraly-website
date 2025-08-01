import { useTranslation } from "react-i18next";
import { logos } from "../../../data/CRM";
import { LogoCarousel } from "../LogoCarousel";
import { StatsBarData } from "./StatsBar";
import { UseStats } from "../../../data";

export default function  SocialProof(){

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];
  const { t } = useTranslation();
  const stats = UseStats();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("socialProof.title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("socialProof.subtitle")}
          </p>
        </div>

        {/* Achievement Stats Bar */}
        <StatsBarData stats={stats} />

        {/* Rotating Logo Carousel */}
        <LogoCarousel logos={duplicatedLogos} />

      </div>
    </section>
  );
}