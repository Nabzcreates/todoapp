import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/dashboard" element = { <Dashboard/>}/>
        <Route path = "/" element = { <Signin />}/>
        <Route path = "/signup" element = {<Signup/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
