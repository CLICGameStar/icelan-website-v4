import SocialFooter from "./SocialFooter";
import InscriptionFooter from "./InscriptionFooter"
    
export default function Footer() {
  let year = 2025;
  let inscription_link = "/";
  let social_media = [
            { name : "E-mail", href: "mailto:gamestar.clic@epfl.ch", alt: "mail logo", img_src: "/icons/email-logo-round.svg" },
            { name : "Telegram", href: "https://t.me/CLICGameStar", alt: "telegram logo", img_src: "/icons/telegram-logo-round.svg" },
            { name : "Instagram", href: "https://instagram.com/CLICGameStar", alt: "instagram logo", img_src: "/icons/instagram-logo-round.svg" },
            { name : "Discord", href: "https://discord.gg/tMaKxY8V4M", alt: "discord-logo", img_src: "/icons/discord-logo-round.svg" },
          ];
  return (
    <footer>
      <div className="container footer-container">
        <InscriptionFooter curr_year={year} inscription_form_link={inscription_link}/>
        <SocialFooter social_media={social_media}/>
      </div>
    </footer>   
  );
}