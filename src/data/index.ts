import { Clock, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export const useBenefits = () => {

  const { t } = useTranslation();

  return [
    {
      icon: Clock,
      text: t("hero.benefit1"),
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: TrendingUp,
      text: t("hero.benefit2"),
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      text: t("hero.benefit3"),
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];
};


export const UseStats = () => {
  const { t } = useTranslation();

  return [
    { number: "25", label: t("socialProof.countries") },
    { number: "1M+", label: t("socialProof.listingsProcessed") },
    { number: "0.5B+", label: t("socialProof.imagesProcessed") },
  ];
}

export const styles = [
    { id: 'modern', name: 'Modern', color: 'from-blue-500 to-cyan-500' },
    { id: 'luxury', name: 'Luxury', color: 'from-purple-600 to-pink-500' },
    { id: 'minimalist', name: 'Minimalist', color: 'from-gray-600 to-gray-800' },
    { id: 'boho', name: 'Boho', color: 'from-orange-500 to-red-500' },
    { id: 'classic', name: 'Classic', color: 'from-green-500 to-emerald-500' }
  ];