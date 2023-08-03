import React from "react";

const UserCard = ({gitUser}) => {
  return (
    <div className="user-card">
      <img src={gitUser.avatar_url} alt="avatar" />
      <div className="user-details">
        <p style={{fontSize: "25px"}}>Login: {gitUser.login}</p>
        <p style={{fontSize: "25px", display: "block"}}>Type: {gitUser.type}</p>
        <p style={{fontSize: "25px", display: "block"}}>
          Email: {gitUser.email === null && "Not Avilable"}
        </p>
        <p style={{fontSize: "25px", display: "block"}}>
          Repos: {gitUser.public_repos && gitUser.public_repos}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
