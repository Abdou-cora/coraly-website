import { Link, useParams } from "react-router-dom";

export default function NavDropdown() {

  const { lng } = useParams();

  return (
   <nav className="hidden lg:flex items-center space-x-8">
      <div className="relative group">
        <button type="button" aria-label="Features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-1">
          Features
          <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            <Link to={`/${lng}/ai-listing-creation`} className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
              <div className="font-medium">AI Listing Creation</div>
              <div className="text-sm text-gray-500">Create stunning property listings with AI</div>
            </Link>
            <Link to={`/${lng}/photo-enhancement`} className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
              <div className="font-medium">Photo Enhancement</div>
              <div className="text-sm text-gray-500">Transform dull photos into scroll-stopping visuals</div>
            </Link>
            <Link to={`/${lng}/ai-copywriting`} className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
              <div className="font-medium">AI Copywriting</div>
              <div className="text-sm text-gray-500">Compelling listing copy that converts</div>
            </Link>
            <Link to={`/${lng}/ai-marketing-assets`} className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
              <div className="font-medium">AI Marketing Assets</div>
              <div className="text-sm text-gray-500">Videos, social posts, and 3D floor plans</div>
            </Link>
            <Link to={`/${lng}/lead-qualification`} className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
              <div className="font-medium">Lead Qualification</div>
              <div className="text-sm text-gray-500">24/7 AI lead nurturing and booking</div>
            </Link>
          
          </div>
        </div>
      </div>
    </nav>
  );
}
