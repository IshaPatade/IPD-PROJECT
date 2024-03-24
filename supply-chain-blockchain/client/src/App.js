import "./App.css";
import AssignRoles from "./AssignRoles";
import Home from "./Components/Home/Home";
import LoggedIn from "./Components/Home/LoggedIn";
import AddMed from "./AddMed";
import Supply from "./Supply";
import Track from "./Track";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
 
  return (
    <div className="App">
      <Router>
        {user ? <Header /> : ""}
        {user ? console.log("user") : console.log("no usre")}
        <Routes>
          <Route
            path="/"
            element={user ? <LoggedIn /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!user ? <Home /> : <Navigate to="/" />}
          />
          {/* <Route path="/" element={<Home />} /> */}
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
