import Navbar from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import './index.css'
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Events from "./Components/Events/Events";
import About from "./Components/About/About";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
