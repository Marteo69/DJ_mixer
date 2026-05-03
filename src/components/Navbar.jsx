import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return(
    <nav className="Navbar">
      <Link to={"home"}>Home</Link>
      <Link to={"raccolta-foto"}>Raccolta foto</Link>
      <Link to={"la-mia-storia"}><i>La mia storia</i></Link>
      <Link to={"/"} >Intro</Link>

      <a onClick={toggleDarkMode} className={`dark-mode-btn ${darkMode ? "active" : ""}`}>{darkMode ? "Light mode" : "Dark mode"}</a>
    </nav>
  )
}
