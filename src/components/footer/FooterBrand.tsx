import { Mail, Phone } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="lg:col-span-2">
      <img 
        src="/icons/New branding Coraly -LOGO.png" 
        alt="Coraly" 
        className="h-10 w-auto mb-6 filter brightness-0 invert"
      />
      <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
        The AI-powered real estate platform that helps agents reclaim their time and grow their business. 
        From listing to closing in half the time.
      </p>
     
    </div>
  );
}
