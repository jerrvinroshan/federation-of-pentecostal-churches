import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { MenuNavbar, MobileMenuNavBar } from "./component/MenuNavbar";
import AppRouter from "./Router/AppRouter";
import './assets/style.css'
import './assets/responsive.css'
import './assets/heroImg.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MenuNavbar />
      <MobileMenuNavBar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
