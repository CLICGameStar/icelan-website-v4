import SocialFooter from "./SocialFooter";
import InscriptionFooter from "./InscriptionFooter"
    
export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <InscriptionFooter/>
        <SocialFooter/>
      </div>
    </footer>   
  );
}