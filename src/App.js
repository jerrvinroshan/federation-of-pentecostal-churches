import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { MenuNavbar } from "./component/MenuNavbar";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MenuNavbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
