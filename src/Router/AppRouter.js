import { Route, Routes } from "react-router-dom";
import Home from "../pages/Website/Home";
import AboutUs from "../pages/Website/About-us";
import Ministries from "../pages/Website/Ministries";
import Events from "../pages/Website/Events";
import Zones from "../pages/Website/Zones";
import Department from "../pages/Website/Departments";
import Commissions from "../pages/Website/Commissions";
import Councils from "../pages/Website/Councils";
import Gallery from "../pages/Website/Gallery";
import ContactUs from "../pages/Website/Contact-us";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/ministries" element={<Ministries />} />
      <Route path="/events" element={<Events />} />
      <Route path="/zones" element={<Zones />} />
      <Route path="/departments" element={<Department />} />
      <Route path="/commissions" element={<Commissions />} />
      <Route path="/councils" element={<Councils />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};
export default AppRouter;
