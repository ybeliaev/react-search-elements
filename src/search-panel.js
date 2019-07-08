import React from "react";

export default class SearchPanel extends React.Component {
  state = {
    term: ""
  };
  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    console.log(term);
    this.props.makeSearchChange(term);
    console.log("****" + term);
  };
  render() {
    return (
      <input
        type="text"
        placeholder="input name of label element for seach"
        className="seach-input"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
