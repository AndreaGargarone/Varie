import React from "react";
import "./styles.css";
import UserContainer from "./UserContainer";

class App extends React.Component {
  state = {
    users: [],
    singleUser: undefined,
    id: undefined
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState({ users: json });
      });
  }

  handleClick = idUser => {
    this.setState({ id: idUser });
    /*console.log("ID: " + idUser + " Lenght: " + this.state.users.length);*/
    const filtered = this.state.users.filter(user => user.id === idUser);
    const single = filtered[0];
    this.setState({
      singleUser: single
    });
  };

  controllId() {
    if (this.state.id === undefined) {
      console.log("no");
      return "";
    } else {
      console.log("si");
      return this.state.id;
    }
  }

  render() {
    return (
      <div>
        <UserContainer showUser_2={idUser => this.handleClick(idUser)} />
        <p />
        <div>{JSON.stringify(this.state.singleUser)}</div>
      </div>
    );
  }
}

export default App;
