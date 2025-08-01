import { useTranslation } from "react-i18next";

export default function HeroImage() {
  
  const { t } = useTranslation();

  return (
    <div className="relative">
      
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
        <img
          src="/images/Hero Photo.webp"
          alt="Before and after: Stressed agent vs successful agent closing deals"
          className="w-full h-64 lg:h-80 object-cover rounded-xl"
        />
        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl shadow-lg">
          <div className="text-2xl font-bold">{t("hero.23hrs")}</div>
          <div className="text-sm opacity-90">{t("hero.saved")}</div>
        </div>
      </div>

      <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-bounce">
        <div className="text-green-600 font-bold text-lg">{t("hero.floating1")}</div>
        <div className="text-sm text-gray-600">{t("hero.floating2")}</div>
      </div>
    </div>
  );
}
