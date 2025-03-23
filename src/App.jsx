import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home";
import GlobalStyle from "./styles/globalComponents";
import CategoryDynamicPage from "./views/PaginaDinamica";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />    
        <Route path="/:category" element={<CategoryDynamicPage />} />
   
      </Routes>
    </Router>
  );
}

export default App;
