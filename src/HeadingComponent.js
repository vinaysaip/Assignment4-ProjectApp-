const HeaderComponent = (props)=>{
    return(
        <div className="header">
        <div className="logo-title">
        <img className="logo" src={require("./assets/TeamLogo.jpg")} />
        <h1 className="title">Web Pirates</h1>
        </div>
        <input className="search-bar" placeholder="Type here to Search"></input>
        <p className="login-text">
        <img className="user-icon" src={require("./assets/user_icon.png")}/>
        Welcome, Vinay!</p>
        </div>
    )
}
export default HeaderComponent;