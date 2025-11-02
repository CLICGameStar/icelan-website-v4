export default function InscriptionFooter({inscription_form_link, curr_year}: {inscription_form_link: string, curr_year: number}){

return (
    <div className="footer-col">
      <div className="button-wrapper">
        <p>
          Les places sont limitées alors n'hésite pas !
        </p>
        <a className="button button-medium button-blue-flip" href={inscription_form_link} target="_blank">S'inscrire</a>
      </div>
      <br />
      <p>ⓒ Game* {curr_year}</p>
    </div>
);
}

    