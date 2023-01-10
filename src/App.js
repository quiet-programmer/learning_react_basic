import { Component } from "react";
import CardList from "./components/card_list/card_list.component";
import "./App.css";
import SearchBox from "./components/search_box/search_box.component";

class App extends Component {

  // calling constructor 
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // this calls the state (works well just like init state in flutter)
  componentDidMount() {
    this.fetchMonsters();
  }

  // function to call the API to get users name and email
  fetchMonsters() {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) =>
          this.setState(() => {
            return {
              monsters: users,
            };
          })
        );
    } catch (error) {
      console.log(error);
    }
  }

  // search functions
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title">Monster Search</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search_box"
        />

        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
