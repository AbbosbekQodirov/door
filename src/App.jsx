import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import { useEffect } from "react";
import Routers from "./Routes/Routers";

function App() {
  
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
