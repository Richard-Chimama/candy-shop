import React, { useState } from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import LocalData from "../LocalData";

const Root = () => {
  //This is just a sample data, it will be deleted at the end
  const data = [
    {
      id: "1234",
      title: "initial",
      image:
        "https://img.freepik.com/free-vector/sweet-candies-flat-elements-set_1284-34170.jpg?w=996&t=st=1681334045~exp=1681334645~hmac=2e8572685288d3f39519424b3d7da57de259748860c6fcac26e56a806e4b019a",
      price: "10",
      item: 1,
    },
    {
      id: "1235",
      title: "initial",
      image:
        "https://img.freepik.com/free-vector/sweet-candies-flat-elements-set_1284-34170.jpg?w=996&t=st=1681334045~exp=1681334645~hmac=2e8572685288d3f39519424b3d7da57de259748860c6fcac26e56a806e4b019a",
      price: "15",
      item: 2,
    },
    {
      id: "1236",
      title: "Candy Candy Candy",
      image:
        "https://img.freepik.com/free-vector/sweet-candies-flat-elements-set_1284-34170.jpg?w=996&t=st=1681334045~exp=1681334645~hmac=2e8572685288d3f39519424b3d7da57de259748860c6fcac26e56a806e4b019a",
      price: "20",
      item: 1,
    },
  ];
  const [cartData, setCartData] = useState(data);
  return (
    <LocalData.Provider value={{ cartData, setCartData }}>
      <Nav />

      <section>
        <Outlet />
      </section>
    </LocalData.Provider>
  );
};

export default Root;
