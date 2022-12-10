import { useState } from "react";
import { Team } from "./Teamdata";

const searchNames = (searchText) => {
  return Team.filter(
    (res) =>
      res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      res.designation
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
  );
};

const SearchComponent = ({ setFilteredNames }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredNames = searchNames(searchText);
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
