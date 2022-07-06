import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Food from "./pages/Food";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);
  const [version, setVersion] = useState([]);
  function combine(prevOrder) {
    setOrder((prev) => {
      console.log(...prev);
      return [...prev, prevOrder];
    });
  }

  return (
    <div className="App h-screen">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Food combine={combine} order={order} setOrder={setOrder}></Food>
          }
        />
        <Route path="/Order" element={<Order order={order}></Order>} />
      </Routes>
    </div>
  );
}

export default App;
