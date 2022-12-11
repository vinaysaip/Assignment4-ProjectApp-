import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeadingComponent";
import CardComponent from "./CardComponent";
import { Team } from "./Teamdata";
import SearchComponent from "./SearchComponent";
import { useState, useEffect } from "react";
import { git_Info } from "./api";

title = "Web Pirates";

const teamInformation = Team;

const CardContainer = ({ filteredNames }) => {
  return (
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

const BodyComponent = () => {
  const [teammates, setTeammates] = useState([]);
  const [filteredNames, setFilteredNames] = useState(teamInformation);
  const getUsers = async () => {
    const users = await git_Info();
    setTeammates(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="seach-div">
        <SearchComponent setFilteredNames={setTeammates} teamData={teammates} />
      </div>
      <CardContainer filteredNames={teammates} />
    </>
  );
};

const AppLayout = () => (
  <>
    <HeaderComponent />
    <BodyComponent />
  </>
);
console.log(HeaderComponent());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
