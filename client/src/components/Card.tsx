import React, { useState } from "react";
import { queryClient } from "../main";

type CardProps = {
  photo: string;
  name: string;
  price: string;
};

const Card: React.FC<CardProps> = ({ photo, name, price }) => {
  const initialValue = Number(localStorage.getItem("counter")) || 0;

  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    localStorage.setItem("counter", newCounter.toString());
    queryClient.setQueryData(["productInTheCart"], newCounter);
  };

  return (
    <div className="m-4 max-w-sm overflow-hidden shadow-lg">
      <img className="w-full" src={photo} alt={name} />
      <div className="flex items-center justify-between">
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{name}</div>
          <p className="text-base text-gray-700">{price}</p>
        </div>
        <button
          onClick={incrementCounter}
          className="mx-6 transform rounded-lg bg-green-500 px-6 py-2 font-bold transition-transform duration-300 ease-in-out hover:scale-110"
        >
          Buy
        </button>

        <button
          onClick={() => {
            localStorage.setItem("counter", "0");
            queryClient.setQueryData(["productInTheCart"], 0);
          }}
          className="mx-6 transform rounded-lg bg-green-500 px-6 py-2 font-bold transition-transform duration-300 ease-in-out hover:scale-110"
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Card;
