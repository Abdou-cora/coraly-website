import { MapPin } from "lucide-react";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm">© 2025 Coraly. All rights reserved.</p>
      <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 sm:mt-0">
        <MapPin className="w-4 h-4" />
        <span>Dubai, UAE • London, UK</span>
      </div>
    </div>
  );
}
