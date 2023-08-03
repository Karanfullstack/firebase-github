import React, {useEffect, useState} from "react";
import Header from "./Header";
import {UseFetch} from "../Apis/UseFetch";
import axios from "axios";
import {toast} from "react-toastify";
import {redirect, useNavigate} from "react-router-dom";
import UserCard from "../component/UserCard";
import Repos from "../component/Repos";

const Home = ({user}) => {
  const navigate = useNavigate();
  const [gitUser, setGitUser] = useState(null);
  const [query, setQuery] = useState("");
  const [isDisable, setIsdisable] = useState(true);

  useEffect(() => {
    if (query === "") {
      return;
    } else {
      setIsdisable(false);
    }
  }, [query]);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(`https://api.github.com/users/${query}`);
      setGitUser(data);
      setQuery("");
    } catch (error) {
      toast(error.message, {
        type: "error",
      });
    }
  };

  const handelQuery = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const values = JSON.parse(localStorage.getItem("user"));
    if (!values) {
      return window.location.replace("/signin");
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <div className="inputs">
          <h2>Fetch For User</h2>
          <div className="search">
            <input
              value={query}
              onChange={handelQuery}
              type="text"
              placeholder="Github Users"
            />
          </div>
          <div className="btn">
            <button disabled={isDisable} onClick={fetchData}>
              Fetch Now
            </button>
          </div>
        </div>
        {gitUser && <UserCard gitUser={gitUser} />}
      </div>
      {gitUser?.repos_url && <Repos repos_url={gitUser.repos_url} />}
    </React.Fragment>
  );
};

export default Home;
