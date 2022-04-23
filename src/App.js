import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './componentes/Slider/Slider';
import Navbar from './componentes/Navbar/Navbar';
import Cover from './componentes/cover/Cover';
import About from './componentes/about/About';
import Info from "./componentes/info/Info";
import Footer from "./componentes/footer/Footer";

function App() { 

  return (
    <div className="App">
        <Navbar />
      <Cover />
      <About />
      <Slider /> 
      <Info />
      <Footer />
    </div>
  );
}

export default App;
