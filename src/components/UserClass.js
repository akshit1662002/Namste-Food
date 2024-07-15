import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // create state variable
    this.state = {
      userinfo: {
        name: "dummy",
        location: "dummy",
        avatar_url: "",
      },
    };
     
  }
  async componentDidMount() {
     

    const data = await fetch("https://api.github.com/users/akshit1662002");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userinfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>{name} </h2>
        <h3>{location} </h3>
      </div>
    );
  }
}

export default UserClass;
