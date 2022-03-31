import React from "react"
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
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
   <Route path="notFound" component={<NotFound/>}/>
   
 </Routes>


    </div>
    
  );
}

export default App;
