import "./style.sass";
import Navbar from "./components/navbar/Navabr";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
