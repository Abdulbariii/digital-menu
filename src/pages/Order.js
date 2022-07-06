import React from "react";
import OrderTitle from "../components/OrderTitle";
import Card from "../components/Card";
import { useState } from "react";

export default function Order(props) {
  const [data, setData] = useState([props.order]);

  return (
    <div className="flex p-10 justify-center flex-col items-center">
      <OrderTitle></OrderTitle>

      <div className="flex justify-center items-center flex-wrap p-10">
        {props.order.map((food) => (
          <Card
            image={food.img}
            nameFood={food.nameFood}
            price={food.price}
            key={food}
          ></Card>
        ))}
      </div>
    </div>
  );
}
