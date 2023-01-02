import React from "react";

class Repositories extends React.Component {
  repos;
  constructor(props) {
    super(props);
    this.repos = props.repos;
    console.log(this.repos);
  }

  render() {
    console.log("Render method called...");
    // const repositories = this.repos.map((repoName) => {
    //   return <li key={repoName.id}>{repoName.full_name}</li>;
    // });
    // return <ul>{repositories}</ul>;
    return (
      <ul>
        {this.repos.map((repoName) => {
          return <li key={repoName.id}>{repoName.full_name}</li>;
        })}
      </ul>
    );
  }
}

export default Repositories;
