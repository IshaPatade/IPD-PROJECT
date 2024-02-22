import "./App.css";
import AssignRoles from "./AssignRoles";
import Home from "./Components/Home/Home";
import AddMed from "./AddMed";
import Supply from "./Supply";
import Track from "./Track";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/roles" element={<AssignRoles />} />
          <Route path="/addmed" element={<AddMed />} />
          <Route path="/supply" element={<Supply />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
