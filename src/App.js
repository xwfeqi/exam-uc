import "./App.css";
import Navbar from "./components/navbar/navbar";
import Cardcomponent from "./components/cardcomponent/cardcomponent";
import Bigtext from "./components/bigtext/bigtext";
import AboutProject from "./components/AboutProject/AboutProject";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bigtext/>
      <Cardcomponent/>
      <AboutProject/>
      <Footer/>
      
    </div>
  );
}

export default App;
