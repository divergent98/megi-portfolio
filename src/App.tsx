
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Artvanturista from "./pages/Artvanturista";
import Home from "./pages/Home";
import Megiverse from "./pages/Megiverse";
import GraphicDesign from "./pages/GraphicDesign";
import Social from "./pages/Social";
import Design from "./pages/UX_UI_Design";
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/artvanturista" element={<Artvanturista />} />
          <Route path="/maggiverse" element={<Megiverse />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/social-media-and-marketing" element={<Social />} />
          <Route path="/ux-ui-design" element={<Design />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
