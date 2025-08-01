import { useBenefits } from "../../../data";

export default function HeroBenefits() {
  const benefits = useBenefits();

  return (
    <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center lg:justify-start">
      {benefits.map(({ icon: Icon, text, bg, iconColor }, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className={`w-8 h-8 ${bg} rounded-full flex items-center justify-center`}>
            <Icon className={`w-4 h-4 ${iconColor}`} />
          </div>
          <span className="text-gray-700 font-medium">{text}</span>
        </div> 
      ))}
    </div>
  );
}
