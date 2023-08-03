import React, {useContext} from "react";
import {Usercontext} from "../context/UserContext";
import {toast} from "react-toastify";
const Header = () => {
  const {user, setUser} = useContext(Usercontext);
  const handelLogout = () => {
    toast("logout succssfuly", {
      type: "success",
    });
    setUser(null);
    localStorage.clear();
    setTimeout(() => {
      return window.location.replace("/signin");
    }, 2000);
  };
  return (
    <nav className="nav">
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/112323567?v=4"}
          alt="avatar"
        />
        <h4>{user?.email && user.email}</h4>
      </div>

      <h3 onClick={handelLogout} className="logout">
        Log out
      </h3>
    </nav>
  );
};

export default Header;
