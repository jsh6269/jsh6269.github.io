import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import HomePage from "./routes/HomePage";
import PostPage from "./routes/PostPage";
import ListPage from "./routes/ListPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="w-[1400px] bg-[#EFEFEF] relative flex">
          <Aside />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
