import FadeIn from "../components/FadeIn";
import PhotoSlider from "../components/PhotoSlider";
import "../css/RaccoltaFoto.css";
import { assetUrl } from "../utils/assetUrl";

const IMAGES = [
  {
    label: "Ritratto",
    desc: "Il ritratto ufficiale di Dominik, a meta tra eleganza e minaccia velata ai vinili.",
    alt: "Ritratto di Dominik Wayer in posa",
    url: assetUrl("foto-intro.png")
  },
  {
    label: "DJ set",
    desc: "Dominik alla console, nel momento esatto in cui il set comincia a diventare leggenda.",
    alt: "Dominik Wayer in versione DJ circondato da vinili",
    url: assetUrl("dj-magico.jpeg")
  },
  {
    label: "Pausa tecnica",
    desc: "Una foto simbolo: Dominik, maionese e serenita interiore nello stesso fotogramma.",
    alt: "Dominik Wayer insieme alla maionese",
    url: assetUrl("dominik-maionese.JPG")
  },
  {
    label: "Mito locale",
    desc: "Il lato piu teatrale della storia: Dominik reinterpretato come leggenda urbana di Turriaco.",
    alt: "Illustrazione horror ispirata a Dominik Wayer",
    url: assetUrl("horror-dominik.png")
  }
];

const TAGS = ["Baskin", "DJ set", "Turriaco", "Maionese approved", "Parolacce"];

export default function RaccoltaFoto() {
  return(
    <article className="RaccoltaFoto">
      <FadeIn>
        <section className="raccolta-hero">
          <div className="raccolta-copy">
            <p className="eyebrow">Archivio visivo non ufficiale</p>
            <h1>Raccolta Foto</h1>
            <p>
              Una selezione di scatti che mette insieme i lati piu noti di Dominik:
              il ritratto da gigante buono, la trance da console, la fedelta assoluta
              alla maionese e la versione leggendaria che a Turriaco continua a crescere
              ogni volta che qualcuno racconta la sua storia.
            </p>

            <div className="raccolta-tags">
              {TAGS.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <figure className="hero-card">
            <img src={assetUrl("foto-intro.png")} alt="Ritratto di Dominik Wayer" />
            <figcaption>
              Il ritratto che ha reso ufficiale la presenza scenica di Dominik.
            </figcaption>
          </figure>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="raccolta-slider-section">
          <div className="slider-shell">
            <PhotoSlider images={IMAGES} />
          </div>

          <div className="slider-copy">
            <p className="eyebrow">Scorri la galleria</p>
            <h2>Quattro facce dello stesso personaggio</h2>
            <p>
              Le foto raccontano bene l&apos;equilibrio su cui si regge Dominik:
              presenza fisica, ironia, sport e una capacita naturale di farsi ricordare.
              Non c&apos;e un vero personaggio da separare dalla persona: cambia il contesto,
              ma l&apos;energia resta sempre la stessa.
            </p>

            <ul>
              <li>Nel baskin porta intensita, spirito di squadra e presenza scenica.</li>
              <li>Alla console trasforma la serata in un piccolo rito collettivo.</li>
              <li>Nelle foto piu intime resta sempre il lato piu semplice e affettuoso.</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="raccolta-grid-section">
          <div className="section-heading">
            <p className="eyebrow">Momenti salvati</p>
            <h2>Una mini galleria piu ordinata, ma non meno caotica</h2>
          </div>

          <div className="photo-grid">
            {IMAGES.map((image, index) => (
              <figure
                key={image.url}
                className={`photo-card ${index === IMAGES.length - 1 ? "is-wide" : ""}`}
              >
                <img src={image.url} alt={image.alt} />
                <div className="photo-card-copy">
                  <span className="photo-label">{image.label}</span>
                  <p>{image.desc}</p>
                </div>
              </figure>
            ))}
          </div>
        </section>
      </FadeIn>
    </article>
  )
}
