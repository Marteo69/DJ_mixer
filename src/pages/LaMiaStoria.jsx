
import FadeIn from "../components/FadeIn";
import "../css/LaMiaStoria.css";

const PILASTRI = [
  {
    title: "Baskin",
    text: "Nel Carpe Diem Baskin ci metto gambe, testa e voglia di fare gruppo. Mi piace l'idea di uno sport dove nessuno resta fuori."
  },
  {
    title: "Musica",
    text: "Quando divento @dj_mixer porto gli stessi riflessi del parquet alla console: ritmo, istinto e una discreta dose di caos controllato."
  },
  {
    title: "Affetti",
    text: "Fuori da palestra e serate torno alle cose piu semplici: mia sorella, gli amici di sempre e una quantita poco difendibile di maionese."
  }
];

export default function LaMiaStoria() {
  return(
    <article className="LaMiaStoria">
      <FadeIn>
        <section className="storia-hero">
          <div className="storia-copy">
            <p className="eyebrow">Autobiografia sintetica</p>
            <h1>La mia storia</h1>
            <p>
              Mi chiamo <strong>Dominik Wayer</strong> e a Turriaco mi conoscono in modi
              diversi: c&apos;e chi mi vede come il gigante buono del baskin, chi come quello
              che passa dai vinili al parquet senza cambiare espressione, e chi ormai mi
              associa direttamente a un panino coperto di maionese. La verita e che mi piace
              stare dove c&apos;e energia: in palestra, dietro una console e accanto alle persone
              a cui voglio bene. Se devo riassumermi, direi cosi: sport, musica, ironia e una
              certa tendenza a trasformare ogni giornata in una storia da raccontare.
            </p>
          </div>

          <figure className="storia-photo-card">
            <img src="/foto-intro.png" alt="Ritratto di Dominik Wayer" />
            <figcaption>
              Il lato composto di Dominik: quello che dura finche non parte la musica.
            </figcaption>
          </figure>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="storia-split">
          <figure className="storia-photo-card">
            <img src="/dj-magico.jpeg" alt="Dominik Wayer alla console" />
            <figcaption>
              Tra console e luci basse, Dominik trova il suo secondo campo da gioco.
            </figcaption>
          </figure>

          <div className="storia-copy">
            <p className="eyebrow">Tra parquet e console</p>
            <h2>La mia doppia vita preferita</h2>
            <p>
              Di giorno porto il mio fisico e il mio entusiasmo nel baskin. Mi piace l'idea
              di stare dentro una squadra dove contano energia, inclusione e fiducia reciproca.
              Quando il gioco si alza, io ci sto volentieri dentro fino all'ultimo possesso.
            </p>
            <p>
              Poi cambio scena e divento <strong>DJ mixer</strong>. Anche li funziona tutto
              allo stesso modo: ascolto il momento, alzo il ritmo e provo a lasciare qualcosa
              alle persone. Non importa se il contesto e una palestra o una serata, mi interessa
              sempre la stessa cosa: creare presenza.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="storia-values">
          <div className="storia-copy">
            <p className="eyebrow">Quello che mi tiene in piedi</p>
            <h2>Tre pilastri che non cambio</h2>

            <ul className="pilastri-lista">
              {PILASTRI.map(item => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="storia-photo-card accent-card">
            <img src="/dominik-maionese.JPG" alt="Dominik Wayer con la maionese" />
            <figcaption>
              Alcuni parlano di comfort food. Dominik preferisce parlare di identita.
            </figcaption>
          </figure>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="storia-quote-band">
          <blockquote>
            "Se c'e una cosa che voglio lasciare dietro di me, e il ricordo di uno che si e
            presentato sempre intero: con il suo gioco, la sua musica e i suoi affetti."
          </blockquote>
          <p>
            -Dominik Wayer
          </p>
        </section>
      </FadeIn>
    </article>
  )
}
