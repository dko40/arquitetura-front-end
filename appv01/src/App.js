import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import Layout from "./components/layout/Layout";
import PageContact from "./components/pages/PageContatct";
import PageQuemSomos from "./components/pages/PageQuemSomos";
import Home from "./components/pages/Home"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<PageContact />} />
        <Route path="quem-somos" element={<PageQuemSomos />} />        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);