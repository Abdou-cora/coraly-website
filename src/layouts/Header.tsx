import { useState, useEffect, useRef } from "react";
import Logo from "../components/header/Logo";
import NavMenu from "../components/header/NavMenu";
import MobileMenu from "../components/header/MobileMenu";
import { LogOut } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import StartFreeButton from "../components/StartFreeButton";

export default function Header() {


  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lng } = useParams();

  useEffect(() => {
    setIsClient(true);
    // Check for user token in localStorage
    const token = localStorage.getItem("usertoken");
    setUserToken(token);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("usertoken");
    setUserToken(null);
    setIsDropdownOpen(false);
    window.location.href = "/";
  };

  return (
    <header className={`sticky  ease-in-out top-0 left-0 h-16 lg:h-20 right-0 z-50 transition-all duration-300  ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Logo />
          <NavMenu />
          <div className="hidden lg:flex items-center space-x-4">
            {isClient && userToken ? (
              // User is authenticated - show avatar with custom dropdown
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button" aria-label="profil"
                  onClick={toggleDropdown}
                  className="cursor-pointer h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:ring-2 hover:ring-purple-500 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  U
                </button>

                {/* Custom Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <button
                      type="button" aria-label="log out"
                      onClick={handleLogout}
                      className="cursor-pointer flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (<>
              <StartFreeButton className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                text="Start Free Trial" />
            </>
            )}
          </div>
          <MobileMenu isClient={isClient} userToken={userToken} onLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
}