import Hero from "./components/Hero";
import Availability from "./components/Avalibity";
import Departments from "./components/Departments";
import WhyChooseUs from "./components/WhyChooseUs";
import NursingSupport from "./components/NursingSupport";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#dce8ec] text-black">

      <Hero />
      <Availability />
      <Departments />
      
  
      <WhyChooseUs />
      <NursingSupport />
      <Brands />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;