import Layout from "../src/components/ui/Layout";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SliderComponent from "./components/Sections/SliderComponent";
import About from "./components/Sections/About";
import Future from "./components/Sections/Future";
import Products from "./components/Sections/Products";
import Explore from "./components/Sections/Explore";
import Overview from "./components/Sections/Overview";
import Project from "./components/Sections/Project";
import LastSection from "./components/Sections/LastSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SliderComponent />
      <About />
      <Future />
      {/* 
        <Explore />
        <Overview />
        <Project />
        <LastSection />
      <Footer /> */}
    </main>
  );
}

export default App;
