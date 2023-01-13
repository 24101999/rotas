import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Content from "./pages/Content";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Content />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
