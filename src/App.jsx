import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., 5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <Loader /> : <Home />}</div>;
}

export default App;
