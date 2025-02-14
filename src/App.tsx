import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/layout/MainPage";





function App() {
  return (
    <div className="App">
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<MainPage/>} />

        </Routes>
      </div>

    </Router>

    </div>
  );
}

export default App;