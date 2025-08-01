import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import StartFreeButton from "../StartFreeButton";

type MobileMenuProps = {
  isClient: boolean;
  userToken: string | null;
  onLogout: () => void;
};

export default function MobileMenu({ isClient, userToken, onLogout }: MobileMenuProps) {

  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lng } = useParams();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    onLogout();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/${lng}/`, { replace: false });

    setTimeout(() => {
      const el = document.getElementById("faq");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="lg:hidden z-[9999] relative">
      {/* Menu toggle button */}
      <button type="button" aria-label="Menu" onClick={() => setOpen(true)} className="p-2">
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[9999] shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b bg-white z-[9999]">
          <span className="font-semibold text-lg">Menu</span>
          <button type="button" aria-label="Close" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="px-4 py-6 space-y-4 bg-white">
          <a href="#features" className="block text-gray-700 font-medium">
            Features
          </a>
          <Link to={`/${lng}/ai-listing-creation`} className="block text-gray-700 font-medium pl-4">AI Listing Creation</Link>
          <Link to={`/${lng}/photo-enhancement`} className="block text-gray-700 font-medium pl-4">Photo Enhancement</Link>
          <Link to={`/${lng}/ai-copywriting`} className="block text-gray-700 font-medium pl-4">AI Copywriting</Link>
          <Link to={`/${lng}/ai-marketing-assets`} className="block text-gray-700 font-medium pl-4">AI Marketing Assets</Link>
          <Link to={`/${lng}/lead-qualification`} className="block text-gray-700 font-medium pl-4">Lead Qualification</Link>
          <a href={`/${lng}/#faq`} onClick={handleClick} className="block text-gray-700 hover:text-purple-600  pl-4 font-medium transition-colors">
            FAQ
          </a>
          <a href={`/${lng}/blogs`} className="block text-gray-700 hover:text-purple-600  pl-4 font-medium transition-colors">
            Blogs
          </a>
          <div className="pt-4 space-y-3">
            {isClient && userToken ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  aria-label="profil"
                  onClick={toggleDropdown}
                  className="cursor-pointer h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:ring-2 hover:ring-purple-500 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  U
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[9999]">
                    <button
                      type="button"
                      aria-label="Log Out"
                      onClick={handleLogout}
                      className="cursor-pointer flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  text="Start Free Trial" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}
