import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import LocalData from "../LocalData";
import styled from "styled-components";

const Section = styled.section `
  display: grid;
  grid-template-columns: minmax(30px, 1fr) [inner-start] minmax(0, 70rem) [inner-end] minmax(30px, 1fr);
`;

const SectionInner = styled.div `
  grid-column: inner;
  display: flex:
  justify-content: space-between;
  align-items: center;
`

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
      <Header />

      <Section>
        <SectionInner>
          <Outlet />
        </SectionInner>
      </Section>

      <Footer />
    </LocalData.Provider>
  );
};

export default Root;
