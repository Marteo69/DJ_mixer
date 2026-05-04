import FadeIn from "../components/FadeIn"
import { assetUrl } from "../utils/assetUrl";
import "../css/Home.css"

export default function Home() {  
  return(
    <article className="Home">   

      <FadeIn>
      <section className="gigante-di-turriaco sect1">
        <div className="robe-scritte">
          <h2>Il Gigante Buono di Turriaco: La Doppia Vita di Dominik Wayer tra Baskin, Vinili e... <i>Maionese</i></h2>
          <p>
            A Turriaco, tranquilla cittadina del Friuli-Venezia Giulia, c'è un nome che circola con insistenza
            tra i portici del centro e il PalaMarson: <b>Dominik Wayer</b>. A 34 anni, questo eclettico ragazzo ha 
            catturato l'immaginazione e il cuore della comunità, complici le sue abilità sportive, il suo talento
            musicale e una fisicità che non passa decisamente inosservata. Alto la bellezza di 4 metri e dalla 
            corporatura estremamente esile, Dominik è molto più di un semplice cittadino: è un'<b>istituzione locale</b> avvolta 
            in un <i>alone di leggenda</i>.
          </p>
        </div>

        <figure>
          <video 
            autoPlay={true}
            loop
            muted
          >
            <source src={assetUrl("video-dominik-basket.mp4")} type="video/mp4" />
            nigga hai un old ass browser che non supporta mp4
          </video>
          <figcaption>
            <a 
              href={assetUrl("video-dominik-basket.mp4")}
              download={"video-dominik-basket.mp4"}
            >Video</a> di Dominik che gioca a Basket
          </figcaption>
        </figure>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="console-e-canestri">
        <figure>
          <img src={assetUrl("dj-magico.jpeg")} alt="Dominik che lancia vinili da dj con maionese intorno" />
        </figure>
        
        <div className="robe-scritte">
          <h2>
            Tra Console e Canestri: <a target="_blank" href="https://www.instagram.com/dj_mixer_300567?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@dj_mixer</a> e il Carpe Diem Baskin
          </h2>
          <p>
            Di giorno e nei weekend sportivi, Dominik è un pilastro fondamentale del Carpe Diem Baskin 
            Pieris/Turriaco, la formidabile associazione sportiva locale che promuove il baskin. 
            Per chi non lo sapesse, il baskin è un meraviglioso sport inclusivo dove persone normodotate e 
            con disabilità giocano nella stessa squadra, abbattendo ogni barriera. Con la maglia numero 32, 
            Wayer è una vera forza della natura sul parquet 
            (le cronache sportive locali riportano ancora una sua epica prestazione da 25 punti!).
          </p>
          <br />
          <p>
            Ma quando non è a fare canestro, Dominik si trasforma in <a target="_blank" href="https://www.instagram.com/dj_mixer_300567?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@dj_mixer</a>. 
            La sua passione per la musica lo porta a esplorare sonorità uniche alla console. 
            Le sue serate sono un mix esplosivo, arricchite spesso dal suo amore per il cikany tanc. 
            Dominik, infatti, parla correntemente lo sloveno e adora farsi trascinare dai ritmi di questa 
            danza tradizionale, portando un tocco di internazionalità ai suoi dj set.
          </p>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="cavaliere-oscuro-maionese">
        <div className="robe-scritte">
          <h2>Il "Cavaliere Oscuro" di Turriaco</h2>
          <p>
            Le vere speculazioni, però, iniziano al <b>calare del sole</b>. Da quando Dominik si è trasferito a 
            Turriaco, i residenti hanno notato un fatto innegabile: il tasso di criminalità è sceso in 
            modo drastico. Da qui, la gente del posto ha iniziato a sussurrare una teoria tanto bizzarra 
            quanto affascinante.
          </p>
          <br />
          <p>
            Si mormora che il nostro dj si trasformi di notte in un <b>supereroe silenzioso</b>. 
            Sfruttando i suoi <b>4 metri</b> di altezza per scrutare i vicoli dall'alto, si dice che protegga 
            la città neutralizzando i malintenzionati con una tecnica infallibile: 
            lanciare <b>dischi in vinile</b> a mo' di shuriken. Ovviamente si tratta solo di voci di paese, ma pare che nessun 
            ladro osi più avvicinarsi per paura di trovarsi un 33 giri stampato in fronte.
          </p>
          <br />
          <p>
            A causa della sua incredibile statura, le leggende metropolitane narrano anche che Dominik 
            abbia trovato una sistemazione abitativa decisamente non convenzionale: 
            per riposare comodamente senza rannicchiarsi, pare che dorma all'interno di una lunghissima 
            e strettissima <b>grondaia</b>, che gli fa da guscio su misura.
          </p>
        </div>

        <div className="robe-scritte">
          <h2>Un Cuore di Maionese e un Fratello Esemplare</h2>
          <p>
            Dietro l'imponente figura del supereroe-dj, si nasconde però un ragazzo dalle passioni 
            semplici e dai legami profondi:
          </p>

          <ul>
            <li>
              <strong>L'ossessione per la maionese:</strong>
              Non c'è pasto, spuntino o spaghetto di mezzanotte che Dominik non anneghi in abbondanti dosi di maionese. 
              È la sua firma culinaria e il suo carburante ufficiale post-allenamento.
            </li>
            <li>
              <strong>L'amore incondizionato per la sorella:</strong>
              Il vero centro della vita di Dominik è sua sorella. Trascorre gran parte del suo tempo 
              libero con lei, fungendo da personalissima guardia del corpo. 
              La protegge costantemente da qualsiasi pericolo (reale o immaginario) con una dolcezza 
              e una dedizione che inteneriscono tutta Turriaco.
            </li>
          </ul>

          <p>
            Dominik Wayer è senza dubbio l'eroe di cui Turriaco non sapeva di aver bisogno: 
            un campione di inclusione sportiva, un mago dei vinili, un divoratore di maionese e il 
            fratello che tutti vorrebbero avere.
          </p>
        </div>
      </section>
      </FadeIn>
    </article>
  )
}
