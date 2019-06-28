import React from "react";

import ListItem from "./list-item";

const List = ({ someProps }) => {
  const elements = someProps.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <ListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default List;
