import Link from "next/link";
import Image from "next/image";

export default function NavBar({
  navLinks,
}: {
  navLinks: { name: string; href: string }[];
}) {
  return (
    <header className="nav-bar">
      <a href="/" className="logo-link">
        <Image
          src="../../public/logo-white.svg"
          className="logo"
          width={100}  
          height={50} 
          alt = "Logo"
        />
      </a>
      <nav className="nav-bar-links">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}