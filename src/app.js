import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './HeadingComponent';
import CardComponent from './CardComponent';
import vinayPic from './assets/Vinay_Puvvadi.jpg'
title = "Web Pirates";

const teamInformation = [
  {
    name: "Vinay Puvvadi",
    company: "Deloitte",
    designaton: "Consultant",
    location: "Hyderabad",
    id: "1",
    image: vinayPic,
  },
  {
    name: "Vinay Puvvadi",
    company: "Deloitte",
    designaton: "Consultant",
    location: "Hyderabad",
    id: "2",
    image: vinayPic,
  }
]

const BodyComponent = () => {
  return (
    <div className="card-container">
       {teamInformation &&
        teamInformation.length > 0 &&
        teamInformation.map((temmateDetails) => (
          <CardComponent
            key={temmateDetails.id}
            temmateDetails={temmateDetails}
          />
        ))}
    </div>
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
