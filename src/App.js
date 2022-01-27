import React from "react"
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Experience from "./routes/Experience";
import Work from "./routes/Work"
import { useState, useEffect} from "react"
import Loader from "./components/Loader";



function App() {
  const [loading, setLoading]= useState(false);

  useEffect(() => {
  setLoading(true);
  setTimeout(() =>{
  setLoading(false)
  }, 4000)
  }, [])
  return (
    <div className="app">
      {
        loading ? <Loader/>
      :
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>

}
    </div>
  );
}

export default App;
