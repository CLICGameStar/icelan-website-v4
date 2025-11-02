export default function SocialFooter({social_media}: 
  {social_media: {name: string, href: string; alt: string, img_src:string}[] }){
        
  return (
 <div className="footer-col contact-links">
          <h3>Contact</h3>
          <ul className="unstyled-list">
          {social_media.map((link) => (<li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer-icon"
                  alt={link.alt}
                  src={link.img_src}
                />
                {link.name}
              </a>
            </li>))}
          </ul>
        </div>
  );}