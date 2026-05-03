import { Link } from "react-router-dom";
import '../css/Intro.css';
import FadeIn from "../components/FadeIn";

export default function Intro() {


  return(
    <div className="Intro">
      <IntroHeader/>
      
      <FadeIn>
      <div className="main">
        <div className="text-wrapper">
          <h1>Dominik Wayer, se va...</h1>
          <p>
            Basketballista, filantropo, pedagogo, supereroe, DJ, mixer, dottore, studente,
            giocatore di calcio, data analyst, muratore, fratello, e molto altro...
          </p>
          <Link to={"main-content/home"} className="entra-btn">Entra</Link>
        </div>
        <div className="img-wrapper">
          <img src="../../public/foto-intro.png" alt="Foto di Dominik Wayer" />
        </div>
      </div>
      </FadeIn>
    </div>
  )
}

function IntroHeader() {
  return(
    <div className="IntroHeader">
      <Link to={"main-content/home"} className="link dominik-link">Dominik</Link>
      <Link to={"main-content/raccolta-foto"} className="link foto-link">Foto</Link>
      <Link to={"main-content/la-mia-storia"} className="link storia-btn">La mia storia</Link>
    </div>
  )
}