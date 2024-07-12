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
     console.log("Child constructor");
  }
  async componentDidMount() {
     console.log("child Component did mount ");

    const data = await fetch("https://api.github.com/users/daydash");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userinfo;
    console.log("Child render")
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
