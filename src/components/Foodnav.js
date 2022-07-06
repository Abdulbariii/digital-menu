import React from "react";

const foodList = [
  {
    nameFood: "All",
    id: 0,
  },
  {
    nameFood: "Burger",
    id: 1,
  },
  {
    nameFood: "Pizza",
    id: 2,
  },
  {
    nameFood: "Chicken",
    id: 4,
  },
  {
    nameFood: "Pasta",
    id: 3,
  },
  {
    nameFood: "Salad",
    id: 5,
  },
  {
    nameFood: "Cake",
    id: 6,
  },
];

export default function Foodnav(props) {
  const genId = (event) => {};

  return (
    <div className="flex p-5 justify-center flex-wrap">
      {foodList.map((food) => (
        <button
          onClick={() => {
            props.foodHandler(food.id);
          }}
          className=" hover:bg-orange-600 transition-all bg-orange-500 text-white p-2 w-32 m-5 rounded-sm text-lg"
        >
          {food.nameFood}
        </button>
      ))}
    </div>
  );
}
