import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./Shop/Shop";
import Home from "./Home/Home"; // Make sure this exists
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/water" element={<Shop category="water" />} />
        <Route path="/shop/coffee" element={<Shop category="coffee" />} />
        <Route path="/shop/store" element={<Shop category="store" />} />
        <Route path="/shop/merch" element={<Shop category="merch" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
