import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import HomePage from "./views/Home";
import GlobalStyle from "./styles/globalComponents";



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
