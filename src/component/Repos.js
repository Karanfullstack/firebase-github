import axios from "axios";
import React, {useEffect, useState} from "react";

const Repos = ({repos_url}) => {
  const [repos, setRepos] = useState([]);
  const reposFetch = async () => {
    try {
      const {data} = await axios.get(repos_url);
      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reposFetch();
  }, [repos_url]);
  console.log(repos);
  return (
    <div>
      <div className="repos">
        {repos &&
          repos.map((items) => {
            return (
              <div>
                <div className="lists">
                  <div className="avatar-image">
                    <img src={items?.owner?.avatar_url} />
                  </div>
                  <div className="info">
                    <p>Fulll Name: {items.name}</p>
                    <p>Language: {items.language}</p>
                    <p>Visibilty: {items.visibility}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Repos;
