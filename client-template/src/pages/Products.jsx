import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LocalData from "../LocalData";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [InputValue, setInputValue] = useState(1);
  const { cartData, setCartData } = useContext(LocalData);

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
          item: 1,
        },
      ]);
    } else {
      setCartData(
        cartData.filter((el) => {
          if (el.id === data._id) {
            el.item = el.item + 1;
          }
          return el;
        })
      );
    }
  };
  const handleInputChange = (e, id) => {
    e.preventDefault();
    setInputValue(e.target.value)
    setCartData(
      cartData.filter((el) => {
        if (el.id === id) {
          el.item = InputValue;
        }
        return el;
      })
    );
  }
  const getValue =(id)=>{
    const value = cartData.find((item)=> item.id === id)
    console.log(value)
    if(value == undefined){
      return 1
    }else{
      return value.item
    }
  }

  return (
    <Container>
      {products.map((product) => (
        <Content key={product._id}>
          <Image src={product.image} alt="here should be a image" />
          <h2>{product.title}</h2>
          <p>{product.price} SEK</p>
          <Input
            type="number"
            value={InputValue}
            onChange={(e)=>handleInputChange(e, product._id)}
          />
          <br />
          <button onClick={() => addToLocalData(product)}>Add to cart</button>
          <p>In Stock</p>

          <Link to={"/product/" + product._id}>
            <i>Read more...</i>
          </Link>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Input = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  font-family: 600;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 27%;
  height: 400px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;
export default Products;
