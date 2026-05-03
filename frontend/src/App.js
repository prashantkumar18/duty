import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Articles from "./pages/Articles";
import CursorDot from "./components/CursorDot";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <CursorDot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}
