import { useNavigate, useParams } from "react-router-dom";
import NavDropdown from "./NavDropdown";

export default function NavMenu() {

  const { lng } = useParams();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/${lng}/`, { replace: false });

    setTimeout(() => {
      const el = document.getElementById("faq");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <a
        href={`/${lng}`}
        className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
      >
        Home
      </a>
      <NavDropdown />
      <a
        href={`/${lng}/#faq`}
        onClick={handleClick}

        className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
      >
        FAQ
      </a>
      <a href={`/${lng}/blogs`} className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
        Blogs
      </a>
    </nav>
  );
}
