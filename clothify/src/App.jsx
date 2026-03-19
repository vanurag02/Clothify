import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-white">
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/product/:productId" element={<Product />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
