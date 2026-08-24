import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import BuyMedicine from "./BuyMedicine";
import FindDoctors from "./FindDoctors";
import Pharmacy from "./Pharmacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/buy-medicine" element={<BuyMedicine />} />

        <Route path="/find-doctors" element={<FindDoctors />} />

        <Route path="/pharmacy" element={<Pharmacy />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;