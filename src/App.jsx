import Layout from "../src/components/ui/Layout";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Sections/Products";
import Explore from "./components/Sections/Explore";
import Overview from "./components/Sections/Overview";
import Project from "./components/Sections/Project";
import Future from "./components/Sections/Future";
import LastSection from "./components/Sections/LastSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
      {/* 
        <Products />
        <Explore />
        <Overview />
        <Project />
        <Future />
        <LastSection />
      <Footer /> */}
    </main>
  );
}

export default App;
