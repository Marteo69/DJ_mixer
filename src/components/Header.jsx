import '../css/Header.css';
import { useScrollProgress } from '../hooks/useScrollFunctions';

export default function Header() {
  let scrollProgress = useScrollProgress();
    
  const dynamicOpacity = 1 - scrollProgress;
  const dynamicScale =   1 - (scrollProgress * 0.5)

  return(
    <div 
      className="Header"
      style={{
        opacity: dynamicOpacity,
        transform: `scale(${dynamicScale})`
      }}
    >
      <div className="text-wrapper">
        <h1>Dominik Wayer, un tuttofare flessibile</h1>
        <p><i>"Maionese, parolacce di merda"</i></p>
      </div>

      <figure>
        <img height={"200px"} src="/dominik-maionese.JPG" alt="Foto di Dominik" />
        <figcaption>Una foto di Dominik insieme al suo cibo preferito: la maionese</figcaption>
      </figure>
    </div>
  )
}
