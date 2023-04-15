import React, { useState } from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import LocalData from "../LocalData";

const Root = () => {
  const data = [];
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
