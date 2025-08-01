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
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-300">
          <Mail className="w-4 h-4" />
          <span className="text-sm">hello@coraly.ai</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Phone className="w-4 h-4" />
          <span className="text-sm">+971 4 123 4567</span>
        </div>
      </div>
    </div>
  );
}
