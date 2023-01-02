import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import NoDataFoundComponent from "./NoDataComponent";
import { git_Info } from "../api.js";
import CardComponent from "./CardComponent";

const SearchResultsComponent = () => {
  const [teammates, setTeammates] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const getUsers = async () => {
    const users = await git_Info();
    setTeammates(users);
    setFilteredNames(users);
  };

  const CardContainer = ({ filteredNames }) => {
    return filteredNames.length == 0 ? (
      <NoDataFoundComponent />
    ) : (
      <div className="card-container">
        {filteredNames.map((temmateDetails) => (
          <CardComponent
            key={temmateDetails.id}
            temmateDetails={temmateDetails}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <div className="seach-div">
        <SearchComponent
          setFilteredNames={setFilteredNames}
          teamData={teammates}
        />
      </div>
      <CardContainer
        filteredNames={filteredNames.length ? filteredNames : teammates}
      />
    </div>
  );
};

export default SearchResultsComponent;
