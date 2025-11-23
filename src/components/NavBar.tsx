import Link from "next/link";
import Image from "next/image";

export default function NavBar({
  navLinks,
}: {
  navLinks: { name: string; href: string; color: string }[];
}) {
  let changeNav = () => {
    let nav = document.getElementById("main-nav");
    nav?.classList.toggle("nav-active");
    let burger = document.getElementById("burger-menu");
    burger?.classList.toggle("burger-highlight");
  };
  return (
    <header>
      <a href="/">
        <Image
          src="/logo-white.svg"
          alt="Icelan logo"
          className="logo"
          width={100}
          height={50}
        />
      </a>
      <nav id="main-nav" className="main-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={link.color}>
                {link.name}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a className="burger-menu" id="burger-menu" href="#" onClick={changeNav}>
        <img src="/icons/burger-menu.svg" className="icon" alt="Burger menu" />
      </a>
    </header>
  );
}
