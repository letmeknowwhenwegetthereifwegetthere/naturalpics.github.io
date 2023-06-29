import NavbarApp from "./components/NavbarApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";
import Context from "./Context";
function App() {

  const endpoint = "/natural-pic/fotos.json";
  const [fotos, setFotos] = useState([]);
  const compartirFotos = {fotos, setFotos}

  
  useEffect(() => {
    consultarinfo()
  }, []);
  const consultarinfo = async () => {
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)
    setFotos(data.photos);
  }
  return (
    <div className="App">
    <Context.Provider value={compartirFotos}>
      <BrowserRouter>
        <NavbarApp/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/natural-pic/" element={<Home/>}/>
          <Route path="/Favoritos" element={<Favoritos/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
    </div>
  );
}

export default App;