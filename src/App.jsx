import Home from "./pages/Home";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { Routes, Route, Outlet } from "react-router-dom";
import LaMiaStoria from "./pages/LaMiaStoria";
import RaccoltaFoto from "./pages/RaccoltaFoto";
import Intro from "./pages/Intro";

function MainContent() {
  return(
    <>
      <Navbar/>
      <Header/>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  )
}

function App() {
  return(
    <>
      <Routes>
        <Route index element={<Intro/>} />
        <Route path="main-content" element={<MainContent/>}>
          <Route path="home" element={<Home/>} />
          <Route path="raccolta-foto" element={<RaccoltaFoto/>} />
          <Route path="la-mia-storia" element={<LaMiaStoria/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
