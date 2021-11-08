import React, { useState } from "react";
import { pType } from "../App";

interface Ipeople {
  people: pType["people"];
  setPeople: React.Dispatch<React.SetStateAction<pType["people"]>>
}

const AddToList:React.FC<Ipeople> = ({people,setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

    const handleClick = () => {
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                description: input.description
            }
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            description: ""
        })
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="url"
        value={input.url}
        placeholder="Image Url"
      />
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="note"
        value={input.url}
        placeholder="description"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
}

export default AddToList;
