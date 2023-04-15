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
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 6rem 0 6rem 0;
`;

const Root = () => {
  const data = [];
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
