import { useTranslation } from "react-i18next";
import HeroBenefits from "./HeroBenefits";
import StartFreeButton from "../../StartFreeButton";

export default function HeroContent() {

  const { t } = useTranslation();

  return (
    <div className="text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
        {t("hero.title_part1")}{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {t("hero.title_highlight")}
        </span>{" "}
        {t("hero.title_part2")}
      </h1>
      <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
        {t("hero.subtitle")}
      </p>
      <HeroBenefits />
      <div className="mb-8">
        <p className="text-gray-600 font-medium">{t("hero.socialProof")}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200" 
         text="See Your First Listing Transform" />
      </div>
      <div className="mt-8 text-xs text-gray-500 max-w-lg">
        {t("hero.disclaimer")}
      </div>
    </div>
  );
}
