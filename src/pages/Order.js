import React from "react";
import OrderTitle from "../components/OrderTitle";
import Card from "../components/Card";
export default function Order(props) {
  return (
    <div className="flex p-10 justify-center flex-col items-center">
      <OrderTitle></OrderTitle>

      <div className="flex justify-center items-center flex-wrap p-10">
        {props.order.map((food) => (
          <Card
            image={food.image}
            nameFood={food.nameFood}
            price={food.price}
            key={food.idd}
          ></Card>
        ))}
      </div>
    </div>
  );
}
