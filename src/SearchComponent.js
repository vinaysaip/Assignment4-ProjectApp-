import { useState } from "react";
import { Team } from "./Teamdata";

const searchNames = (searchText, teammates) => {
  return teammates.filter((res) =>
    res.login.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchComponent = ({ setFilteredNames, teamData }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredNames = searchNames(searchText, teamData);
          console.log(searchText);
          setFilteredNames(filteredNames);
          console.log(setFilteredNames);
        }}
      >
        <input
          className="search-bar"
          placeholder="Type here to Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
