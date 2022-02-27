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
import NotFound from "./components/NotFound";



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
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/experience" element={<Experience/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/work" element={<Work/>}/>
      <Route component={<NotFound/>}/>
      </Routes>

}
    </div>
  );
}

export default App;
