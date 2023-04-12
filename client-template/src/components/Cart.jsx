import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Cart = ({ data, resetData, closeCart }) => {
  const navigate = useNavigate();
  const [total, setTotal]= useState(0)

  
  useEffect(()=>{
    let sum = 0
    if(data.length >= 1){
      for(let el of data){
        sum += parseInt(el.price)
      }
    }
    setTotal(sum)
  }, [data.length])
  
  
  return (
    <Container>
      {data.length <= 0 ? (
        <p>No Item in the List</p>
      ) : (
        data.map((item, index) => (
          <Content key={index}>
            <Image src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <Price>{item.price} kr</Price>
          </Content>
        ))
      )}
      <hr />
      <p>Total price: {total} kr</p>
      <CartAction>
        <button onClick={() => resetData([])}>Reset Cart</button>
        <button
          onClick={() => {
            navigate("/checkout");
            closeCart(false);
          }}
        >
          Proceed to checkout
        </button>
      </CartAction>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 2.7rem;
  right: 6rem;
  border: 1px solid #000;
  padding-bottom: 1rem;
  width: 300px;
  font-family: Roboto;
  font-size: 14px;
  z-index: 9999;

  & > p {
    text-align: center;
    font-weight: 600;
  }
`;
const CartAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
const Title = styled.div`
  flex-grow: 3;
`;
const Price = styled.div`
  font-weight: 600;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

export default Cart;
