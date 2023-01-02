import React from "react";
import Repositories from "./Repositories";
class AboutUSComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "vinaysaip",
      userRepoData: "",
      repos: "",
    };
    console.log("Constructor-1'st class");
  }
  async componentDidMount() {
    let userName = "vinaysaip";
    console.log("componentDidMount-1'st class");
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const userData = await data.json();
    this.setState({ userInfo: userData });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  loadRepos = async () => {
    const data = await fetch(this.state.userInfo.repos_url);
    const userRepoData = await data.json();
    console.log(userRepoData);
    this.setState({ repos: userRepoData });
  };
  render() {
    const {
      name,
      login,
      avatar_url,
      location,
      company,
      public_repos,
      followers,
      following,
      repos_url,
    } = this.state.userInfo;
    const repos = this.state.repos;

    console.log(this.state.userInfo);

    return (
      <div className="container ">
        <h1 className="bold p-3">About Us!</h1>
        <div className="d-flex">
          <div>
            <img src={avatar_url} className="rounded-circle about-us" />
            {""}
          </div>
          <div className="p-3">
            <h2 className="font-weight-bold">{name}</h2>
            <p className="font-weight-bold">
              {company != null ? company : "Deloitte"} @{" "}
              {location != null ? location : "Hyderabad"}
            </p>
            <p className="font-weight-bold">
              <span className="text-success">{followers}</span> Followers
              <span className="p-2 text-success">{following}</span> Following
            </p>
            <button onClick={this.loadRepos} className="btn btn-primary">
              Load Repos
            </button>
            {repos.length != 0 ? (
              <div>
                <h4>Repositories:</h4>
                <Repositories repos={repos} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUSComponent;
