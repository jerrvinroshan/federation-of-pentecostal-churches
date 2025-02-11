import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { MenuNavbar, MobileMenuNavBar } from "./component/MenuNavbar";
import AppRouter from "./Router/AppRouter";

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
