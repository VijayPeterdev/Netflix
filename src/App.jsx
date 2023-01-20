import "./App.css";
import SignedHome from "./Pages/SignedHome/SignedHome";
import { Routes, Route } from "react-router-dom";

// import Home from './Pages/Home/Home';
// import Login from './Pages/Login/Login';

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route    element={ user?  <SignedHome/> : <Home/>}   path="/" />
        <Route index element={ !user?  <Signup /> : <SignedHome/> } path="/signup" />
        <Route index element={ !user? <Login /> : <SignedHome/> } path="/login" />
         
       {user ?
       <>
        <Route element={<SignedHome type={"movies"} />} path="/movies" />
        <Route element={<SignedHome type={"series"} />} path="/series" />
        </>  :  <Route element={ user? <SignedHome/> : <Home/>} path={"*"}/>
       } 
        <Route element={ user? <SignedHome/> : <Home/>} path={"*"}/>
      </Routes>
    </div>
  );
}

export default App;
