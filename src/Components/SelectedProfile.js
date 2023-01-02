import CardComponent from "./CardComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SelectedProfile = () => {
  let { loginid } = useParams();
  const [teamMateData, setteamMateData] = useState({});
  useEffect(() => {
    getUserData();
  }, []);
  async function getUserData() {
    const data = await fetch(`https://api.github.com/users/${loginid}`);
    const teammatedata = await data.json();
    setteamMateData(teammatedata);
  }
  //   return <CardComponent {...temmateDetails} />;
  return (
    <div className="container">
      <h1>{loginid}</h1>
      <CardComponent temmateDetails={teamMateData} />
    </div>
  );
};

export default SelectedProfile;
