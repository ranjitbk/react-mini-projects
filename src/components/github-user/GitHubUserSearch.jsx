import axios from "axios";
import React from "react";
import { useState } from "react";
import "./githubSerach.scss";

function GitHubUserSearch(props) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const repoResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setUserData(userResponse.data);
      setRepositories(repoResponse.data);
      setError("");
    } catch (error) {
      setUserData("");
      setRepositories("");
      setError("User not found. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="GitHubUserSearch">
      <h1>GitHub User Search</h1>
      <form className="form" action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter ingredients or dish name"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {userData && (
        <div className="user">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
      <div className="repositories">
        <h3>Repositories</h3>
        <ul>
          {repositories &&
            repositories.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default GitHubUserSearch;
