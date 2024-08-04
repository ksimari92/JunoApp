import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Productos from "./components/Productos/Productos";
import Footer from "./components/Footer/Footer";
import ProductoDetalle from "./components/Productos/ProductoDetalle";
import Carrito from "./components/Carrito/Carrito";
import { CarritoProvider } from "./context/JunoContext";

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = (url) => {

    fetch(url)
      .then(res => res.json())
      .then(data => setProductos(data));
  }

  useEffect(() => {
    getProductos('https://fakestoreapi.com/products');
  }, [])

  return (
    <CarritoProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos productos={productos} />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/carrito" element={<Carrito />} />


        </Routes>

        <Footer />
      </BrowserRouter>
    </CarritoProvider>

  )
}

export default App
