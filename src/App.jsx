import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home";
import GlobalStyle from "./styles/globalComponents";
import CouroPage from "./views/Couro";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/couro" element={<CouroPage />} />        
      </Routes>
    </Router>
  );
}

export default App;
