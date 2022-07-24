import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Counter from "./Components/Counter";
import Footer_Web from "./Components/Footer";
import Main from "./Components/Main";
import NavBar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Services";
import Teams from "./Components/Team";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <About/>
      <Service/>
      <Counter/>
      <Portfolio/>
      <Teams/>
      <Contact/>
      <Blog/>
      <Footer_Web/>
    </div>
  );
}

export default App;
