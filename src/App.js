import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Home from "./pages/Home";
import {Usercontext} from "./context/UserContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    setUser(savedUser);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Usercontext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={<Home user={user} />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Usercontext.Provider>
    </BrowserRouter>
  );
};

export default App;
