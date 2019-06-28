import React from "react";

export default class App extends React.Component {
  minID = 10;
  state = {
    someData: [
      { label: "first label", important: false, done: false, id: this.minID++ },
      {
        label: "second label",
        important: false,
        done: false,
        id: this.minID++
      },
      { label: "third label", important: false, done: false, id: this.minID++ },
      { label: "for label", important: false, done: false, id: this.minID++ }
    ]
  };
  render() {
    return (
      <div className="app">
        <h1>Поиск элементов</h1>
        <List someProps={this.state.someData} />
      </div>
    );
  }
}
