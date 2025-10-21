export default function SocialItem(
    name : String

){


    return (
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

    );

}
