import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import HomePage from "./routes/HomePage";
import PostPage from "./routes/PostPage";
import ListPage from "./routes/ListPage";
import GuestPage from "./routes/GuestPage";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div className="w-screen sm:w-[1400px] min-h-[460px] sm:min-h-[1000px] bg-[#EFEFEF] relative flex">
          <Aside />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:category/:num" element={<PostPage />} />
            <Route path="/list/:category" element={<ListPage />} />
            <Route path="/guests" element={<GuestPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
