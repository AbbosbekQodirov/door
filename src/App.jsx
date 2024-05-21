import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import OneProduct from "./pages/product/OneProduct";
import Basket from "./pages/basket/Basket";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
