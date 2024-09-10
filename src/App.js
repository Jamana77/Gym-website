import { useEffect } from "react";
import Aos from 'aos'
import "./App.css";
import Header from './components/Header/Header.jsx';
import Exercises from "./components/UI/Exercises.jsx";
import Footer from "./components/UI/Footer.jsx";
import Hero from './components/UI/Hero'
import Pricing from "./components/UI/Pricing.jsx";
import Start from "./components/UI/Start.jsx";
// import Testimonials from "./components/UI/Testimonials.jsx";

function App() {

      useEffect(()=>{
        Aos.init()
      },[])

  return(
  <>
     <Header/>
     <Hero/>
     <Exercises/>
     <Start/>
     <Pricing/>
     <Footer/>
     {/* <Testimonials/> */}
  </>

  ) }

export default App;
