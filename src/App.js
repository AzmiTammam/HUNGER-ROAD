import "./style.sass";
import Navbar from "./components/navbar/navabr";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Navbar />
    </BrowserRouter>
  );
}

export default App;
