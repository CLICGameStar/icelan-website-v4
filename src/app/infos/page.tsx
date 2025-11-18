export default async function Infos() {
  let tournament_list = [
    "League of Legends",
    "Valorant",
    "Rocket League 2v2",
    "Overwatch 2",
    "Overcooked 2",
    "Smash Bros Ultimate 1v1",
    "Mario Kart Deluxe",
    "2XKO",
    "Among Us",
    "Geoguessr",
    "Minecraft",
    "OSU",
    "Balatro",
    "Golf it!",
    "Babyfoot",
    "Loup-garou d'une nuit",
    "Chess 960",
    "Triviapoly",
    "CodeNames",
    "Ping-pong",
    "Refunct",
    "Peak",
  ];

  let anim_list = [
    "Just Dance",
    "Karaoke",
    "Borne d'Arcade",
    "Manettes Géantes (Nidhogg)",
    "Tapis de Danse (Sayonara Wildhearts)",
    "Casques VR (Beat Saber & SuperHot)",
    "Lego",
    "Jenga Géant",
    "Mikado Géant",
    "Babyfoot",
    "Bingo",
    "Escape Game",
  ];
  let prix_etudiant = 15;
  let prix_externe = 20;
  let lieu = "Bâtiment BC, EPFL";
  let start_date = "6 Décembre 2025 9h";
  let end_date = "7 Décembre 2025 10h";
  let mail_link = "mailto:gamestar.clic@epfl.ch";

  return (
    <>
      <section className="planning planning-tournois">
        <h2>Tournois</h2>
        <p className="description">
          Affrontez-vous sur nos nombreux tournois, et venez vous amuser sur les
          nombreux jeux présents, quel que soit votre niveau!
          <br></br>
          Les tournois présents à IceLAN sont les suivants:
        </p>
        <ul className="tournois">
          {tournament_list.map((game) => (
            <li key={game}>{game}</li>
          ))}
        </ul>
      </section>
      <section className="planning planning-anim">
        <h2>Animations</h2>
        <p className="description">
          Vous attendez votre tournoi? Venez prendre une pause en profitant de
          nos diverses animations! Il y en a pour tous les goûts!
          <br />
          <br />
          La <span className="highlight-pink">liste des animations</span> est
          disponible ci-dessous!
        </p>
        <ul className="anim">
          {anim_list.map((name) => (
            <li key={name}> {name} </li>
          ))}
        </ul>
      </section>

      <section className="container infos">
        <h2>Informations Importantes</h2>
        <div className="info-list">
          <div className="info-bloc">
            <div className="info-title">
              <img className="icon" src="/icons/coin.svg" />
              <h3>Prix</h3>
            </div>
            <p className="description">
              Le prix est de {prix_etudiant} CHF pour les étudiant·e·s, et{" "}
              {prix_externe} CHF pour les autres participant·e·s! Ça te donne
              droit à l'accès à l'événement, à toutes activités, tous les repas,
              boissons et snacks, et plus encore... Viens payer en avance durant
              nos permanences!
            </p>
          </div>
          <div className="info-bloc">
            <div className="info-title">
              <img className="icon" src="/icons/calendar.svg" />
              <h3>Lieu & Date</h3>
            </div>
            <p className="description">
              ICeLAN aura lieu au sein du {lieu}, du {start_date} au {end_date},
              en non-stop. Tu peux y accéder avec le Métro M1 (arrêt EPFL), ou
              encore avec les bus 1, 31, 701 ou 705. Il y a également des
              espaces de parking pour les voitures et vélos.
            </p>
          </div>
          <div className="info-bloc">
            <div className="info-title">
              <img className="icon" src="/icons/food.svg" />
              <h3>Nourriture & Boissons</h3>
            </div>
            <p className="description">
              Nous fournissons à chacun·e de nos participant·e·s un repas du
              midi et du soir le samedi, et un petit dej' le dimanche. Nous te
              proposons également toutes sortes de boissons non-alcoolisées,
              ainsi que des snacks. Le tout inclus dans le prix, sans
              supplément!
            </p>
          </div>
          <div className="info-bloc">
            <div className="info-title">
              <img className="icon" src="/icons/group.svg" />
              <h3>Respect & Règles</h3>
            </div>
            <p className="description">
              Lors de ton inscription, il te sera demandé d'accepter le
              <a href="/regles"> règlement de l'événement</a>, ainsi que notre
              charte. En gros, il s'agit de respecter les autres et soi-même, et
              de respecter le matériel et les lieux. Nous nous réservons le
              droit de te virer de l'événement en cas de comportement
              inacceptable.
            </p>
          </div>
          <div className="info-bloc">
            <div className="info-title">
              <img className="icon" src="/icons/question-mark.svg" />
              <h3>Questions & Remarques</h3>
            </div>
            <p className="description">
              Près d'une quarantaine de staffs seront à ta disposition durant
              tout l'événement. Si néanmoins tu as des questions ou des
              remarques avant, n'hésite pas à nous écrire à
              <a href={mail_link}> gamestar.clic@epfl.ch</a>!
            </p>
          </div>
        </div>
      </section>

      <section className="container faq">
        <h2>Foire Aux Questions</h2>
        <div className="faq-list">
          <div className="faq-bloc">
            <p className="faq-q">
              Est-ce que je dois payer en plus pour [truc]?
            </p>
            <p className="faq-a">
              Non, le prix d'inscription couvre tout (repas, boissons, snacks),
              hors distributeurs.
            </p>
          </div>
          <div className="faq-bloc">
            <p className="faq-q">
              Pour les tournois par équipe, est ce qu'on peut s'incrire solo ou
              il faut forcément avoir une équipe complète pour s'inscrire?
            </p>
            <p className="faq-a">
              On a rajouté la possibilité de s'inscrire en "recherchant" une
              team.
            </p>
          </div>
          <div className="faq-bloc">
            <p className="faq-q">
              Est-ce qu’il faut obligatoirement une connexion Ethernet?
            </p>
            <p className="faq-a">Le WiFi est disponible durant l'événement.</p>
          </div>
          <div className="faq-bloc">
            <p className="faq-q">
              Est-ce qu'il faut ramener sa propre Nintendo Switch ou ses propres
              jeux pour les tournois?
            </p>
            <p className="faq-a">
              Normalement, nous fournissons les Nintendo Switch ainsi que les
              jeux, mais si cela ne te dérange pas de prendre la tienne, c'est
              avec plaisir!
            </p>
          </div>
          <div className="faq-bloc">
            <p className="faq-q">
              C'est quoi les visiteurs? On peut participer à [truc]?
            </p>
            <p className="faq-a">
              Les visiteur·euse·s sont les gens qui viennent dire bonjour durant
              l'événement! C'est ouvert de 9h à 22h, après malheureusement on
              ferme le lieu jusqu'à 7h le matin. Pour participer aux activités,
              il n'y a pas de souci, mais priorité aux gens inscrit·e·s. Les
              tournois sont réservés aux personnes inscrites, cependant!
            </p>
          </div>
          <div className="faq-bloc">
            <p className="faq-q">
              Est-ce que c'est possible de payer l'inscription pour quelqu'un
              d'autre?
            </p>
            <p className="faq-a">
              Oui! Il faut venir avec le @ discord de la personne concernée et
              le montant correspondant en cash.
            </p>
          </div>
          <div className="faq-bloc">
            <p className="faq-q">
              Est-ce qu'il y a un parking auquel on peut accéder aux alentours?
            </p>
            <p className="faq-a">
              En weekend, les places de parking vertes - dont celles à environ
              42m de l'entrée - sont libres et gratuites!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
