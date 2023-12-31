import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navBar/NavBar";
import Tecnology from "./components/tecnology/Tecnology"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Tecnology/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
