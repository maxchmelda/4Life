import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamesPage from "./pages/GamesPage";
import FiveM_RP from "./pages/FiveM_RP";
import Pravidla from "./pages/Pravidla";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hry" element={<GamesPage />} />
        <Route path="/hry/fivemrp" element={<FiveM_RP />} />
        <Route path="/pravidla" element={<Pravidla />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
