import "./search.css";
// import { useState, useEffect } from "react";

function Search({ searchValue, setSearchValue }) {
  //   useEffect(() => {
  //     fetch("https://botw-compendium.herokuapp.com/api/v2")
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   }, []);

  return (
    <div className="searchBar">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
