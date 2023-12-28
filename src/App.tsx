import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import LandingPage from "./pages/landing-page";
import ErrorPage from "./pages/error-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
