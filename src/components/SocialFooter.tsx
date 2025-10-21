export default function SocialFooter(){
        
  return (
 <div className="footer-col contact-links">
          <h3>Contact</h3>
          <ul className="unstyled-list">
            <li>
              <a
                href="mailto:gamestar.clic@epfl.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  alt="mail logo"
                  src="assets/img/icons/email-logo-round.svg"
                />
                gamestar.clic@epfl.ch
              </a>
            </li>
            <li>
              <a
                href="https://t.me/CLICGameStar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  alt="telegram logo"
                  src="assets/img/icons/telegram-logo-round.svg"
                />
                @CLICGameStar
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/CLICGameStar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  alt="instagram logo"
                  src="assets/img/icons/instagram-logo-round.svg"
                />
                @CLICGameStar
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/tMaKxY8V4M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  alt="discord logo"
                  src="assets/img/icons/discord-logo-round.svg"
                />
                Discord ICeLAN
              </a>
            </li>
          </ul>
        </div>
  );
 
    }