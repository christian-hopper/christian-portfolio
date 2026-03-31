import Navigation from "../Navigation/Navigation.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import About from "../About/About.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="app__content">
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
