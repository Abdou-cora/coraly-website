import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="/icons/New branding Coraly -LOGO.png"
        alt="Coraly"
        className="h-8 lg:h-10 w-auto"
      />
    </Link>
  );
}
