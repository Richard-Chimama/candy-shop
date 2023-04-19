import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LocalData from "../LocalData";
import InputComponent from "../components/InputComponent";
import ShowRoute from "../components/ShowRoute";
import Colors from "../Theme";
import { motion } from "framer-motion"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [InputValue, setInputValue] = useState(1);
  const { cartData, setCartData } = useContext(LocalData);



  
  useEffect(() => {
    fetch('https://product-api-production-3a61.up.railway.app/products')
    .then(response => response.json())
    .then(json => setProducts(json))
  }, [])


/* 

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://product-api-production-3a61.up.railway.app/products"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

 */



  const addToLocalData = (data) => {
    const checkData = cartData.find((item) => item.id === data._id);
    if (checkData == undefined) {
      setCartData((prev) => [
        ...prev,
        {
          id: data._id,
          title: data.title,
          image: data.image,
          price: data.price,
          item: InputValue,
        },
      ]);
    } else {
      setCartData(
        cartData.filter((el) => {
          if (el.id === data._id) {
            el.item += InputValue;
          }
          return el;
        })
      );
    }
  };

  


  const handleInputComponent = (data) => {
    setInputValue(data);
  };



  return (
    <>
      <ShowRoute
        route={"/products/"}
      />
      <Container>
        {products.map((product) => (
          <Content 
            as={motion.div} 
            whileHover={{ scale: 1.02 }} 
            key={product._id}
          >
            <Image src={product.image} alt={product.title} />
            <Details>
              <p>{product.title}</p>
              <p><b>{product.price} SEK</b></p>
            </Details>
            <InputDetails>
              <InputComponent onDataReceived={handleInputComponent} />
              <Buton 
                to={motion.button} 
                whileHover={{ 
                  backgroundColor: Colors.color3,
                  color: Colors.white,
                  cursor: 'pointer' 
                }} 
                onClick={() => 
                  addToLocalData(product)}
                >
                  Add to cart
              </Buton>
            </InputDetails>
            <ReadMore to={"/product/" + product._id}>
              <i>Information</i>
            </ReadMore>
          </Content>
        ))}
      </Container>
    </>
  );
};

const Details = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  margin-bottom: 0.7rem;
  margin-top: 0.7rem;

  p {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`
const InputDetails = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

`
const ReadMore = styled(Link)`
  margin-bottom: 1rem;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-decoration: none;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
  height: 270px;
  max-height: 300px;
  border-radius: 8px 8px 0 0;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.color7};
  border-radius: 8px;
  width: Calc(100%/3 - 1rem);
  height: 400px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
`;



const Buton = styled(motion.button)`
	border-radius:8px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:${Colors.black};
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size:14px;
	padding:12px;
	text-decoration:none;

&:active {
  position:relative;
	top:1px;
`;

export default Products;
