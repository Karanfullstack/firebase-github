import React, {useState, useContext} from "react";
import {FaGithubAlt} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../config/firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";
import {Usercontext} from "../context/UserContext";
import {toast} from "react-toastify";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user, setUser} = useContext(Usercontext);

  //@HandelInputs
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  //@OnSubmit
  const handelSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast("Login Successfuly", {
          type: "success",
        });
        setUser({email: res.user.email, uid: res.user.uid});
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user?.email) {
    setTimeout(() => {
      return window.location.replace("/");
    }, 700);
  }
  return (
    <div className="sign-in">
      <FaGithubAlt className="git-icon" />
      <h2>Sign In</h2>
      <input
        onChange={handelEmail}
        value={email}
        type="email"
        placeholder="Enter your email.."
      />
      <input
        onChange={handelPassword}
        value={password}
        type="password"
        placeholder="Enter your password.."
      />
      <button onClick={handelSubmit}>Sign In</button>
      <div className="already">
        <Link to="/signup">
          <h6>Don't have an account? Sign up here!</h6>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
