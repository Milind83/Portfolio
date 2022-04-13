import "./App.css";
import Conatact from "./Components/Contact/Conatact";
import Experience from "./Components/Experience/Experience";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Conatact/>
    </div>
  );
}

export default App;
