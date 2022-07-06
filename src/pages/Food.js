import React, { useEffect } from "react";
import Foodnav from "../components/Foodnav";
import Card from "../components/Card";
import { useState } from "react";
import { data } from "autoprefixer";
import Order from "./Order";

export default function Food(props) {
  const dataFood = [
    {
      nameFood: "Burger meat",
      price: "10$",
      img: "https://images.unsplash.com/photo-1575980726530-4e673bfa0ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 1,
    },
    {
      nameFood: "Burger chicken",
      price: "8$",
      img: "https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80",
      id: 1,
    },
    {
      nameFood: "Burger Double",
      price: "14$",
      img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80",
      id: 1,
    },
    {
      nameFood: "Burger Special",
      price: "12$",
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      id: 1,
    },
    {
      nameFood: "Hot Burger",
      price: "10$",
      img: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 1,
    },
    {
      nameFood: "Margherita Pizza",
      price: "6$",
      img: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 2,
    },
    {
      nameFood: "Chicken Pizza",
      price: "12$",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
      id: 2,
    },
    {
      nameFood: "Special Pasta",
      price: "9$",
      img: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      id: 3,
    },
    {
      nameFood: "Normal Pizza",
      price: "8$",
      img: " https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=268&q=80",
      id: 2,
    },
    {
      nameFood: "Pizza vegetable",
      price: "7$",
      img: " https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
      id: 2,
    },
    {
      nameFood: "Pizza Salami",
      price: "9$",
      img: " https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      id: 2,
    },
    {
      nameFood: "Piece Pizza",
      price: "3$",
      img: " https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 2,
    },
    {
      nameFood: "Hot pasta",
      price: "7$",
      img: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 3,
    },
    {
      nameFood: "Pasta france",
      price: "8$",
      img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80",
      id: 3,
    },
    {
      nameFood: "Normal Pasta",
      price: "5$",
      img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 3,
    },
    {
      nameFood: "Chicken Tka",
      price: "12$",
      img: "https://images.unsplash.com/photo-1594266063697-304befca9629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 4,
    },
    {
      nameFood: "Chicken fully",
      price: "15$",
      img: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 4,
    },
    {
      nameFood: "Crispy",
      price: "9$",
      img: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      id: 4,
    },
    {
      nameFood: "Healthy Salat",
      price: "3$",
      img: " https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 5,
    },
    {
      nameFood: "Hot salat",
      price: "3$",
      img: "https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 5,
    },
    {
      nameFood: "Sweet Cake",
      price: "2.5$",
      img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 6,
    },
  ];

  const [data, setData] = useState(dataFood);

  const foodHandler = (id) => {
    setData(dataFood);
    setData((food) => {
      if (id == 0) {
        return dataFood;
      } else {
        return food.filter((food) => {
          return food.id == id;
        });
      }
    });
  };

  console.log(dataFood.id);

  useEffect(() => {
    props.setOrder(dataFood);
  }, []);

  const orderHandler = (nameFood) => {
    props.setOrder((food) => {
      return food.filter((food) => {
        props.combine(food);
        return food.nameFood == nameFood;
      });
    });
  };

  return (
    <div>
      <Foodnav foodHandler={foodHandler}></Foodnav>
      <div className="flex justify-center items-center flex-wrap p-10">
        {data.map((food) => (
          <Card
            image={food.img}
            nameFood={food.nameFood}
            price={food.price}
            key={food}
            orderHandler={orderHandler}
          ></Card>
        ))}
      </div>
    </div>
  );
}
