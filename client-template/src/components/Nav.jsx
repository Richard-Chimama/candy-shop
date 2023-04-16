import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import LocalData from "../LocalData";
import CartPanel from "./Cart";

const Nav = () => {
  const { cartData, setCartData } = useContext(LocalData);
  const [isOpen, setIsOpen] = useState(false);
  const promptRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (promptRef.current && !promptRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [promptRef]);

  return (
    <Container ref={promptRef}>
      <div>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>

      <Cart
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaShoppingCart color="#FFFFF" size={25} />
        <span>({cartData.length})</span>
      </Cart>
      {isOpen && (
        <CartPanel
          data={cartData}
          resetData={setCartData}
          closeCart={setIsOpen}
        />
      )}
    </Container>
  );
};

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Roboto;
  font-size: 22px;
  color: #333;
  padding-right: 1rem;
  color: white;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
`;

const Container = styled.nav`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Nav;
