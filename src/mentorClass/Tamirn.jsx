/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Button({ value, setCount, item }) {
  return (
    <button value={0} onClick={() => setCount((c) => c + 1)} dir="auto">
      <span className="w-20">{item.name}</span>
      <span className="w-20">{item.price} $</span>
      <span className="w-20"> count = {value} </span>
    </button>
  );
}

const itemList = [
  //   {
  //     name: "لباس",
  //     price: "1000",
  //   },
  //   {
  //     name: "کفش",
  //     price: "2000",
  //   },
];

// countList -> state

function Parent() {
  const [countList, setCountlist] = useState(Array(itemList.length).fill(0));
  const action = () => {
    if (countList.some()) alert("message");
  };

  return (
    <div className="flex flex-col gap-3">
      {itemList.length === 0
        ? "empty"
        : itemList.map((item, index) => (
            <Button
              key={item.name}
              value={countList[index]}
              setCount={() => {
                countList[index] += 1;
                setCountlist([...countList]);
              }}
              item={item}
            />
          ))}

      {/*       
      <Button
        value={countList[0]}
        setCount={() => {
          setCountlist([countList[0] + 1, ...countList.slice(1)]);
        }}
      />
      <Button
        value={countList[1]}
        setCount={() => {
          setCountlist([countList[0], countList[1] + 1, countList[2]]);
        }}
      />
      <Button
        value={countList[2]}
        setCount={() => {
          setCountlist([...countList.slice(0, 2), countList[2] + 1]);
        }}
      /> */}
      {/* <button onClick={() => setCountB1((c) => c + 1)}> {countButton1} </button> */}
      {/* <button onClick={() => setCountB2((c) => c + 1)}> {countButton2} </button> */}
      {/* <button onClick={() => setCountB3((c) => c + 1)}> {countButton3} </button> */}

      <button onClick={action}> action </button>
    </div>
  );
}

export default Parent;
