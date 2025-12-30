import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HyperartDetailPage from "./pages/HyperartDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hyperart/:id" element={<HyperartDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

