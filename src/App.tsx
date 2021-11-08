import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface pType {
  people: {
    name: string;
    age: number;
    url: string;
    description?: string;
  
  }[]
}
function App() {
  const [people, setPeople] = useState<pType["people"]>([
    {
      name: "fatemeh",
      age: 23,
      url: "",
      description: "this is a sample description",
    },
    {
      name: "mas",
      age: 32,
      url: "",
    },
  ]);
  return (
    <div className="App">
      <h1>list of people</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
