import React, {useContext, useState} from "react";
import {FaGithubAlt, FaTruckLoading} from "react-icons/fa";
import {Link} from "react-router-dom";
import {auth} from "../config/firebaseConfig";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {Usercontext} from "../context/UserContext";
import {toast} from "react-toastify";

const SignUp = () => {
  const {user, setUser} = useContext(Usercontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user?.email) {
    return window.location.replace("/signin");
  }

  const handelSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser({email: res.user.email, uid: res.user.uid});
        toast("User Successfuly Created", {
          type: "success",
        });
        setEmail("");
        setPassword("");
        setTimeout(() => {
          window.location.replace("/signin");
        }, 2000);
      })
      .catch((error) => {
        toast(error.message, {
          type: "error",
        });
        console.log(error.message);
      });
  };

  const handelEmail = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };

  const handelPassword = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  };

  return (
    <div className="sign-in">
      <FaGithubAlt className="git-icon" />
      <h2>Sign Up</h2>
      <input
        onChange={handelEmail}
        type="email"
        placeholder="Enter your email.."
        value={email}
      />
      <input
        onChange={handelPassword}
        type="password"
        placeholder="Enter your password.."
        value={password}
      />
      <button onClick={handelSubmit}>Sign Up</button>
      <div className="already">
        <Link to="/signin">
          <h6>Already have an account? Sign In here!</h6>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
