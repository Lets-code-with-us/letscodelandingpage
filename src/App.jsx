import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import About from "./about/About";
import Community from "./community/Community";
import Contact from "./contact/Contact";
import Service from "./services/Service";
import Product from "./product/Product";
import Privacy from "./policies/privacy/Privacy";
import Cancellation from "./policies/Cancellation/Cancellation";
import Terms from "./policies/terms/Terms";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/cancellation" element={<Cancellation/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
