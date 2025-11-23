"use client";
import { usePathname, useRouter } from "next/navigation";
import NavBar from "./NavBar";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  let navLinks = [
    { name: "Acceuil", href: "/", color: "highlight-white" },
    { name: "Infos", href: "/infos", color: "highlight-green" },
    { name: "Règlement", href: "/regles", color: "highlight-blue" },
    { name: "Galerie", href: "/galerie", color: "highlight-white" },
    { name: "Inscriptions", href: "insc_form_link", color: "highlight-green" },
    { name: "Staffing", href: "staff_form_link", color: "highlight-blue" },
  ];
  return (
    <>
      <NavBar navLinks={navLinks} />
    </>
  );
}
