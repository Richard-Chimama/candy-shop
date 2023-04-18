import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {FiTrash2} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import Colors from "../Theme";

const Cart = ({ data, resetData, closeCart }) => {
  const navigate = useNavigate();
  const [total, setTotal]= useState(0)

  
  useEffect(()=>{
    let sum = 0
    if(data.length >= 1){
      for(let el of data){
        sum += el.item * parseInt(el.price)
      }
    }
    setTotal(sum)
  }, [data])

  const handleRemove = (id)=>{
    resetData(data.filter((item)=> item.id !== id))
  }
  
  
  return (
    <Container>
      {data.length <= 0 ? (
        <p>No Item in the List</p>
      ) : (
        data.map((item, index) => (
          <Content key={item.id}>
            <Image src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            {item.item} x {item.price}  kr
            <Price>{item.item * item.price} kr</Price>
            <button onClick={()=>handleRemove(item.id)}><FiTrash2 size={15}/></button>
          </Content>
        ))
      )}
      <hr />
      <p>Total price: {total} kr</p>
      <CartAction>
        <Buton2 onClick={() => resetData([])}>Reset Cart</Buton2>
        <Buton2
          onClick={() => {
            navigate("/checkout");
            closeCart(false);
          }}
        >
          Proceed to checkout
        </Buton2>
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
  background-color: white;
  width: 380px;
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
  padding-left: 10px;
  padding-right: 10px;
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


const Buton2 = styled.button`
//box-shadow: 0px 0px 10px 0px #eb0ece;
	background-color: ${Colors.black};
	border-radius:28px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:7px 14px;
	text-decoration:none;

&:active {
  position:relative;
	top:1px;
`;

export default Cart;
