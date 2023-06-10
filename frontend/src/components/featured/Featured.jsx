import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const searchQuery = encodeURIComponent(input); // Encode the search query

    // Construct the search URL with multiple search parameters
    const searchURL = `/gigs?cat=${searchQuery}`;

    // Perform the search by redirecting to the search page with the constructed search URL
    navigate(searchURL);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Efficient Automated <span>service providers</span> for you
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder="Search for Professionals"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
