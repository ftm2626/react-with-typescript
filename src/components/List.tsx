import React from "react";
import { pType as propsType } from "../App";

const List = ({ people }: propsType) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.description}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
