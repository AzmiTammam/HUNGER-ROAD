import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.sass";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Partner from "./components/Partner/Partner";
import ApplyPartner from "./components/Partner/ApplyPartner"

function App() {
  return (
    <BrowserRouter>
          
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/ApplyPartner" element={<ApplyPartner />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
