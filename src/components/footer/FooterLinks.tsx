import { Link, useNavigate, useParams } from "react-router-dom";

type Section = {
  title: string;
  links: {
    label: string;
    href: string;
    dataPopup?: string
  }[];
};

export default function FooterLinks() {

  const { lng } = useParams();
  const navigate = useNavigate();

  const sections: Section[] = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "FAQ", href: `/${lng}/#faq` },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#", dataPopup: "contactus" },
        { label: "Contact Us", href: "#" ,dataPopup: "contactus"},
        { label: "Privacy Policy", href: `/${lng}/privacy-policy` },
        { label: "Terms of Service", href: `/${lng}/terms-condition` },
      ],
    },
  ];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/${lng}/`, { replace: false });

    setTimeout(() => {
      const el = document.getElementById("faq");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              link.label !== "Features" ? (
                <li key={`label-${link.label}`}>
                  <a
                    href={link.href}
                    data-popup={link.dataPopup}
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      if (link.label === "FAQ") {
                        handleClick(e);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key="features-dropdown">
                  <nav className="flex items-center space-x-8">
                    <div className="relative group">
                      <button
                        type="button"
                        aria-label="Features"
                        className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                      >
                        Features
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-52 bg-gray-900 rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          <Link to={`/${lng}/ai-listing-creation`} className="block px-3 py-2 text-gray-300 hover:text-purple-600 transition-colors">
                            <div className="font-medium">AI Listing Creation</div>
                          </Link>
                          <Link to={`/${lng}/photo-enhancement`} className="block px-3 py-2 text-gray-300 hover:text-purple-600 transition-colors">
                            <div className="font-medium">Photo Enhancement</div>
                          </Link>
                          <Link to={`/${lng}/ai-copywriting`} className="block px-3 py-2 text-gray-300 hover:text-purple-600 transition-colors">
                            <div className="font-medium">AI Copywriting</div>
                          </Link>
                          <Link to={`/${lng}/ai-marketing-assets`} className="block px-3 py-2 text-gray-300 hover:text-purple-600 transition-colors">
                            <div className="font-medium">AI Marketing Assets</div>
                          </Link>
                          <Link to={`/${lng}/lead-qualification`} className="block px-3 py-2 text-gray-300 hover:text-purple-600 transition-colors">
                            <div className="font-medium">Lead Qualification</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </nav>
                </li>
              )
            ))}

          </ul>
        </div>
      ))}
    </>
  );
}
