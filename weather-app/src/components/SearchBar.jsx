import React, { useState } from "react";

// Importing the icon for the search button
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Allows the user to input a location to receive weather data for
// Upon hitting the search button, an API GET request should be made via Redux middleware,
//      with the resulting data stored in the Redux store
function SearchBar() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="center cont searchCont">
      <h3 className="searchHeading">
        Which city do you wish to know the weather for?
      </h3>
      <div className="cont searchInputGroup">
        <input
          autoFocus={false}
          className="searchInput searchGroupElement"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="City"
        />
        <button className="center searchButton searchGroupElement">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
