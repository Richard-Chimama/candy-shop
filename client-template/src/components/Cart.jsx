import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {FiTrash2} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import Colors from "../Theme";
import { motion } from "framer-motion";

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
            <P>{item.item} x {item.price}  kr</P>
            <Price>{item.item * item.price} kr</Price>
            <button onClick={()=>handleRemove(item.id)}><FiTrash2 size={15}/></button>
          </Content>
        ))
      )}
      <hr />
      <p>Total price: {total} kr</p>
      <CartAction>
        <Buton 
          as={motion.button} 
          whileHover={{ scale: 1.02 }} 
          onClick={() => resetData([])}
        >
          Reset Cart
        
        </Buton>
        <Buton2 
          as={motion.button} 
          whileHover={{ scale: 1.02 }}

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
  border-radius: 8px;

  & > p {
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
  padding-top 10px
`;

const P = styled.p`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 11px
`;

const Title = styled.div`
  flex-grow: 3;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
const Price = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;
const Buton = styled(motion.button)`
	border-radius: 8px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size:15px;
	padding:7px 14px;
	text-decoration:none;

&:active {
  position:relative;
	top:1px;
`;


const Buton2 = styled(motion.button)`
	background-color: ${Colors.color3};
	border-radius: 8px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size:15px;
	padding:7px 14px;
	text-decoration:none;

&:active {
  position:relative;
	top:1px;
`;

export default Cart;
