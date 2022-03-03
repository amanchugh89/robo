import "./App.css";
import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <div>
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
