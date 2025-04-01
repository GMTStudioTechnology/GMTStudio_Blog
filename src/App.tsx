import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/layout/MainPage";
import Blog from "./components/layout/Blog";
import Navbar from "./components/layout/Navigation_bar";
import Blog_1 from "./components/layout/UI/Blog/Blog1";
import Blog_2 from "./components/layout/UI/Blog/Blog2"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog1" element={<Blog_1/>}/>
            <Route path="/blog2" element={<Blog_2/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;