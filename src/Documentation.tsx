import React, { useState } from "react";

//handling Interface
interface IObject {
  id: number;
  name: string;
}
interface IArray {
  interfaceArray: {
    id: number;
    name: string;
    isTrue?: boolean;
  }[];
}
export default function Documentation() {

  //handling States
  const [number, setNumber] = useState<number>(0);
  const [string, setString] = useState<string>("this is a string");
  const [bool, setBool] = useState<boolean>(true);
  const [hybrid, setHybrid] = useState<number | string>(0);
  const [array, setArray] = useState<
    { id: number; name: string; isTrue?: boolean }[]
  >([
    {
      id: 1,
      name: "example",
    },
    {
      id: 2,
      name: "example2",
      isTrue: true,
    },
  ]);
  const [obj, setObj] = useState<IObject>({
    id: 1,
    name: "example",
  });
  const [interfaceArray, setInterfaceArray] = useState<
    IArray["interfaceArray"]
  >([
    {
      id: 1,
      name: "example",
      isTrue: false,
    },
  ]);

  //eventHandler

  const changeNumberFunction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ):void => {
    setNumber(10);
    //this function returns nothing/void
  };

  const changeHybridFunction = (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<MouseEvent>
  ):number => {
    setHybrid("10");
    return 10
    // this function returns a number
  };

  return (
    <div>
      <ChildOne interfaceArray={interfaceArray} />
      <ChildTwo interfaceArray={interfaceArray} />
      {/* {FunctionOne()} */}
      <button onClick={changeNumberFunction}></button>
      <button onClick={changeHybridFunction}></button>
    </div>
  );
}

//handling props

const ChildOne = (props: IArray) => {
  return <div>first way to type props</div>;
};

const ChildTwo: React.FC<IArray> = ({ interfaceArray }) => {
  //React.FC stands for react functional component
  return <div>a better way to pass prop type</div>;
};

//handling functions

// const FunctionOne = (): JSX.Element[] => {
//   // console.log('this function returns a jsx element');
// };
