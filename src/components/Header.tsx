"use client";
import { usePathname, useRouter } from "next/navigation";
import NavBar from "./NavBar";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  let navLinks = [
    { name: "Acceuil", href: "/" },
    { name: "Infos", href: "/infos" },
    { name: "Règlement", href: "/regles" },
    { name: "Galerie", href: "/galerie" },
    { name: "Inscriptions", href: "insc_form_link" },
    { name: "Staffing", href: "staff_form_link" },
  ];
  return (
    <>
      <NavBar navLinks={navLinks} />
    </>
  );
}
