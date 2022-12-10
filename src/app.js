import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './HeadingComponent';
import CardComponent from './CardComponent';
import {Team} from './Teamdata';
import SearchComponent from "./SearchComponent";
import { useState } from "react";

title = "Web Pirates";

const teamInformation = Team;

const CardContainer = ({filteredNames})=>{
  return(
    <div className="card-container">
       {filteredNames.map((temmateDetails) => (
          <CardComponent
            key={temmateDetails.id}
            temmateDetails={temmateDetails}
          />
        ))}
    </div>
  );

}

const BodyComponent = () => {
  const [filteredNames, setFilteredNames] = useState(teamInformation);
  return (
    <>
    <div className="seach-div">
    <SearchComponent  setFilteredNames={setFilteredNames}/>
    </div>
    <CardContainer filteredNames={filteredNames}/>
    </>
  );
};

const AppLayout=()=>
(
    <>
        <HeaderComponent/>
        <BodyComponent/>
    </>
)
console.log(HeaderComponent());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
