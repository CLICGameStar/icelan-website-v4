import { directus } from "@/directus";
import { readItems } from "@directus/sdk";
import { getTranslation, queryTranslations } from "@/locales";
import DirectusImage from "@/components/DirectusImage";

export default async function Home() {
  let commissions = await directus().request(
    //@ts-ignore
    readItems("commissions", {
      filter: { slug: { _eq: "game-star" } },
      ...queryTranslations,
    }),
  );

  let num_edition = 6;
  let inscription_form = "";
  let start_date = "6 Décembre 2025 9h";
  let end_date = "7 Décembre 2025 10h";
  let lieu = "Bâtiment BC, EPFL";
  let prix_etudiant = 15;
  let prix_externe = 20;
  let nombre_participants = 100;
  let nombre_staff = 40;
  let nombre_tournois = 20;
  let nombre_animations = 10;
  let partners = [
    { name: "Agepoly", img_src: "/partners/agepoly.png" },
    { name: "Clic", img_src: "/partners/clic.png" },
    { name: "Escape_EPFL", img_src: "/partners/escape_epfl.png" },
    { name: "Gamestar", img_src: "/partners/gamestar.svg" },
    { name: "Polylan", img_src: "/partners/polylan.png" },
    { name: "Triviapoly", img_src: "/partners/triviapoly.jpg" },
  ];

  return (
    <>
      <section className="hero">
        <img className="hero-img hero-img-1" src="/jeux.svg" />
        <div className="hero-content">
          <h1>
            Bienvenue à ICeLAN!
            <span>{num_edition}ème édition</span>
          </h1>
          <a
            className="button button-blue"
            href={inscription_form}
            target="_blank"
          >
            S'Inscrire
          </a>
          <ul className="quick-info">
            <li className="quick-info-item">
              <img src="/icons/date.svg" className="quick-info-icon" />
              {start_date} -{end_date}
            </li>
            <li className="quick-info-item">
              <img src="/icons/place.svg" className="quick-info-icon" />
              {lieu}
            </li>
            <li className="quick-info-item">
              <img src="/icons/price.svg" className="quick-info-icon" />
              Etudiant·e·s: {prix_etudiant} CHF <br />
              Autres: {prix_externe} CHF
            </li>
          </ul>
        </div>
        <img className="hero-img hero-img-2" src="/borne.svg" />
      </section>
      <section className="container about">
        <h2>Qu'est-ce que c'est ?</h2>
        <p className="description">
          ICeLAN est un week-end de tournois de jeux vidéo et de jeux de plateau
          à l'EPFL. L’événement s’axe principalement autour des tournois, se
          succédant tout au long du week-end, mais offre également aux
          participant·e·s des animations autour du jeu vidéo et du jeu tout
          court pour les divertir durant tout l’événement ! L’inscription à
          l’événement offre aux participant·e·s l’accès à tous les
          <span className="highlight-green"> tournois </span>, aux
          <span className="highlight-green"> animations </span> sur tout le
          site, et des
          <span className="highlight-green">
            {" "}
            repas chauds, snacks et boissons{" "}
          </span>
          tout au long de l’événement.
        </p>
        <div className="about-infos">
          <div className="about-info">
            <img className="icon" src="/icons/trophy.svg" />
            <h3>Tournois & Lots</h3>
            <p className="description">
              ICeLAN, c'est de la compétition durant de très nombreux tournois
              sur de très nombreux jeux vidéo et jeux de société. Gagne de
              superbes lots tout le long de l'événement.
            </p>
          </div>
          <div className="about-info">
            <img className="icon" src="/icons/game.svg" />
            <h3>Diverses Animations</h3>
            <p className="description">
              Plutôt envie de chiller ? ICeLAN, c'est aussi des animations
              incroyables, que ce soit en ligne ou hors ligne - il y en a pour
              tous les goûts.
            </p>
          </div>
          <div className="about-info">
            <img className="icon" src="/icons/food.svg" />
            <h3>Repas, Snacks et Boissons</h3>
            <p className="description">
              Nous tenons à ce que ce weekend soit entièrement un weekend de
              détente. Ainsi, de vrais repas te sont offerts tout le long de
              l'événement, et il y a possibilité de prendre des douches sur
              place.
            </p>
          </div>
        </div>
        <a className="button button-green" href="/infos" target="_blank">
          Plus d'infos
        </a>
      </section>
      <section className="conatiner chiffres">
        <div className="block-compteur">
          <div className="compteur" id="participant-counter">
            {nombre_participants}
          </div>
          <div className="titre-compteur">Participant·e·s</div>
        </div>
        <div className="block-compteur">
          <div className="compteur" id="staff-counter">
            {nombre_staff}
          </div>
          <div className="titre-compteur">Staffs</div>
        </div>
        <div className="block-compteur">
          <div className="compteur" id="tournament-counter">
            {nombre_tournois}
          </div>
          <div className="titre-compteur">Tournois</div>
        </div>
        <div className="block-compteur">
          <div className="compteur" id="animation-counter">
            {nombre_animations}
          </div>
          <div className="titre-compteur">Animations</div>
        </div>
      </section>

      <section className="orga">
        <h2>Merci à tous·t·es ceux qui rendent ICeLAN possible!</h2>
        <div className="orga-block">
          {partners.map((link) => (
            <div className="orga-logo" key={link.name}>
              <img src={link.img_src} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
