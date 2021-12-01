import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.sass";
import 'animate.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Partner from "./components/Partner/Partner";
import ApplyPartner from "./components/Partner/ApplyPartner"
import Rider from "./components/Rider/Rider";
import Footer from "./components/Footer/Footer";
import PartnerPanel from "./components/Partner/PartnerPanel/PartnerPanel";

function App() {
  return (
    <BrowserRouter>
          
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Rider" element={<Rider />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/ApplyPartner" element={<ApplyPartner />} />
          <Route path="/PartnerPanel" element={<PartnerPanel />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
