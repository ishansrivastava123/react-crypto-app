import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Coin from "./components/Coin"
import Exchanges from "./components/Exchanges"
import CoinDetails from "./components/CoinDetails"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coin />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
