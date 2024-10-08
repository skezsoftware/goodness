import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/blue"}>Go to blue page</Link>
          <Link to={"/red"}>Go to red page</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
