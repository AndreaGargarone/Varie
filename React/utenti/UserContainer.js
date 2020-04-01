import React from "react";

// OK ?
class UserContainer extends React.Component {
  state = {
    id: null
  };

  render() {
    return (
      <div>
        <Left name="left" onShowUser={id => this.props.showUser_2(id.id)} />
      </div>
    );
  }
}

// OK
class Left extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState({ users: json });
      });
  }

  gestisciCLick = idUser => {
    this.props.onShowUser({ id: idUser.id });
  };

  render() {
    return (
      <div>
        {this.state.users.map((item, index) => (
          <div key={item.id}>
            <button onClick={() => this.gestisciCLick({ id: item.id })}>
              {item.id} - {item.name}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default UserContainer;
