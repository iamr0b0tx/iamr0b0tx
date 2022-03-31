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
      <Home/>
 }
 <Routes>
   <Route path="/" component={<NotFound/>}/>
   
 </Routes>


    </div>
    
  );
}

export default App;
