import React, { Component } from "react";

export default class ListItem extends Component {
  state = {
    done: false,
    important: false
  };

  render() {
    const { label } = this.props;
    const { important, done } = this.state;
    let classNames = "wrapper-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="list-item-label" onClick={this.onMarkDone}>
          {label}
        </span>
        <button className="btn btn-exclamation" onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-trash">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
